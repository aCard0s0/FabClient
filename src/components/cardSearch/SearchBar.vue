<template>

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

</template>

<script>
import {ref} from "vue";
import getCardsSearch from "../../composables/getCardsSearch";

export default {
  name: "SearchBar",
  setup () {
    const query = ref("")
    // API calls
    const {loadCards } = getCardsSearch()

    const handleSearchSubmit = (query) => {
      loadCards(
          query, checkedSets.value, checkedRarities.value, checkedFrames.value,
          resources.value.value, clazz.value.value, type.value.value, talent.value.value,
          costInput.value, powerInput.value, defenseInput.value, textInput.value
      )
    }
  }
}
</script>

<style scoped>

</style>
