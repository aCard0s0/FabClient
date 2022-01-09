<template>
    <!-- Search Bar -->
    <div class="row justify-content-md-center">
      <div class="col-md-7">
        <div class="input-group">
          <input type="text" class="form-control bg-light border-0 small" placeholder="Search by card code, name or text"
                 aria-label="Search" aria-describedby="basic-addon2" v-model="query" @keyup.enter="handleSearchSubmit(query)">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="handleSearchSubmit(query)" >
              <font-awesome-icon icon="search" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- More filters -->
    <div class="row justify-content-md-center">
      <div class="col-10">
        <MoreFilters
            :resources = resources
            @update:selected-resources="updateSelectedResources"
            :clazz = clazz
            @update:selected-class="updateSelectedClass"
            :type = type
            @update:selected-type="updateSelectedType"
            :talent = talent
            @update:selected-talent="updateSelectedTalent"
            :cost = costInput
            @update:input-cost="updateInputCost"
            :power = powerInput
            @update:input-power="updateInputPower"
            :defense = defenseInput
            @update:input-defense="updateInputDefense"
            :text = textInput
            @update:input-text="updateInputText"/>
      </div>
    </div>

    <div class="row">
      <!-- SideFilter -->
      <div class="col-lg-2" style="padding-top: 40px">
        <SideFilter
            @update:check-releases="updateCheckedReleases"
            @update:check-rarities="updateCheckedRarities"
            @update:check-frames="updateCheckedFrames"/>
      </div>

      <!-- Main Content -->
      <div class="col-lg-10">
        <nav>
          <div class="nav nav-tabs justify-content-end" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true">Grid</button>
            <button class="nav-link" id="nav-table-tab" data-bs-toggle="tab" data-bs-target="#nav-table" type="button" role="tab" aria-controls="nav-table" aria-selected="false">Table</button>
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Size: {{nCardToDisplay}}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" @click="onNumCardToDisplay(24)">24</a></li>
                <li><a class="dropdown-item" @click="onNumCardToDisplay(48)">48</a></li>
                <li><a class="dropdown-item" @click="onNumCardToDisplay(cards.length)">All</a></li>
              </ul>
            </div>
            <!-- Settings
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Settings
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item"> Page Size: xx </a></li>
                <li><a class="dropdown-item"> Mouse Over </a></li>
                <li><a class="dropdown-item"> Zoom </a></li>
              </ul>
            </div>-->
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
            <CardGrid
                :key="{cards, nCardToDisplay}"
                :cards="cards"
                :nCardToDisplay="nCardToDisplay" />
          </div>

          <div class="tab-pane fade" id="nav-table" role="tabpanel" aria-labelledby="nav-table-tab">
            <CardTable
                :key="{cards, nCardToDisplay}"
                :cards="cards"
                :nCardToDisplay="nCardToDisplay" />
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import {ref} from "vue";
import CardTable from "../components/cardExplorer/CardTable";
import CardGrid from "../components/cardExplorer/CardGrid";
import getCardsSearch from "../composables/getCardsSearch";
import SideFilter from "../components/cardExplorer/SideFilter";
import MoreFilters from "../components/cardExplorer/MoreFilters";

export default {
  name: "CardSearcher",
  components: {MoreFilters, SideFilter, CardTable, CardGrid },
  setup () {
    const nCardToDisplay = ref(24)
    const query = ref("")
    // more filters
    const resources = ref("")
    const clazz = ref("")
    const type = ref("")
    const talent = ref("")
    const costInput = ref()
    const powerInput = ref()
    const defenseInput = ref()
    const textInput = ref("")
    // side filters
    const checkedReleases = ref([])
    const checkedRarities = ref([])
    const checkedFrames = ref([])
    // API calls
    const {cards, loadCards, loadDefaultCards } = getCardsSearch()

    loadDefaultCards()

    const onNumCardToDisplay = (nCards) => {
      nCardToDisplay.value = nCards
    }

    //region MoreFilters
    const updateSelectedResources = (newValue) => {
      resources.value = newValue
    }

    const updateSelectedClass = (newValue) => {
      clazz.value = newValue
    }

    const updateSelectedType = (newValue) => {
      type.value = newValue
    }
    const updateSelectedTalent = (newValue) => {
      talent.value = newValue
    }

    const updateInputCost = (newValue) => {
      costInput.value = newValue
    }

    const updateInputPower = (newValue) => {
      powerInput.value = newValue
    }

    const updateInputDefense = (newValue) => {
      defenseInput.value = newValue
    }

    const updateInputText = (newValue) => {
      textInput.value = newValue
    }
    //endregion

    //region Sidebar
    const updateCheckedReleases = (releases) => {
      checkedReleases.value = releases
    }

    const updateCheckedRarities = (rarities) => {
      checkedRarities.value = rarities
    }

    const updateCheckedFrames = (frames) => {
      checkedFrames.value = frames
    }
    //endregion

    const handleSearchSubmit = (query) => {
      loadCards(
          query, checkedReleases.value, checkedRarities.value, checkedFrames.value,
          resources.value.value, clazz.value.value, type.value.value, talent.value.value,
          costInput.value, powerInput.value, defenseInput.value, textInput.value
      )
    }

    return {
      cards,
      nCardToDisplay, onNumCardToDisplay,
      query, handleSearchSubmit,
      // more filters
      resources,  updateSelectedResources,
      clazz, updateSelectedClass,
      type, updateSelectedType,
      talent, updateSelectedTalent,
      costInput, updateInputCost,
      powerInput, updateInputPower,
      defenseInput, updateInputDefense,
      textInput, updateInputText,
      // side filters
      checkedReleases, updateCheckedReleases,
      checkedRarities, updateCheckedRarities,
      checkedFrames, updateCheckedFrames
    }
  }
}
</script>

<style scoped>

</style>
