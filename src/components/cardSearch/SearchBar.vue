<template>

  <br />
  <div class="row justify-content-md-center">
    <div class="col-md-7">
      <div class="input-group">
        <input v-model="query" aria-label="Search" class="form-control me-2"
               placeholder="Search by card code, name or text"
               type="search" @keyup.enter="handleQuerySubmit(query)">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="handleQuerySubmit(query)">
            <font-awesome-icon icon="search"/>
          </button>
        </div>
      </div>
    </div>
  </div>
  <br />
  <!-- Search bar help -->

</template>

<script>

import {queryStore} from "../../stores/queryStore";

export default {
  name: "SearchBar",

  emits: [
    "click:input-query-submit"
  ],
  setup(props, context) {
    const store = queryStore()

    const handleQuerySubmit = (query) => {
      context.emit("click:input-query-submit", query)
    }

    return {
      query: store.getQuery,
      handleQuerySubmit
    }
  }
}
</script>
