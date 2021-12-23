<template>
  <b-accordion flush free >
    <!-- Releases -->
    <b-accordion-item title="Releases" visible class="less-padding">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="isAllReleasesChecked" @click="checkAllReleases()">
            <label class="form-check-label custom-font">Any</label>
          </div>

          <div v-for="set in releases" :key="set">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :value="set.code" v-model="checkedReleases" @change="updateCheckedReleases()">
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
            <label class="form-check-label custom-font">Any</label>
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
              <input class="form-check-input" type="checkbox" :value="frame.code" v-model="checkedFrames" >
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
      "update:check-releases",
      "update:check-rarities",
      "update:check-frames",
  ],
  setup (props, context) {

    const { releases } = getReleases()
    const isAllReleasesChecked = ref(false)
    const checkedReleases = ref([])

    const { rarities } = getRarities()
    const isAllRaritiesChecked = ref(false)
    const checkedRarities = ref([])

    const { frames } = getFrames()
    const checkedFrames = ref([])

    const checkAllReleases = () => {
      isAllReleasesChecked.value = true
      checkedReleases.value = []
      releases.forEach(set => checkedReleases.value.push(set.code))
      context.emit("update:check-releases", checkedReleases.value)
    }

    const updateCheckedReleases = () => {
      isAllReleasesChecked.value = checkedReleases.value.length >= releases.length;
      context.emit("update:check-releases", checkedReleases.value)
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
      releases, checkedReleases, updateCheckedReleases, isAllReleasesChecked, checkAllReleases,
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
