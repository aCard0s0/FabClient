<template>

    <!-- Search Bar -->
    <div class="row justify-content-md-center">
      <div class="col-md-7">

        <!-- Query input -->
        <div class="input-group">
          <input type="text" class="form-control bg-light border-0 small" placeholder="Search by name or code"
                 aria-label="Search" aria-describedby="basic-addon2" v-model="query" @keyup.enter="handleSearchSubmit(query)">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="handleSearchSubmit(query)" >
              <font-awesome-icon icon="search" />
            </button>
          </div>
        </div>

        <!-- More filters -->
        <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">More filters</a>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">

            <!-- Resources & Class & Card Type-->
            <div class="row justify-content-md-center">
              <div class="col-lg-auto">
                <div class="input-group mb-3">
                  <span class="input-group-text">Resources</span>
                  <div class="dropdown">
                    <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      {{ resources.name || "All" }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <li v-for="resource in resourceOptions" :key="resource">
                        <a class="dropdown-item" @click="onSelectResource(resource)">{{resource.name}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-auto">
                <div class="input-group mb-3">
                  <span class="input-group-text">Class</span>
                  <div class="dropdown">
                    <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton11" data-bs-toggle="dropdown" aria-expanded="false">
                      {{ clazz.name || "All" }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton11">
                      <li v-for="clazz in classOptions" :key="clazz">
                        <a class="dropdown-item" @click="onSelectClazz(clazz)">{{clazz.name}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-auto">
                <div class="input-group mb-3">
                  <span class="input-group-text">Card Type</span>
                  <div class="dropdown">
                    <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton10" data-bs-toggle="dropdown" aria-expanded="false">
                     {{ type.name || "All" }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton10">
                      <li v-for="type in typeOptions" :key="type">
                        <a class="dropdown-item" @click="onSelectType(type)">{{type.name}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cost & Power & Defense-->
            <div class="row justify-content-md-center">
              <div class="col-lg-auto">
                <div class="input-group mb-3">
                  <span class="input-group-text">Cost</span>
                  <div class="dropdown">
                    <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                      Equals
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                      <li><a class="dropdown-item">Equals</a></li>
                      <!--<li><a class="dropdown-item">Greater</a></li>
                      <li><a class="dropdown-item">Smaller</a></li>-->
                    </ul>
                  </div>
                  <input type="text" size="3" maxlength="3" class="form-control" v-model="costInput">
                </div>
              </div>
              <div class="col-lg-auto">
                <div class="input-group mb-3">
                  <span class="input-group-text">Power</span>
                  <div class="dropdown">
                    <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                      Equals
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                      <li><a class="dropdown-item">Equals</a></li>
                      <!--<li><a class="dropdown-item">Greater</a></li>
                      <li><a class="dropdown-item">Smaller</a></li>-->
                    </ul>
                  </div>
                  <input type="text" size="3" maxlength="3" class="form-control" v-model="powerInput">
                </div>
              </div>
              <div class="col-lg-auto">
                <div class="input-group mb-3">
                  <span class="input-group-text">Defense</span>
                  <div class="dropdown">
                    <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
                      Equals
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                      <li><a class="dropdown-item">Equals</a></li>
                      <!--<li><a class="dropdown-item">Greater</a></li>
                      <li><a class="dropdown-item">Smaller</a></li>-->
                    </ul>
                  </div>
                  <input type="text" size="3" maxlength="3" class="form-control" v-model="defenseInput">
                </div>
              </div>
            </div>

            <!-- Text -->
            <textarea class="form-control" rows="1" placeholder="Search by text"></textarea>
            <!--<div class="row justify-content-md-center">
              <div class="col-lg-6">
                <button class="btn btn-primary" type="button" @click="handleSearchSubmit(query)" >Filter</button>
              </div>
            </div>-->
          </div>
        </div>

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
                <li><a class="dropdown-item" @click="onNumCardToDisplay(50)">50</a></li>
                <li><a class="dropdown-item" @click="onNumCardToDisplay(displayCards.length)">All</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
            <CardGrid :cards="displayCards" :nCardToDisplay="nCardToDisplay"/>
          </div>
          <div class="tab-pane fade" id="nav-table" role="tabpanel" aria-labelledby="nav-table-tab">
            <h1>Table</h1>
            <CardTable :cards="displayCards"/>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
import {ref} from "vue";
import CardTable from "../components/CardTable";
import CardGrid from "../components/CardGrid";

import getCardsSearch from "../composables/getCardsSearch";
import SideFilter from "../components/SideFilter";
import getClassOptions from "../composables/filters/getClassOptions";
import getTypeOptions from "../composables/filters/getTypeOptions";
import getResourceOptions from "../composables/filters/getResourceOptions";


export default {
  name: "CardSearcher",
  components: {SideFilter, CardTable, CardGrid },
  setup () {

    //region MoreFilters
    const { classOptions } = getClassOptions()
    const clazz = ref({})
    const onSelectClazz = (selectedClass) => {
      clazz.value = selectedClass
    }

    const { typeOptions } = getTypeOptions()
    const type = ref({})
    const onSelectType = (selectedType) => {
      type.value = selectedType
    }

    const { resourceOptions } = getResourceOptions()
    const resources = ref({})
    const onSelectResource = (selectedResource) => {
      resources.value = selectedResource
    }

    const costInput = ref()
    const powerInput = ref()
    const defenseInput = ref()

    //endregion

    let displayCards = ref();
    const {cards, loadCards, loadDefaultCards } = getCardsSearch()

    loadDefaultCards()
    displayCards = cards

    const nCardToDisplay = ref(24)

    const onNumCardToDisplay = (nCards) => {
      nCardToDisplay.value = nCards
    }

    //region Sidebar
    const checkedReleases = ref([])
    const checkedRarities = ref([])
    const checkedFrames = ref([])

    const updateCheckedReleases = (releases) => {
      checkedReleases.value = releases
      console.log(checkedReleases)
    }

    const updateCheckedRarities = (rarities) => {
      checkedRarities.value = rarities
      console.log(checkedRarities)
    }

    const updateCheckedFrames = (frames) => {
      checkedFrames.value = frames
      console.log(checkedFrames)
    }
    //endregion

    const query = ref("")
    const handleSearchSubmit = (query) => {
      loadCards(
          query, checkedReleases.value, checkedRarities.value, checkedFrames.value,
          resources.value.value, clazz.value.name, type.value.name,
          costInput.value, powerInput.value, defenseInput.value
      )
    }

    return {
      clazz, classOptions, onSelectClazz,
      type, typeOptions, onSelectType,
      resources, resourceOptions, onSelectResource,
      costInput, powerInput, defenseInput,
      displayCards,
      onNumCardToDisplay, nCardToDisplay,
      checkedReleases, updateCheckedReleases,   // releases related
      checkedRarities, updateCheckedRarities,   // rarities related
      checkedFrames, updateCheckedFrames,
      query, handleSearchSubmit
    }
  }
}
</script>

<style scoped>

</style>
