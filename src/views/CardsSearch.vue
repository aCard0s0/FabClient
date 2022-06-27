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
          <button id="nav-grid-tab" aria-controls="nav-grid" aria-selected="true" class="nav-link active"
                  data-bs-target="#nav-grid" data-bs-toggle="tab" role="tab" type="button">
            <font-awesome-icon icon="grip-horizontal"/>
            Grid
          </button>
          <button id="nav-table-tab" aria-controls="nav-table" aria-selected="false" class="nav-link"
                  data-bs-target="#nav-table" data-bs-toggle="tab" role="tab" type="button">
            <font-awesome-icon icon="grip-lines"/>
            Table
          </button>


          <!-- Settings-->
          <div class="dropdown">
            <button class="btn nav-link dropdown-toggle" type="button" id="dropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
              <font-awesome-icon icon="cogs"/>
            </button>
            <div class="dropdown-menu setting-menu justify-content-center"  aria-labelledby="dropdownSettings" >
              <!-- Page Size -->
              <div class="row" @click.stop.prevent>
                <div class="input-group-lg">
                  Page Size:
                  <input type="text" pattern="[0-9]{4}" size="4" maxlength="4" v-model="nCardToDisplay"/>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
              <hr />
              <!-- Image size-->
              <div class="row" @click.stop.prevent>
                <div class="input-group-sm">
                  Grid Zoom:
                  <button type="button" class="btn btn-primary setting-buttons" @click="decreaseImageSize">-</button>
                  {{ cardSize() }}
                  <button type="button" class="btn btn-primary setting-buttons" @click="increaseImageSize">+</button>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
              <hr />
              <!-- Mouse Over Zoom
              <div class="row">
                <div class="col-12">
                  <div class="form-switch">
                    <input class="form-check-input" type="checkbox" v-model="maximize" @click="changeMaximize()" />
                    Maximize
                  </div>
                </div>
              </div>
              <hr />-->
              <!-- Show grid title -->
              <div class="row">
                <div class="col-12">
                  <div class="form-switch">
                    <input class="form-check-input" type="checkbox" v-model="gridHasTitle" @click="changeGridHasTitle()" />
                    Grid Card Code&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>

      <div id="nav-tabContent" class="tab-content">
        <div id="nav-grid" aria-labelledby="nav-grid-tab" class="tab-pane fade show active" role="tabpanel">
          <CardGrid
              :key="{cards, nCardToDisplay}"
              :cards="cards"
              :nCardToDisplay="nCardToDisplay"/>
        </div>
        <div id="nav-table" aria-labelledby="nav-tab-tab" class="tab-pane fade" role="tabpanel">
          <CardTable
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
import SearchBar from "../components/cardSearch/SearchBar";
import {queryStore} from "../stores/queryStore";
import {useSearchSettingsStore} from "../stores/searcherSettingsStore";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: "CardSearcher",
  components: {SearchBar, SideFilter, CardTable, CardGrid},
  setup(props) {
    const {cards, loadCards} = getCardsSearch()
    const store = queryStore()
    const nCardToDisplay = ref(36)
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
      console.log(props.set)
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



    const searchSettings = useSearchSettingsStore()
    const { gridHasTitle, maximize } = storeToRefs(searchSettings);
    const {
      changeGridHasTitle, changeMaximize,
      increaseImageSize, decreaseImageSize
    } = searchSettings

    let zoom = ref(10)
    searchSettings.$subscribe((mutation, state) => {
      zoom.value = state.gridImageCurrentSize
      console.log(zoom.value)
    })


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
      checkedFrames, updateCheckedFrames,
      decreaseImageSize,
      increaseImageSize,
      cardSize: () => (10 * 0.1).toFixed(1),
      gridHasTitle,
      changeGridHasTitle: () => changeGridHasTitle(),
      maximize,
      changeMaximize: () => changeMaximize()
    }
  }
}
</script>

<style scoped>

.setting-menu {
  padding: 1rem 0.75rem 1rem 0.75rem;
  width: 15rem;
}

.setting-buttons {
  font-weight: bolder !important;
  font-size: 15px !important;
}

hr {
  margin: 0.5rem 0 0.5rem 0 !important;
}

</style>
