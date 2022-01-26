import { defineStore } from 'pinia'

export const queryStore = defineStore('query', {
    // a function that returns a fresh state
    state: () => ({
        query: "",
    }),
    // optional getters
    getters: {
        getQuery() {
            return this.query
        }
    },
    actions: {
        setQuery: (query) => this.query = query
    }
})
