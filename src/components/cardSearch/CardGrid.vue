<template>

  <Pagination
      :key="cardsToDisplay"
      :nPages="getPages()"
      @update:show-page="cardsToDisplay"/>

  <div class="grid-container justify-content-center">
    <!--<div  v-for="card in cards" :key="card" style="padding-right: 5px; padding-left: 5px; padding-bottom: 5px;">-->
    <div v-for="card in display" v-if="cards.length">
      <div v-if="card" style="padding-right: 5px; padding-left: 5px; padding-bottom: 5px;">
        <div class="card" style="width: 10rem;" @click="goToCardDetails(card.cardCode)">
          {{ card.cardCode }}

          <img class="card-img-top" v-bind:alt="card.cardCode" v-bind:src="getFirstEdPublicImage(card.imagesPaths)"/>

          <!--<div class="justify-content-center" style="display: flex; font-size:12px;">
            <div v-for="frame in card.frames" :key="frame">
              <div v-if="frame === 'Cold Foil'">
                <font-awesome-icon icon="snowflake" style="color: #0090ff" title="Cold Foil"/> &nbsp;
              </div>
              <div v-else-if="frame === 'Rainbow'">
                <font-awesome-icon icon="star" style="color: gold" title="Rainbow Foil"/> &nbsp;
              </div>
              <div v-else-if="frame === 'Double Slided'">
                <font-awesome-icon icon="sync-alt" style="color: #a6a4a4" title="Double Slided"/> &nbsp;
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import Pagination from "../common/Pagination";
import router from "../../router";
import cardsImages from "../../composables/images/cardsImages";

export default {
  name: "CardGrid",
  components: {Pagination},
  props: ["cards", "nCardToDisplay"],
  computed: {
    testing() {console.log("testing compute")}
  },
  setup(props) {
    const {getFirstEdPublicImage} = cardsImages()

    const display = ref(props.cards.slice(0, props.nCardToDisplay))
    const cardsToDisplay = (page) => {
      display.value = props.cards.slice(props.nCardToDisplay*page, props.nCardToDisplay*(page+1))
    }

    return {
      display,
      cardsToDisplay,
      getPages: () => Math.ceil(props.cards.length / props.nCardToDisplay),
      goToCardDetails: (code) => router.push({path: `/card-details/${code}`}),
      getFirstEdPublicImage,
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
</style>
