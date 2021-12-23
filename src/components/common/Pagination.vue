<template>
  <div class="row">
    <!-- Pagination -->
    <nav aria-label="Page navigation example" style="padding-top: 5px;">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a aria-label="Previous" class="page-link" @click="previousPage()">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="i in nPages" class="page-item">
          <a class="page-link" @click="showPage(i)">{{ i }}</a>
        </li>
        <li class="page-item">
          <a aria-label="Next" class="page-link" @click="nextPage()">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Pagination",
  emits: ["update:show-page"],
  props: ['nPages'],
  setup(props, context) {
    const nPages = props.nPages
    const currentPage = ref(0)

    const showPage = (page) => {
      if (page >= nPages) {
        currentPage.value = nPages-1
      } else if (page < 0){
        currentPage.value = 0
      } else {
        currentPage.value = page
      }
      context.emit("update:show-page", currentPage.value)
    }

    const previousPage = () => {
      showPage(currentPage.value-1)
    }

    const nextPage = () => {
      showPage(currentPage.value+1)
    }

    return {
      nPages,
      showPage,
      previousPage,
      nextPage
    }
  }
}
</script>

<style scoped>

</style>
