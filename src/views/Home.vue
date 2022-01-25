<template>

  <SearchBar @click:input-query-submit="handleQuerySubmit" />

  <p style="text-align: left">
    <br />
    Thank you for visiting our website!
    <br />
    <br />
    The majority of the content of this website belongs to <a href="https://legendstory.com/" target="_blank"><b>LLS</b></a>.
    <br />
    We aim to offer this content in a more searchable and simple way to the players of the <a href="https://fabtcg.com/" target="_blank"><b>FaB TCG</b></a> community.
    <br />
    This is a <b>alpha</b> version of something bigger with more functionalities. Meanwhile we hope you enjoy this card search engine we designed for you.
    <br />
    <br />
    <b>Massive thank you,</b>
    <br />
    FableDeck Team
  </p>
</template>

<script>
import SearchBar from "../components/cardSearch/SearchBar";
import loadCardsByQuery from "../composables/getCardsSearch";
import router from "../router";

export default {
  name: 'Home',
  components: {
    SearchBar
  },
  setup() {
    const handleQuerySubmit = (query) => {
      loadCardsByQuery(query)
      router.push({ path: `/card-search/` })
    }

    return {
      handleQuerySubmit
    }
  }
}
</script>
