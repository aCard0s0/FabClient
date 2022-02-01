<template>
  <SearchBar
      @click:input-query-submit="handleQuerySubmit"/>

  <div class="row">
    <!-- SideFilter -->
    <div class="col-sm-2" style="padding-top: 40px; padding-right: 0">
      <SideFilter
          :checked-rarities=checkedRarities
          :checked-resources=checkedResources
          :checkedSets=checkedSets
          :clazz=clazz
          :cost=costInput
          :defense=defenseInput
          :intellect=intellectInput
          :life=lifeInput
          :power=powerInput
          :talent=talent
          :type=type
          :checked-frames=checkedFrames
          @update:check-sets="updateCheckedSets"
          @update:check-rarities="updateCheckedRarities"
          @update:selected-class="updateSelectedClass"
          @update:selected-talent="updateSelectedTalent"
          @update:selected-type="updateSelectedType"
          @update:check-resources="updateCheckedResources"
          @update:input-cost="updateInputCost"
          @update:input-power="updateInputPower"
          @update:input-defense="updateInputDefense"
          @update:input-intellect="updateInputIntellect"
          @update:input-life="updateInputLife"
          @update:check-frames="updateCheckedFrames"/>
    </div>

    <!-- Main Content -->
    <div class="col-sm-10">
      <nav>
        <div id="nav-tab" class="nav nav-tabs justify-content-end" role="tablist">
          <button
              id="nav-table-tab" aria-controls="nav-table" aria-selected="false" class="nav-link active"
              data-bs-target="#nav-table" data-bs-toggle="tab" role="tab" type="button">
            Table
          </button>
          <button id="nav-grid-tab" aria-controls="nav-grid" aria-selected="true" class="nav-link"
                  data-bs-target="#nav-grid" data-bs-toggle="tab" role="tab" type="button">
            Grid
          </button>

          <div class="dropdown">
            <button id="dropdownMenuButton1" aria-expanded="false" class="btn nav-link dropdown-toggle"
                    data-bs-toggle="dropdown" type="button">
              Size: {{ nCardToDisplay }}
            </button>
            <ul aria-labelledby="dropdownMenuButton1" class="dropdown-menu">
              <li><a class="dropdown-item" @click="onNumCardToDisplay(28)">28</a></li>
              <li><a class="dropdown-item" @click="onNumCardToDisplay(56)">56</a></li>
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

      <div id="nav-tabContent" class="tab-content">
        <div id="nav-table" aria-labelledby="nav-table-tab" class="tab-pane fade show active" role="tabpanel">
          <CardTable
              :key="{cards, nCardToDisplay}"
              :cards="cards"
              :nCardToDisplay="nCardToDisplay"/>
        </div>
        <div id="nav-grid" aria-labelledby="nav-grid-tab" class="tab-pane fade" role="tabpanel">
          <CardGrid
              :key="{cards, nCardToDisplay}"
              :cards="cards"
              :nCardToDisplay="nCardToDisplay"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {onMounted, ref} from "vue";
import CardTable from "../components/cardSearch/CardTable";
import CardGrid from "../components/cardSearch/CardGrid";
import getCardsSearch from "../composables/getCardsSearch";
import SideFilter from "../components/cardSearch/SideFilter";
import MoreFilters from "../components/cardSearch/MoreFilters";
import SearchBar from "../components/cardSearch/SearchBar";
import {queryStore} from "../stores/queryStore";

export default {
  name: "CardSearcher",
  components: {SearchBar, MoreFilters, SideFilter, CardTable, CardGrid},
  setup() {
    const {cards, loadCards} = getCardsSearch()
    const store = queryStore()
    const nCardToDisplay = ref(28)
    // Side Filters
    const checkedSets = ref(["wtr"])
    const checkedRarities = ref([])
    const clazz = ref("")
    const talent = ref("")
    const type = ref("")
    const checkedResources = ref([])
    const costInput = ref()
    const powerInput = ref()
    const defenseInput = ref()
    const intellectInput = ref()
    const lifeInput = ref()
    const checkedFrames = ref([])

    onMounted(() => {
      handleQuerySubmit(store.getQuery)
    })

    const onNumCardToDisplay = (nCards) => {
      nCardToDisplay.value = nCards
      load()
    }

    const updateCheckedSets = (sets) => {
      checkedSets.value = sets
      load()
    }

    const updateCheckedRarities = (rarities) => {
      checkedRarities.value = rarities
      load()
    }

    const updateSelectedClass = (newValue) => {
      clazz.value = newValue
      load()
    }

    const updateSelectedTalent = (newValue) => {
      talent.value = newValue
      load()
    }

    const updateSelectedType = (newValue) => {
      type.value = newValue
      load()
    }

    const updateCheckedResources = (resources) => {
      checkedResources.value = resources
      load()
    }

    const updateInputCost = (newValue) => {
      costInput.value = newValue
      load()
    }

    const updateInputPower = (newValue) => {
      powerInput.value = newValue
      load()
    }

    const updateInputDefense = (newValue) => {
      defenseInput.value = newValue
      load()
    }

    const updateInputIntellect = (newValue) => {
      intellectInput.value = newValue
      load()
    }

    const updateInputLife = (newValue) => {
      lifeInput.value = newValue
      load()
    }

    const updateCheckedFrames = (frames) => {
      checkedFrames.value = frames
      load()
    }

    const handleQuerySubmit = (query) => {
      store.query = query
      load()
    }

    const load = () => {
      loadCards(
          store.query, checkedSets.value, checkedRarities.value, clazz.value.value, talent.value.value,
          type.value.value, checkedResources.value, costInput.value, powerInput.value,
          defenseInput.value, intellectInput.value, lifeInput.value, checkedFrames.value
      )
    }

    return {
      cards,
      nCardToDisplay, onNumCardToDisplay,
      handleQuerySubmit,
      // side filters
      checkedSets, updateCheckedSets,
      clazz, updateSelectedClass,
      type, updateSelectedType,
      talent, updateSelectedTalent,
      checkedResources, updateCheckedResources,
      costInput, updateInputCost,
      powerInput, updateInputPower,
      defenseInput, updateInputDefense,
      intellectInput, updateInputIntellect,
      lifeInput, updateInputLife,
      checkedRarities, updateCheckedRarities,
      checkedFrames, updateCheckedFrames
    }
  }
}
</script>

<style scoped>

</style>
