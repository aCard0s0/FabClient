<template>
  <br />

  <SearchBar @click:input-query-submit="handleQuerySubmit" />

  <br />
  <br />

  <div style="background-color: #eae7e7; border-radius: 1rem; padding: 1rem; margin: 2rem">
    <h3>Welcome!</h3>
    <p style="text-align: left; padding-left: 1rem;">
      <br />
      We aim to offer this content in a more searchable and simple way to the players of the <a href="https://fabtcg.com/" target="_blank" style="color: #e5b55d"><b>Flesh & Blood™ TCG</b></a> community.
      <br />
      <br />
      This is a <b>alpha</b> version of something bigger with more functionalities.
      <br />
      <br />
      Meanwhile we hope you enjoy this card search engine we designed for you.
      <br />
      <br />
      <b>Massive thank you,</b>
    </p>
    <h5 style="padding-left: 1rem">FableDeck Team</h5>
  </div>

</template>

<script>
import SearchBar from "../components/cardSearch/SearchBar";
import router from "../router";
import {queryStore} from "../stores/queryStore";

export default {
  name: 'Home',
  components: {
    SearchBar
  },
  setup() {
    const handleQuerySubmit = (query) => {
      const store = queryStore()
      store.query = query
      router.push({ path: `/card-search/` })
    }

    return {
      handleQuerySubmit
    }
  }
}
</script>
