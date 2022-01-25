<template>

  <div :key="cards">

    <div class="row">
      <div class="col-4">
        <img class="card-img-top" v-bind:alt="cards[0].cardCode" v-bind:src="getPublicImageGCP(cards[0].setCode, cards[0].cardCode)"/>
      </div>

      <div class="col-8" style="text-align: left">

        <div>
          <h1>{{ cards[0].name }}</h1>
        </div>

        <div>
          <h5>{{ cards[0].type }}</h5>
          <h6>{{ convertRarity(cards[0].rarity) }}</h6>
        </div>
        <br />

        <div class="">
          <b>Text</b>
          <br />
            {{ cards[0].text }}
        </div>
        <br />
        <div class="">
          <b>Flavour</b>
          <br />
          {{ cards[0].flavour }}
        </div>
        <br />

        <div style="display: flex;">
          <b>Additional Versions: </b>
          <div v-for="frame in cards[0].frames" :key="frame">
            <div v-if="frame === 'Cold Foil'" style="padding: 0 1rem 0 1rem">
              <font-awesome-icon icon="snowflake" style="color: #0090ff" title="Cold Foil"/>
              Cold Foil
            </div>
            <div v-else-if="frame === 'Rainbow'" style="padding: 0 1rem 0 1rem">
              <font-awesome-icon icon="star" style="color: gold" title="Rainbow Foil"/>
              Rainbow Foil
            </div>
            <div v-else-if="frame === 'Double Slided'" style="padding: 0 1rem 0 1rem">
              <font-awesome-icon icon="sync-alt" style="color: #a6a4a4" title="Double Slided"/>
              Double Slided
            </div>
          </div>
        </div>

        <!-- Duplicating information
        <div class="row">
          <div v-if="hasResources(cards[0])" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" v-bind:src="getResourceImage(cards[0])" alt="" /> {{cards[0].stats.resource}}
          </div>
          <div v-if="hasCost(cards[0])" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/cost.png" alt="" /> {{cards[0].stats.cost}}
          </div>
          <div v-if="hasIntellect(cards[0])" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/intellect.png" alt="" /> {{cards[0].stats.intellect}}
          </div>
          <div v-if="hasLife(cards[0])" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/life.png" alt="" /> {{cards[0].stats.life}}
          </div>
          <div v-if="hasPower(cards[0])" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/attack.png" alt="" /> {{cards[0].stats.power}}
          </div>
          <div v-if="hasDefense(cards[0])" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/defense.png" alt="" /> {{cards[0].stats.defense}}
          </div>
        </div>-->

      </div>
    </div>



  </div>

</template>

<script>

import { useRoute } from 'vue-router';
import getCardDetails from "../composables/getCardDetails";

export default {
  name: "CardDetails",

  setup() {
    // API calls
    const { cards, loadCardDetails } = getCardDetails()

    loadCardDetails(useRoute().params.code)

    const getPublicImageGCP = (setCode, cardCode) => {
      if (setCode !== undefined && cardCode !== undefined) {
        return `https://storage.googleapis.com/fd-cards-images/${setCode.toLowerCase()}/${cardCode}.png`
      }
    }

    const convertRarity = (rarity) => {
      switch (rarity) {
        case "F": return "Fable"
        case "L": return "Legendary"
        case "M": return "Majestic"
        case "S": return "Super Rare"
        case "R": return "Rare"
        case "C": return "Common"
      }

    }

    const hasIntellect = (card) => {
      return card.stats.intellect !== "";
    }
    const hasLife = (card) => {
      return card.stats.life !== "";
    }
    const hasPower = (card) => {
      return card.stats.power !== "";
    }
    const hasDefense = (card) => {
      return card.stats.defense !== "";
    }
    const hasCost = (card) => {
      return card.stats.cost !== "";
    }
    const hasResources = (card) => {
      return card.stats.resource !== "";
    }
    const getResourceImage = (card) => {
      if (card.stats.resource === "1") {
        return require(`@/assets/imgs/icons/pitch-1.png`)
      }
      if (card.stats.resource === "2") {
        return require(`@/assets/imgs/icons/pitch-2.png`)
      }
      if (card.stats.resource === "3") {
        return require(`@/assets/imgs/icons/pitch-3.png`)
      }
    }

    return {
      cards,
      getPublicImageGCP,
      convertRarity,
      hasIntellect,
      hasLife,
      hasPower,
      hasDefense,
      hasCost,
      hasResources,
      getResourceImage
    }
  }
}
</script>

<style scoped>

</style>
