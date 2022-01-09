<template>
  <div class="row">
    <div class="col-12 justify-content-center">
        <!-- Pagination -->
        <nav aria-label="Page navigation example" style="padding-top: 5px;">
          <ul class="pagination justify-content-center pointer">

            <li v-if="showGoToFirst" class="page-item">
              <a aria-label="Previous" class="page-link" @click="firstPage()">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li v-if="showGoToPrevious" class="page-item">
              <a aria-label="Next" class="page-link" @click="previousPage()">
                <span aria-hidden="true">&lt;</span>
              </a>
            </li>

            <div  v-for="i in calculatePagesToDisplay()">
              <li v-if="currentPage === i" class="page-item active pointer-event">
                <a class="page-link " @click="showPage(i)">{{ i }}</a>
              </li>
              <li v-else class="page-item">
                <a class="page-link" @click="showPage(i)">{{ i }}</a>
              </li>
            </div>

            <li v-if="showGoToNext" class="page-item pointer-event">
              <a aria-label="Next" class="page-link" @click="nextPage()">
                <span aria-hidden="true">></span>
              </a>
            </li>
            <li v-if="showGoToLast" class="page-item pointer-event">
              <a aria-label="Next" class="page-link" @click="lastPage()">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
    </div>
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
    const currentPage = ref(1)

    let showGoToFirst = ref(false);
    let showGoToPrevious = ref(false);
    let showGoToNext = ref(false);
    let showGoToLast = ref(false);

    const calculatePagesToDisplay = () => {
      // TODO: to hardcoded - improve dynamic pagination

      showGoToFirst.value = currentPage.value > 2
      showGoToPrevious.value = currentPage.value !== 1
      showGoToNext.value = currentPage.value !== nPages && nPages > 1
      showGoToLast.value = currentPage.value < nPages-1

      if (nPages > 0 && nPages < 6) {
        return nPages
      }
      if (currentPage.value === 1 && nPages > 5) {
        return [currentPage.value, currentPage.value+1, currentPage.value+2, currentPage.value+3, currentPage.value+4]
      }
      if (currentPage.value === 2 && nPages > 5) {
        return [currentPage.value-1, currentPage.value, currentPage.value+1, currentPage.value+2, currentPage.value+3]
      }
      if (currentPage.value > 2 && nPages-currentPage.value > 2) {
        return [currentPage.value-2, currentPage.value-1, currentPage.value, currentPage.value+1, currentPage.value+2];
      }
      if (currentPage.value > 2 && nPages-currentPage.value === 2) {
        return [currentPage.value-2, currentPage.value-1, currentPage.value, nPages-1, nPages];
      }
      if (currentPage.value > 2 && nPages-currentPage.value === 1) {
        return [currentPage.value-3, currentPage.value-2, currentPage.value-1, currentPage.value, nPages];
      }
      if (nPages-currentPage.value === 0) {
        return [nPages-4, nPages-3, nPages-2, nPages-1, nPages];
      }
      return nPages
    }

    const showPage = (page) => {
      if (page >= nPages) {
        currentPage.value = nPages
      } else if (page < 1){
        currentPage.value = 1
      } else {
        currentPage.value = page
      }
      context.emit("update:show-page", currentPage.value-1)
    }

    const previousPage = () => {
      showPage(currentPage.value-1)
    }

    const nextPage = () => {
      showPage(currentPage.value+1)
    }

    const firstPage = () => {
      showPage(0)
    }

    const lastPage = () => {
      showPage(nPages)
    }

    return {
      nPages,
      currentPage,
      calculatePagesToDisplay,
      showPage,
      previousPage,
      nextPage,
      firstPage,
      lastPage,
      showGoToFirst, showGoToPrevious, showGoToNext, showGoToLast
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
