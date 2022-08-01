import { defineStore } from 'pinia'

export const useSearchSettingsStore = defineStore('searcher-settings', {
    // a function that returns a fresh state
    state: () => ({
        maximize: true,

        gridHasTitle: true,
        gridImageCurrentSize: 10,

    }),
    actions: {
        changeMaximize() {
            this.maximize = !this.maximize
            console.log(this.maximize)
        },
        changeGridHasTitle() {
            this.gridHasTitle = !this.gridHasTitle
            console.log(this.gridHasTitle)
        },
        increaseImageSize() {
            this.gridImageCurrentSize++
            console.log(this.gridImageCurrentSize)
        },
        decreaseImageSize() {
            this.gridImageCurrentSize--
            console.log(this.gridImageCurrentSize)
        }
    }
})
