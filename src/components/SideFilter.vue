<template>
  <b-accordion flush free >
    <!-- Releases -->
    <b-accordion-item title="Releases" visible>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="isAllReleasesChecked" @click="checkAllReleases()">
            <label class="form-check-label">Any</label>
          </div>

          <div v-for="set in releases" :key="set">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :value="set.code" v-model="checkedReleases" @change="updateCheckedReleases()">
              <label class="form-check-label" >{{ set.name }}</label>
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
            <label class="form-check-label">Any</label>
          </div>

          <div v-for="rarity in rarities" :key="rarity">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :value="rarity.code" v-model="checkedRarities" @change="updateCheckedRarities()">
              <label class="form-check-label">{{ rarity.name }}</label>
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
              <label class="form-check-label">{{ frame.name }}</label>
            </div>
          </div>

        </li>
      </ul>
    </b-accordion-item>

  </b-accordion>
</template>

<script>
import { ref } from "vue";
import getReleases from "../composables/getReleases";
import getRarities from "../composables/getRarities";
import getFrames from "../composables/getFrames";

export default {
  /*props: {
    checkedReleases: {
      required: true,
      type: Array
    }
  },*//*methods: {
    event1() {
      this.$emit("update:checked-releases", 5)
    }
  },*/
  name: "SideFilter",
  emits: [
      "update:check-releases",
      "update:check-rarities",
      "update:check-frames",
  ],
  setup (props, context) {

    //region Releases
    const { releases } = getReleases()
    const isAllReleasesChecked = ref(false)
    const checkedReleases = ref([])

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
    //endregion

    //region Rarities
    const { rarities } = getRarities()
    const isAllRaritiesChecked = ref(false)
    const checkedRarities = ref([])

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
    //endregion

    //region Frames
    const { frames } = getFrames()
    const checkedFrames = ref([])

    const updateCheckedFrames = () => {
      context.emit("update:check-rarities", checkedRarities.value)
    }
    //endregion

    return {
      releases, checkedReleases, updateCheckedReleases, isAllReleasesChecked, checkAllReleases,  // releases related
      rarities, checkedRarities, updateCheckedRarities, isAllRaritiesChecked, checkAllRarities,   // rarities related
      frames, checkedFrames, updateCheckedFrames
    }
  }
}
</script>

<style scoped>

</style>
