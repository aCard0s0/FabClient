<template>
  <Pagination
      v-if="getPages() > 1"
      :nPages="getPages()"
      @update:show-page="cardsToDisplay"/>

  <table class="table table-hover" style="text-align: left;">
    <!-- Header -->
    <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">#</th>
      <th scope="col">Rarity</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col" style="min-width: 7rem">Stats</th>
    </tr>
    </thead>

    <tbody>
    <!-- No Data Match -->
    <NoDataMatch v-if="display.length === 0"/>

    <!-- Data Row-->
    <tr v-for="card in display" class="table-row-hover" @click="goToCardDetails(card.cardCode)">
      <!-- # Image -->
      <td style="text-align: center; padding: 0rem">
        <div class="crop-container">
          <img v-bind:alt="card.cardCode" v-bind:src="getFirstEdPublicImage(card.imagesPaths)"/>
        </div>
      </td>
      <!-- # Versions -->
      <td style="text-align: left;">
        {{ card.cardCode }}
        <!--<div style="max-height: 50px; overflow-y: auto;">
          <div v-for="printing in card.printings">
            {{printing}}
          </div>
        </div>-->

      </td>
      <!-- Rarity -->
      <td style="text-align: center">
        <img class="rarity-icon-size" v-bind:src="getRarityImage(card.rarity)">
      </td>
      <!-- Name -->
      <td>
        <svg v-if="isRed(card.stats.resources)" height="15" width="16">
          <circle cx="8" cy="6" fill="red" r="6"/>
        </svg>
        <svg v-if="isYellow(card.stats.resources)" height="15" width="16">
          <circle cx="8" cy="6" fill="yellow" r="6"/>
        </svg>
        <svg v-if="isBlue(card.stats.resources)" height="15" width="16">
          <circle cx="8" cy="6" fill="deepskyblue" r="6"/>
        </svg>
        {{ card.name }}
        <!--<div v-if="isRed(card)" class="top-border-red">
           {{card.name}}
         </div>
         <div v-if="isYellow(card)" class="top-border-yellow">
           {{card.name}}
         </div>
         <div v-if="isBlue(card)" class="top-border-blue">
           {{card.name}}
         </div>-->
      </td>
      <!-- Type -->
      <td>{{ card.type }}</td>
      <!-- Stats -->
      <td>
        <div class="row">
          <div v-if="hasResources(card.stats.resources)" class="col-6 stats-icon-padding">
            <img alt="fab card resources generated" class="stats-icon-size"
                 v-bind:src="getResourcesImage(card.stats.resources)"/> {{ card.stats.resources }}
          </div>
          <div v-if="hasCost(card.stats.cost)" class="col-6 stats-icon-padding">
            <img alt="fab card resources cost" class="stats-icon-size" v-bind:src="getCostImage()"/>
            {{ card.stats.cost }}
          </div>
          <div v-if="hasIntellect(card.stats.intellect)" class="col-6 stats-icon-padding">
            <img alt="fab card intellect" class="stats-icon-size" v-bind:src="getIntellectImage()"/>
            {{ card.stats.intellect }}
          </div>
          <div v-if="hasLife(card.stats.life)" class="col-6 stats-icon-padding">
            <img alt="fab card hero life" class="stats-icon-size" v-bind:src="getLifeImage()"/> {{ card.stats.life }}
          </div>
        </div>
        <div class="row">
          <div v-if="hasPower(card.stats.power)" class="col-6 stats-icon-padding">
            <img alt="fab card attack" class="stats-icon-size" v-bind:src="getAttackImage()"/> {{ card.stats.power }}
          </div>
          <div v-if="hasDefense(card.stats.defense)" class="col-6 stats-icon-padding">
            <img alt="fab card defense" class="stats-icon-size" v-bind:src="getDefenseImage()"/>
            {{ card.stats.defense }}
          </div>
        </div>
      </td>
      <!--<td>
        <button class="btn btn-outline-primary disabled" >+</button>
      </td>-->
    </tr>
    </tbody>
  </table>

  <Pagination
      v-if="getPages() > 1"
      :nPages="getPages()"
      @update:show-page="cardsToDisplay"/>
</template>

<script>
import {ref} from "vue";
import Pagination from "../common/Pagination";
import router from "../../router";
import NoDataMatch from "./NoDataMatch";
import raritiesImages from "../../composables/images/raritiesImages";
import statsImages from "../../composables/images/statsImages";
import cardsImages from "../../composables/images/cardsImages";

export default {
  name: "CardTable",
  components: {NoDataMatch, Pagination},
  props: ["cards", "nCardToDisplay"],
  setup(props) {
    const {getFirstEdPublicImage} = cardsImages()
    const {getRarityImageByInput} = raritiesImages()
    const {
      getResourcesImageByInput,
      getAttackImage,
      getCostImage,
      getDefenseImage,
      getIntellectImage,
      getLifeImage
    } = statsImages()

    const display = ref(props.cards.slice(0, props.nCardToDisplay))

    const cardsToDisplay = (page) => {
      display.value = props.cards.slice(props.nCardToDisplay * page, props.nCardToDisplay * (page + 1))
    }

    return {
      display,
      cardsToDisplay,
      getPages: () => Math.ceil(props.cards.length / props.nCardToDisplay),
      goToCardDetails: (code) => router.push({path: `/card-details/${code}`}),
      getFirstEdPublicImage,
      isRed: (resources) => resources === "1",
      isYellow: (resources) => resources === "2",
      isBlue: (resources) => resources === "3",
      hasIntellect: (intellect) => intellect !== "",
      hasLife: (life) => life !== "",
      hasPower: (power) => power !== "",
      hasDefense: (defense) => defense !== "",
      hasCost: (cost) => cost !== "",
      hasResources: (resources) => resources !== "",
      getResourcesImage: (resources) => getResourcesImageByInput(resources),
      getRarityImage: (rarity) => getRarityImageByInput(rarity),
      getAttackImage,
      getCostImage,
      getDefenseImage,
      getIntellectImage,
      getLifeImage
    }
  }
}
</script>

<style scoped>
.crop-container {
  width: 8rem;
  overflow: hidden;
}

.crop-container img {
  width: 8rem;
  margin-bottom: -85%;
}

.crop-container img:hover {
  margin-bottom: 0px;
}

.stats-icon-padding {
  padding: 0 0.5rem 0.2rem 0;
}

.stats-icon-size {
  width: 1.5rem;
}

.rarity-icon-size {
  width: 1rem;
}

.top-border-red {
  border-top-style: solid;
  border-top-color: red;
}

.top-border-yellow {
  border-top-style: solid;
  border-top-color: yellow;
}

.top-border-blue {
  border-top-style: solid;
  border-top-color: deepskyblue;
}
</style>
