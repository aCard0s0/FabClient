<template>
  <div class="row justify-content-md-center">
    <div class="col-12">
      <!--<div class="btn-group">
        <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">More filters</a>
        &nbsp;&nbsp;
        <div v-if="showWarningSign()" style="position: relative">
          <font-awesome-icon icon="exclamation-circle" style="color: gold"/>
          <a href="#" @click="cleanupFilters()">Cleanup filter</a>
        </div>
      </div>-->
      <div class="btn-group">
        <button class="btn btn-outline-primary btn-sm" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <font-awesome-icon icon="filter" style="color: #0090ff"/>
          Filters
        </button>
        <div v-if="showWarningSign()">
          <button class="btn btn-outline-primary btn-sm" @click="cleanupFilters()">
            <font-awesome-icon icon="eraser" style="color: gold"/>
            Cleanup Filter
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="collapse " id="collapseExample" >
    <div class="card card-body less-padding">

      <!-- Resources & Class & Card Type-->
      <div class="row justify-content-md-center">
        <div class="col-lg-auto">
          <div class="input-group input-group-sm mb-3">
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
            <!--<select class="btn nav-link dropdown-toggle" v-model="resources">
              <option class="dropdown-item" v-for="resource in resourceOptions" :value="resource.value">
                {{ resource.name }}
              </option>
            </select>-->
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
        <div class="col-lg-auto">
          <div class="input-group mb-3">
            <span class="input-group-text">Talent</span>
            <div class="dropdown">
              <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton12" data-bs-toggle="dropdown" aria-expanded="false">
                {{ talent.name || "None" }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton12">
                <li v-for="talent in talentOptions" :key="talent">
                  <a class="dropdown-item" @click="onSelectTalent(talent)">{{talent.name}}</a>
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
            <input type="text" size="3" maxlength="3" class="form-control" v-model="cost">
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
            <input type="text" size="3" maxlength="3" class="form-control" v-model="power">
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
            <input type="text" size="3" maxlength="3" class="form-control" v-model="defense">
          </div>
        </div>
      </div>

      <!--<div class="row justify-content-md-center">
        <div class="col-lg-6">
          <button class="btn btn-primary" type="button" @click="handleSearchSubmit(query)" >Filter</button>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import getClassOptions from "../../composables/filters/more/getClassOptions";
import getTypeOptions from "../../composables/filters/more/getTypeOptions";
import getResourceOptions from "../../composables/filters/more/getResourceOptions";
import getTalentOptions from "../../composables/filters/more/getTalentOptions";

export default {
  name: "MoreFilters",
  props: {
    'resources': ref({}),
    'clazz': ref({}),
    'type': ref({}),
    'talent': ref({}),
    'cost': String,
    'power': String,
    'defense': String,
  },
  emits: [
    "update:selected-resources",
    "update:selected-class",
    "update:selected-type",
    "update:selected-talent",
    "update:input-cost",
    "update:input-power",
    "update:input-defense",
  ],
  setup(props, context) {
    const { classOptions } = getClassOptions()
    const { typeOptions } = getTypeOptions()
    const { resourceOptions } = getResourceOptions()
    const { talentOptions } = getTalentOptions()

    /*  TODO: change implementation to select tag and v-model?
    const resources = computed({
      get: () => props.resources,
      set: (newValue) => context.emit("update:selected-resources", newValue)
    })*/

    const onSelectResource = (newValue) => {
      context.emit("update:selected-resources", newValue)
    }

    const onSelectClazz = (newValue) => {
      context.emit("update:selected-class", newValue)
    }

    const onSelectType = (newValue) => {
      context.emit("update:selected-type", newValue)
    }

    const onSelectTalent = (newValue) => {
      context.emit("update:selected-talent", newValue)
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

    const showWarningSign = () => {
      return props.resources.value ||
          props.clazz.value ||
          props.type.value ||
          props.talent.value ||
          props.cost ||
          props.power ||
          props.defense

    }

    const cleanupFilters = () => {
      onSelectResource("")
      onSelectClazz("")
      onSelectTalent("")
      onSelectType("")
      cost.value = ""
      power.value = ""
      defense.value = ""
    }

    return {
      resourceOptions, onSelectResource,
      classOptions, onSelectClazz,
      typeOptions, onSelectType,
      talentOptions, onSelectTalent,
      cost,
      power,
      defense,
      showWarningSign,
      cleanupFilters
    }
  }
}
</script>

<style scoped>
.less-padding {
  padding: 0.5rem;
}
span {
  font-size: 0.9rem;
  padding: 0 0.5rem 0 0.5rem;
}
button {
  font-size: 0.9rem;
}
input {
  font-size: 0.9rem;
}
</style>
