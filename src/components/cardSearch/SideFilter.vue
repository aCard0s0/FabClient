<template>
  <div id="accordionSideFilter" class="accordion">

    <!-- Reset Filters -->
    <div v-if="showResetFilterBtt()" class="accordion-item">
      <h2 class="accordion-header">
        <button class="btn btn-outline-primary btn-sm" style="width: 100%" @click="resetFilters()">
          <font-awesome-icon icon="eraser" style="color: gray"/>
          Reset Filters
        </button>
      </h2>
    </div>

    <!-- Releases -->
    <div class="accordion-item">
      <h2 id="panelsStayOpen-headingOne" class="accordion-header">

        <button aria-controls="panelsStayOpen-collapseOne" aria-expanded="true" class="accordion-button"
                data-bs-target="#panelsStayOpen-collapseOne" data-bs-toggle="collapse"
                type="button">Releases
        </button>

      </h2>
      <div id="panelsStayOpen-collapseOne" aria-labelledby="panelsStayOpen-headingOne"
           class="accordion-collapse collapse show">
        <div class="accordion-body">

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="form-check form-switch">
                <label class="form-check-label custom-font">All</label>
                <input v-model="isAllSetsChecked" class="form-check-input" type="checkbox" @click="checkAllSets()">
              </div>
              <div v-for="set in sets" :key="set">
                <div class="form-check form-switch">
                  <label class="form-check-label custom-font">{{ set.label }}</label>
                  <input v-model="checkedSets" :value="set.code" class="form-check-input" type="checkbox">
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>

    <!-- Rarities -->
    <div class="accordion-item">
      <h2 id="panelsStayOpen-headingTwo" class="accordion-header">
        <button aria-controls="panelsStayOpen-collapseTwo" aria-expanded="false" class="accordion-button collapsed"
                data-bs-target="#panelsStayOpen-collapseTwo" data-bs-toggle="collapse"
                type="button">
          Rarities
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" aria-labelledby="panelsStayOpen-headingTwo"
           class="accordion-collapse collapse">
        <div class="accordion-body">

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="form-check form-switch">
                <input v-model="isAllRaritiesChecked" class="form-check-input" type="checkbox"
                       @click="checkAllRarities()">
                <label class="form-check-label custom-font">All</label>
              </div>
              <div v-for="rarity in rarities" :key="rarity">
                <div class="form-check form-switch">
                  <input v-model="checkedRarities" :value="rarity.code" class="form-check-input" type="checkbox">
                  <label class="form-check-label custom-font">{{ rarity.name }}</label>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>

    <!-- Attributes -->
    <div class="accordion-item">
      <h2 id="panelsStayOpen-Attributes" class="accordion-header">
        <button aria-controls="panelsStayOpen-AttributesItems" aria-expanded="false" class="accordion-button collapsed"
                data-bs-target="#panelsStayOpen-AttributesItems" data-bs-toggle="collapse"
                type="button">
          Attributes
        </button>
      </h2>
      <div id="panelsStayOpen-AttributesItems" aria-labelledby="panelsStayOpen-Attributes"
           class="accordion-collapse collapse">
        <div class="accordion-body">

          <!-- Class -->
          <div class="input-group">
            Class: &nbsp;
            <div class="dropdown">
              <button id="dropdownMenuButton11" aria-expanded="false" class="btn nav-link dropdown-toggle no-padding"
                      data-bs-toggle="dropdown" type="button">
                {{ clazz.name || "All" }}
              </button>
              <ul aria-labelledby="dropdownMenuButton11" class="dropdown-menu">
                <li v-for="clazz in classOptions" :key="clazz">
                  <a class="dropdown-item" @click="onSelectClazz(clazz)">{{ clazz.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Talent -->
          <div class="input-group">
            Talent:
            <div class="dropdown">
              <button id="dropdownMenuButton12" aria-expanded="false" class="btn nav-link dropdown-toggle no-padding"
                      data-bs-toggle="dropdown" type="button">
                {{ talent.name || "None" }}
              </button>
              <ul aria-labelledby="dropdownMenuButton12" class="dropdown-menu">
                <li v-for="talent in talentOptions" :key="talent">
                  <a class="dropdown-item" @click="onSelectTalent(talent)">{{ talent.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Type -->
          <div class="input-group">
            Type:
            <div class="dropdown">
              <button id="dropdownMenuButton10" aria-expanded="false" class="btn nav-link dropdown-toggle no-padding"
                      data-bs-toggle="dropdown" type="button">
                {{ type.name || "All" }}
              </button>
              <ul aria-labelledby="dropdownMenuButton10" class="dropdown-menu">
                <li v-for="type in typeOptions" :key="type">
                  <a class="dropdown-item" @click="onSelectType(type)">{{ type.name }}</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="accordion-item">
      <h2 id="panelsStayOpen-Stats" class="accordion-header">
        <button aria-controls="panelsStayOpen-StatsItems" aria-expanded="false" class="accordion-button collapsed"
                data-bs-target="#panelsStayOpen-StatsItems" data-bs-toggle="collapse"
                type="button">
          Stats
        </button>
      </h2>
      <div id="panelsStayOpen-StatsItems" aria-labelledby="panelsStayOpen-Stats"
           class="accordion-collapse collapse">

        <!-- Resources -->
        <div class="justify-content-center" style="padding-top: 0.2rem">
          <div class="form-check form-check-inline">
            <input v-model="checkedResources" :value="red" class="form-check-input" type="checkbox">
            <img alt="fab card resources cost pitch 1" class="stats-icon-size" src="@/assets/imgs/icons/stats/pitch-1.png"/>
          </div>
          <div class="form-check form-check-inline">
            <input v-model="checkedResources" :value="yellow" class="form-check-input" type="checkbox">
            <img alt="fab card resources cost pitch 2" class="stats-icon-size" src="@/assets/imgs/icons/stats/pitch-2.png"/>
          </div>
          <div class="form-check form-check-inline">
            <input v-model="checkedResources" :value="blue" class="form-check-input" type="checkbox">
            <img alt="fab card resources cost pitch 3" class="stats-icon-size" src="@/assets/imgs/icons/stats/pitch-3.png"/>
          </div>
        </div>
        <div class="accordion-body">
          <!-- Cost -->
          <div class="input-group">
            <img alt="fab card resources cost" class="stats-icon-size" src="@/assets/imgs/icons/stats/cost.png"/>
            <div class="dropdown">
              <button id="dropdownCostModifier" aria-expanded="false" class="btn nav-link dropdown-toggle no-padding"
                      data-bs-toggle="dropdown" type="button">
                Equals
              </button>
              <ul aria-labelledby="dropdownCostModifier" class="dropdown-menu">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input v-model="cost" class="form-control form-control-sm" maxlength="3" size="3" type="text"/>
          </div>
          <!-- Power -->
          <div class="input-group">
            <img alt="fab card attack" class="stats-icon-size" src="@/assets/imgs/icons/stats/attack.png"/>
            <div class="dropdown">
              <button id="dropdownMenuButton4" aria-expanded="false" class="btn nav-link dropdown-toggle no-padding"
                      data-bs-toggle="dropdown" type="button">
                Equals
              </button>
              <ul aria-labelledby="dropdownMenuButton4" class="dropdown-menu">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input v-model="power" class="form-control form-control-sm" maxlength="3" size="3" type="text"/>
          </div>
          <!-- Defense -->
          <div class="input-group">
            <img alt="fab card defense" class="stats-icon-size" src="@/assets/imgs/icons/stats/defense.png"/>
            <div class="dropdown">
              <button id="dropdownMenuButton5" aria-expanded="false" class="btn nav-link dropdown-toggle no-padding"
                      data-bs-toggle="dropdown" type="button">
                Equals
              </button>
              <ul aria-labelledby="dropdownMenuButton5" class="dropdown-menu">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input v-model="defense" class="form-control form-control-sm" maxlength="3" size="3" type="text"/>
          </div>
          <!-- Intellect -->
          <div class="input-group">
            <img alt="fab card intellect" class="stats-icon-size" src="@/assets/imgs/icons/stats/intellect.png"/>
            <div class="dropdown">
              <button id="dropdownMenuButton6" aria-expanded="false" class="btn nav-link dropdown-toggle no-padding"
                      data-bs-toggle="dropdown" type="button">
                Equals
              </button>
              <ul aria-labelledby="dropdownMenuButton6" class="dropdown-menu">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input v-model="intellect" class="form-control form-control-sm" maxlength="3" size="3" type="text"/>
          </div>
          <!-- Life -->
          <div class="input-group">
            <img alt="fab card hero life" class="stats-icon-size" src="@/assets/imgs/icons/stats/life.png"/>
            <div class="dropdown">
              <button id="dropdownMenuButton7" aria-expanded="false" class="btn nav-link dropdown-toggle no-padding"
                      data-bs-toggle="dropdown" type="button">
                Equals
              </button>
              <ul aria-labelledby="dropdownMenuButton7" class="dropdown-menu">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input v-model="life" class="form-control form-control-sm" maxlength="3" size="3" type="text"/>
          </div>

        </div>
      </div>
    </div>

    <!-- Frames -->
    <div class="accordion-item last-accordion-item">
      <h2 id="panelsStayOpen-headingThree" class="accordion-header">
        <button aria-controls="panelsStayOpen-collapseThree" aria-expanded="false" class="accordion-button collapsed"
                data-bs-target="#panelsStayOpen-collapseThree" data-bs-toggle="collapse"
                type="button">
          Frames
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" aria-labelledby="panelsStayOpen-headingThree"
           class="accordion-collapse collapse">
        <div class="accordion-body">

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div v-for="frame in frames" :key="frame">
                <div class="form-check form-switch">
                  <input v-model="checkedFrames" :value="frame.code" class="form-check-input" type="checkbox">
                  <label class="form-check-label custom-font">{{ frame.name }}</label>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {computed, ref} from "vue";
import getReleases from "../../composables/filters/getReleases";
import getRarities from "../../composables/filters/getRarities";
import getFrames from "../../composables/filters/getFrames";
import getClassOptions from "../../composables/filters/getClassOptions";
import getTalentOptions from "../../composables/filters/getTalentOptions";
import getTypeOptions from "../../composables/filters/getTypeOptions";
import getResourceOptions from "../../composables/filters/getResourceOptions";

export default {
  name: "SideFilter",
  props: {
    'checkedSets': ref([]),
    'checkedRarities': ref([]),
    'clazz': ref({}),
    'talent': ref({}),
    'type': ref({}),
    'checkedResources': ref([]),
    'cost': String,
    'power': String,
    'defense': String,
    'intellect': String,
    'life': String,
    'checkedFrames': ref([]),
  },
  emits: [
    "update:check-sets",
    "update:check-rarities",
    "update:selected-class",
    "update:selected-talent",
    "update:selected-type",
    "update:check-resources",
    "update:input-cost",
    "update:input-power",
    "update:input-defense",
    "update:input-intellect",
    "update:input-life",
    "update:check-frames",
  ],
  setup(props, context) {
    const {sets} = getReleases()
    const {rarities} = getRarities()
    const {classOptions} = getClassOptions()
    const {talentOptions} = getTalentOptions()
    const {typeOptions} = getTypeOptions()
    const {resourceOptions} = getResourceOptions()
    const {frames} = getFrames()
    const isAllSetsChecked = ref(false)
    const isAllRaritiesChecked = ref(false)

    const checkAllSets = () => {
      let tmpCheckedSets = []

      if (isAllSetsChecked.value === true) {
        isAllSetsChecked.value = false
      } else {
        isAllSetsChecked.value = true
        sets.forEach(set => tmpCheckedSets.push(set.code))
      }

      context.emit("update:check-sets", tmpCheckedSets)
    }

    let checkedSets = computed({
      get: () => props.checkedSets,
      set: (newValue) => {
        isAllSetsChecked.value = newValue.length >= sets.length;
        context.emit("update:check-sets", newValue)
      }
    })

    const checkAllRarities = () => {
      let tmpCheckedRarities = []

      if (isAllRaritiesChecked.value) {
        isAllRaritiesChecked.value = false
      } else {
        isAllRaritiesChecked.value = true
        rarities.forEach(rarity => tmpCheckedRarities.push(rarity.code))
      }

      context.emit("update:check-rarities", tmpCheckedRarities)
    }

    let checkedRarities = computed({
      get: () => props.checkedRarities,
      set: (newValue) => {
        isAllRaritiesChecked.value = newValue.length === rarities.length;
        context.emit("update:check-rarities", newValue)
      }
    })

    const onSelectClazz = (newValue) => {
      context.emit("update:selected-class", newValue)
    }

    const onSelectTalent = (newValue) => {
      context.emit("update:selected-talent", newValue)
    }

    const onSelectType = (newValue) => {
      context.emit("update:selected-type", newValue)
    }

    let checkedResources = computed({
      get: () => props.checkedResources,
      set: (newValue) => context.emit("update:check-resources", newValue)
    })

    let cost = computed({
      get: () => props.cost,
      set: (newValue) => context.emit("update:input-cost", newValue)
    })

    let power = computed({
      get: () => props.power,
      set: (newValue) => context.emit("update:input-power", newValue)
    })

    let defense = computed({
      get: () => props.defense,
      set: (newValue) => context.emit("update:input-defense", newValue)
    })

    let intellect = computed({
      get: () => props.intellect,
      set: (newValue) => context.emit("update:input-intellect", newValue)
    })

    let life = computed({
      get: () => props.life,
      set: (newValue) => context.emit("update:input-life", newValue)
    })

    let checkedFrames = computed({
      get: () => props.checkedFrames,
      set: (newValue) => context.emit("update:check-frames", newValue)
    })

    const showResetFilterBtt = () => {
      /*console.log(
          checkedRarities,
          props.clazz,
          props.talent,
          props.type,
          checkedResources,
          cost,
          power,
          defense,
          intellect,
          life,
          checkedFrames
      )
      return checkedRarities.value.length > 0 ||
          props.clazz !== "" ||
          props.talent !== "" ||
          props.type !== ""||
          checkedResources.value.length > 0 ||
          cost ||
          power ||
          defense ||
          intellect ||
          life ||
          checkedFrames.value.length > 0*/
    }

    const resetFilters = () => {
      checkedRarities.value = []
      onSelectClazz("")
      onSelectTalent("")
      onSelectType("")
      checkedResources.value = []
      cost.value = ""
      power.value = ""
      defense.value = ""
      intellect.value = ""
      life.value = ""
      checkedFrames.value = []
    }

    return {
      sets, checkedSets, isAllSetsChecked, checkAllSets,
      rarities, checkedRarities, isAllRaritiesChecked, checkAllRarities,
      classOptions, onSelectClazz,
      talentOptions, onSelectTalent,
      typeOptions, onSelectType,
      checkedResources,
      red: resourceOptions[0].value,
      yellow: resourceOptions[1].value,
      blue: resourceOptions[2].value,
      cost,
      power,
      defense,
      intellect,
      life,
      frames, checkedFrames,
      showResetFilterBtt,
      resetFilters
    }
  }
}
</script>

<style scoped>
#accordionSideFilter {
  font-size: 15px;
}

.accordion-item {
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}

.last-accordion-item {
  border-bottom: 0;
}

li {
  padding: 0;
}

.accordion-body {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

.stats-icon-size {
  margin-bottom: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
}

.input-group-text {
  background-color: #e5b55d !important;
}

.no-padding {
  padding: 0 0.5rem 0 0.5rem !important;
}

.dropdown-menu {
  max-height: 250px;
  overflow-y: auto;
}
</style>
