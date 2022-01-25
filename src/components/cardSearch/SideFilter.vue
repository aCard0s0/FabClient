<template>
  <!--
  <div v-if="showWarningSign()" style="padding-top: -40px;">
    <div class="accordion-body">
      <button class="btn btn-outline-primary btn-sm" @click="cleanFilters()">
        <font-awesome-icon icon="eraser" style="color: gray"/>
        Clean Filter
      </button>
    </div>
  </div>
  -->

  <div id="accordionPanelsStayOpenExample" class="accordion">

    <!-- Clean Filters -->
    <div class="accordion-item" v-if="showCleanFilterBtt()">
      <h2 class="accordion-header">
        <button class="btn btn-outline-primary btn-sm" style="width: 100%" @click="cleanFilters()">
          <font-awesome-icon icon="eraser" style="color: gray"/>
          Clean Filters
        </button>
      </h2>
    </div>

    <!-- Releases -->
    <div class="accordion-item">
      <h2 id="panelsStayOpen-headingOne" class="accordion-header">

          <button class="accordion-button" aria-controls="panelsStayOpen-collapseOne" aria-expanded="true"
                  data-bs-target="#panelsStayOpen-collapseOne" data-bs-toggle="collapse"
                  type="button">Releases</button>

      </h2>
      <div id="panelsStayOpen-collapseOne" aria-labelledby="panelsStayOpen-headingOne"
           class="accordion-collapse collapse show">
        <div class="accordion-body">

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="form-check form-switch">
                <label class="form-check-label custom-font">All</label>
                <input class="form-check-input" type="checkbox" v-model="isAllSetsChecked" @click="checkAllSets()">
              </div>
              <div v-for="set in sets" :key="set">
                <div class="form-check form-switch">
                      <label class="form-check-label custom-font" >{{ set.label }}</label>
                      <input class="form-check-input" type="checkbox" :value="set.code" v-model="checkedSets" @change="updateCheckedSets()">
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
            <strong>Class:</strong> &nbsp;
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton11" data-bs-toggle="dropdown" aria-expanded="false">
                {{ clazz.name || "All" }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton11">
                <li v-for="clazz in classOptions" :key="clazz">
                  <a class="dropdown-item" @click="onSelectClazz(clazz)">{{clazz.name}}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Talent -->
          <div class="input-group">
            <strong>Talent:</strong>
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton12" data-bs-toggle="dropdown" aria-expanded="false">
                {{ talent.name || "None" }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton12">
                <li v-for="talent in talentOptions" :key="talent">
                  <a class="dropdown-item" @click="onSelectTalent(talent)">{{talent.name}}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Type -->
          <div class="input-group">
            <strong>Type:</strong> &nbsp;&nbsp;
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton10" data-bs-toggle="dropdown" aria-expanded="false">
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
        <div class="accordion-body">

          <!-- Resources -->
          <div class="input-group input-group-sm ">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
              <img class="stats-icon-size" src="@/assets/imgs/icons/pitch-1.png" alt="fab card resources cost" />
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
              <img class="stats-icon-size" src="@/assets/imgs/icons/pitch-2.png" alt="fab card resources cost" />
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
              <img class="stats-icon-size" src="@/assets/imgs/icons/pitch-3.png" alt="fab card resources cost" />
            </div>
          </div>
            <!--
              <img class="stats-icon-size" src="@/assets/imgs/icons/pitch-1.png" alt="fab card resources generated" />
              <div class="dropdown">
                <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ resources.name || "All" }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li v-for="resource in resourceOptions" :key="resource">
                    <a class="dropdown-item" @click="onSelectResource(resource)">{{resource.name}}</a>
                  </li>
                </ul>
              </div>
            </div>-->
          <!-- Cost -->
          <div class="input-group">
            <img class="stats-icon-size" src="@/assets/imgs/icons/cost.png" alt="fab card resources cost" />
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                Equals
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input type="text" class="form-control form-control-sm" size="3" maxlength="3" v-model="cost" />
          </div>
          <!-- Power -->
          <div class="input-group">
            <img class="stats-icon-size" src="@/assets/imgs/icons/attack.png" alt="fab card attack" />
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                Equals
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                <li><a class="dropdown-item">&nbsp;&nbsp; = &nbsp;&nbsp;</a></li>
                <li><a class="dropdown-item">&nbsp;&nbsp; &gt; &nbsp;&nbsp;</a></li>
                <li><a class="dropdown-item">&nbsp;&nbsp; &lt; &nbsp;&nbsp;</a></li>
              </ul>
            </div>
            <input type="text" class="form-control form-control-sm" size="3" maxlength="3" v-model="power" />
          </div>
          <!-- Defense -->
          <div class="input-group">
            <img class="stats-icon-size" src="@/assets/imgs/icons/defense.png" alt="fab card defense" />
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
                Equals
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input type="text" class="form-control form-control-sm" size="3" maxlength="3" v-model="defense" />
          </div>
          <!-- Intellect -->
          <div class="input-group">
            <img class="stats-icon-size" src="@/assets/imgs/icons/intellect.png" alt="fab card intellect" />
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-expanded="false">
                Equals
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton6">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input type="text" class="form-control form-control-sm" size="3" maxlength="3" v-model="intellect" />
          </div>
          <!-- Life -->
          <div class="input-group">
            <img class="stats-icon-size" src="@/assets/imgs/icons/life.png" alt="fab card hero life" />
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle no-padding" type="button" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false">
                Equals
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton7">
                <li><a class="dropdown-item">=</a></li>
                <li><a class="dropdown-item">&gt;</a></li>
                <li><a class="dropdown-item">&lt;</a></li>
              </ul>
            </div>
            <input type="text" class="form-control form-control-sm" size="3" maxlength="3" v-model="life" />
          </div>

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
                <input class="form-check-input" type="checkbox" v-model="isAllRaritiesChecked" @click="checkAllRarities()">
                <label class="form-check-label custom-font">All</label>
              </div>
              <div v-for="rarity in rarities" :key="rarity">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" :value="rarity.code" v-model="checkedRarities" @change="updateCheckedRarities()">
                  <label class="form-check-label custom-font">{{ rarity.name }}</label>
                </div>
              </div>
            </li>
          </ul>

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
                  <input class="form-check-input" type="checkbox" :value="frame.code" v-model="checkedFrames" @change="updateCheckedFrames()">
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
import getReleases from "../../composables/filters/side/getReleases";
import getRarities from "../../composables/filters/side/getRarities";
import getFrames from "../../composables/filters/side/getFrames";
import getClassOptions from "../../composables/filters/more/getClassOptions";
import getTalentOptions from "../../composables/filters/more/getTalentOptions";
import getTypeOptions from "../../composables/filters/more/getTypeOptions";
import getResourceOptions from "../../composables/filters/more/getResourceOptions";

export default {
  name: "SideFilter",
  props: {
    'clazz': ref({}),
    'talent': ref({}) ,
    'type': ref({}),
    'resources': ref({}),
    'cost': String,
    'power': String,
    'defense': String,
    'intellect': String,
    'life': String,
  },
  emits: [
    "update:check-sets",
    "update:selected-class",
    "update:selected-talent",
    "update:selected-type",
    "update:selected-resources",
    "update:input-cost",
    "update:input-power",
    "update:input-defense",
    "update:input-intellect",
    "update:input-life",
    "update:check-rarities",
    "update:check-frames",
  ],
  setup (props, context) {

    const { sets } = getReleases()
    const { classOptions } = getClassOptions()
    const { talentOptions } = getTalentOptions()
    const { typeOptions } = getTypeOptions()
    const { resourceOptions } = getResourceOptions()
    const { rarities } = getRarities()
    const { frames } = getFrames()

    const isAllSetsChecked = ref(false)
    const checkedSets = ref([])
    const isAllRaritiesChecked = ref(false)
    const checkedRarities = ref([])
    const checkedFrames = ref([])

    const checkAllSets = () => {
      isAllSetsChecked.value = true
      checkedSets.value = []
      sets.forEach(set => checkedSets.value.push(set.code))
      context.emit("update:check-sets", checkedSets.value)
    }

    const updateCheckedSets = () => {
      isAllSetsChecked.value = checkedSets.value.length >= sets.length;
      context.emit("update:check-sets", checkedSets.value)
    }

    const onSelectClazz = (newValue) => {
      context.emit("update:selected-class", newValue)
    }

    const onSelectTalent = (newValue) => {
      context.emit("update:selected-talent", newValue)
    }

    const onSelectType = (newValue) => {
      context.emit("update:selected-type", newValue)
    }

    const onSelectResource = (newValue) => {
      context.emit("update:selected-resources", newValue)
    }

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
      get: () => props.power,
      set: (newValue) => context.emit("update:input-intellect", newValue)
    })

    let life = computed({
      get: () => props.defense,
      set: (newValue) => context.emit("update:input-life", newValue)
    })

    const checkAllRarities = () => {
      isAllRaritiesChecked.value = true
      checkedRarities.value = []
      rarities.forEach(rarity => checkedRarities.value.push(rarity.code))
      context.emit("update:check-rarities", checkedRarities.value)
    }

    const updateCheckedRarities = () => {
      isAllRaritiesChecked.value = rarities.length === checkedRarities.value.length;
      context.emit("update:check-rarities", checkedRarities.value)
    }

    const updateCheckedFrames = () => {
      context.emit("update:check-frames", checkedFrames.value)
    }

    const showCleanFilterBtt = () => {
      return props.resources.value ||
          props.clazz.value ||
          props.type.value ||
          props.talent.value ||
          props.cost ||
          props.power ||
          props.defense ||
          props.intellect ||
          props.life
    }

    const cleanFilters = () => {
      onSelectResource("")
      onSelectClazz("")
      onSelectTalent("")
      onSelectType("")
      cost.value = ""
      power.value = ""
      defense.value = ""
      intellect.value = ""
      life.value = ""
    }

    return {
      sets, checkedSets, updateCheckedSets, isAllSetsChecked, checkAllSets,
      classOptions, onSelectClazz,
      talentOptions, onSelectTalent,
      typeOptions, onSelectType,
      resourceOptions, onSelectResource,
      cost,
      power,
      defense,
      intellect,
      life,
      rarities, checkedRarities, updateCheckedRarities, isAllRaritiesChecked, checkAllRarities,
      frames, checkedFrames, updateCheckedFrames,
      showCleanFilterBtt,
      cleanFilters
    }
  }
}
</script>

<style scoped>
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
