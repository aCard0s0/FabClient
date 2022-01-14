<template>

  <Pagination :nPages="getPages()"
              @update:show-page="cardsToDisplay"/>

  <table class="table table-hover" style="text-align: left;">
    <thead>
    <tr>
      <th scope="col" >Image</th>
      <th scope="col" style="width: 1rem">#</th>
      <th scope="col" style="width: 1rem">Rarity</th>
      <th scope="col" style="width: 1rem"></th>
      <th scope="col" >Name</th>
      <th scope="col">Type</th>
      <th scope="col" style="width: 7rem">Stats</th>
      <!--<th scope="col"></th>
      <th scope="col">Resources</th>
      <th scope="col">Cost</th>
      <th scope="col">Power</th>
      <th scope="col">Defense</th>-->
    </tr>
    </thead>
    <tbody>

    <tr class="table-row-hover" v-for="card in display" @click="goToCardDetails(card.cardCode)">
      <td style="text-align: center; padding: 0rem">
        <div class="crop-container">
          <img v-bind:src="generateImgLinkByCardCode(card.cardCode)"/>
        </div>
      </td>
      <td style="text-align: center">
        <!--{{card.cardCode.substring(0,3) +" "+ card.cardCode.substring(3,6)}}-->
        {{card.cardCode}}
      </td>
      <td style="text-align: center">{{card.rarity}}</td>
      <td style="text-align: right">
        <div v-if="isRed(card)">
          <svg height="15" width="16">
            <circle cx="8" cy="6" r="6" fill="red" />
          </svg>
        </div>
        <div v-if="isYellow(card)">
          <svg height="15" width="16">
            <circle cx="8" cy="6" r="6" fill="yellow" />
          </svg>
        </div>
        <div v-if="isBlue(card)">
          <svg height="15" width="16">
            <circle cx="8" cy="6" r="6" fill="deepskyblue" />
          </svg>
        </div>
      </td>
      <td>
        {{card.name}}
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
      <td>{{card.type}}</td>
      <!-- Stats -->
      <td>
        <div class="row">
          <div v-if="hasResources(card)" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" v-bind:src="getResourceImage(card)" alt="" /> {{card.stats.resource}}
          </div>
          <div v-if="hasCost(card)" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/cost.png" alt="" /> {{card.stats.cost}}
          </div>
          <div v-if="hasIntellect(card)" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/intellect.png" alt="" /> {{card.stats.intellect}}
          </div>
          <div v-if="hasLife(card)" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/life.png" alt="" /> {{card.stats.life}}
          </div>
        </div>
        <div class="row">
          <div v-if="hasPower(card)" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/attack.png" alt="" /> {{card.stats.power}}
          </div>

          <div v-if="hasDefense(card)" class="col-6 stats-icon-padding">
            <img class="stats-icon-size" src="@/assets/imgs/icons/defense.png" alt="" /> {{card.stats.defense}}
          </div>
        </div>
      </td> <!-- TODO: Image for stats-->
      <!--<td>
        <button class="btn btn-outline-primary disabled" >+</button>
      </td>-->
      <!--<td>{{card.stats.resource || "-"}}</td>
      <td>{{card.stats.cost || "-"}}</td>
      <td>{{card.stats.power || "-"}}</td>
      <td>{{card.stats.defense || "-"}}</td>-->
    </tr>
    </tbody>
  </table>
</template>

<script>
import {ref} from "vue";
import Pagination from "../common/Pagination";
import router from "../../router";

export default {
  name: "CardTable",
  components: {Pagination},
  props: ["cards", "nCardToDisplay"],
  setup(props) {
    const display = ref(props.cards.slice(0, props.nCardToDisplay))

    const generateImgLinkByCardCode = (cardCode) => {
      let regex = new RegExp("^.[A-Z-]{0,4}");
      let matches = regex.exec(cardCode);
      return matches && require(`@/assets/imgs/${matches[0].toLowerCase()}/${cardCode}.png`)
    }

    const getPages = () => {
      return Math.ceil(props.cards.length / props.nCardToDisplay)
    }

    const cardsToDisplay = (page) => {
      display.value = props.cards.slice(props.nCardToDisplay*page, props.nCardToDisplay*(page+1))
    }

    const goToCardDetails = (code) => {
      router.push({ path: `/card-details/${code}` })
    }

    const isRed = (card) => {
      return card.stats.resource === "1";
    }
    const isYellow = (card) => {
      return card.stats.resource === "2";
    }
    const isBlue = (card) => {
      return card.stats.resource === "3";
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
      display,
      cardsToDisplay,
      getPages,
      goToCardDetails,
      generateImgLinkByCardCode,
      isRed, isYellow, isBlue,
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
  padding: 0 0.5rem 0 0;
}
.stats-icon-size {
  width: 1.5rem;
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
