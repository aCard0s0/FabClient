import { defineStore } from 'pinia'

export const usePaginationStore = defineStore('pagination', {
    // a function that returns a fresh state
    state: () => ({
        currentPage: 1
    }),
    actions: {
        setCurrentPage(page) {
            this.currentPage = page
        }
    }
})
