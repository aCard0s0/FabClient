<template>
  <b-accordion flush free >
    <!-- Releases -->
    <b-accordion-item title="Releases" visible class="less-padding">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="isAllSetsChecked" @click="checkAllSets()">
            <label class="form-check-label custom-font">All</label>
          </div>

          <div v-for="set in sets" :key="set">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :value="set.code" v-model="checkedSets" @change="updateCheckedSets()">
              <label class="form-check-label custom-font" >{{ set.label }}</label>
            </div>
          </div>

        </li>
      </ul>
    </b-accordion-item>

    <!-- Rarities -->
    <b-accordion-item title="Rarities">
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
    </b-accordion-item>

    <!-- Frames -->
    <b-accordion-item title="Frames">
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
    </b-accordion-item>

  </b-accordion>
</template>

<script>

import { ref } from "vue";
import getReleases from "../../composables/filters/side/getReleases";
import getRarities from "../../composables/filters/side/getRarities";
import getFrames from "../../composables/filters/side/getFrames";

export default {
  name: "SideFilter",
  emits: [
      "update:check-sets",
      "update:check-rarities",
      "update:check-frames",
  ],
  setup (props, context) {

    const { sets } = getReleases()
    const isAllSetsChecked = ref(false)
    const checkedSets = ref([])

    const { rarities } = getRarities()
    const isAllRaritiesChecked = ref(false)
    const checkedRarities = ref([])

    const { frames } = getFrames()
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

    return {
      sets, checkedSets, updateCheckedSets, isAllSetsChecked, checkAllSets,
      rarities, checkedRarities, updateCheckedRarities, isAllRaritiesChecked, checkAllRarities,
      frames, checkedFrames, updateCheckedFrames
    }
  }
}
</script>

<style scoped>
li {
  padding: 0;
}
.accordion-body {
  padding: 0.5rem;
}
.custom-font {
  font-size: 0.85rem;
}
</style>
