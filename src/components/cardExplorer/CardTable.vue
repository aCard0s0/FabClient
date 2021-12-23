<template>

  <Pagination :nPages="getPages()"
              @update:show-page="cardsToDisplay"/>

  <table class="table table-hover" style="text-align: left;">
    <thead>
    <tr>
      <th scope="col" >Image</th>
      <th scope="col" style="width: 1rem">#</th>
      <th scope="col" style="width: 1rem"></th>
      <th scope="col" style="width: 1rem">Rarity</th>
      <th scope="col" >Name</th>
      <th scope="col">Type</th>
      <th scope="col"></th>
      <!--<th scope="col">Resources</th>
      <th scope="col">Cost</th>
      <th scope="col">Power</th>
      <th scope="col">Defense</th>-->
    </tr>
    </thead>
    <tbody>

    <tr v-for="card in display">
      <td style="text-align: center; padding: 0rem">
        <img class="img-crop" v-bind:src="generateImgLinkByCardCode(card.cardCode)"/>
      </td>
      <td style="text-align: center">{{card.cardCode}}</td>

      <td>
        <div v-if="card.stats.resource === 1">
          <svg height="15" width="16">
            <circle cx="8" cy="6" r="6" fill="red" />
          </svg>
        </div>
        <div v-if="card.stats.resource === 2">
          <svg height="15" width="16">
            <circle cx="8" cy="6" r="6" fill="yellow" />
          </svg>
        </div>
        <div v-if="card.stats.resource === 3">
          <svg height="15" width="16">
            <circle cx="8" cy="6" r="6" fill="deepskyblue" />
          </svg>
        </div>
      </td>

      <td style="text-align: center">{{card.rarity}}</td>
      <td>{{card.name}}</td>
      <td>{{card.type}}</td>
      <td>
        <button class="btn btn-outline-primary disabled" >+</button>
      </td>
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

    return {
      display,
      cardsToDisplay,
      getPages,
      generateImgLinkByCardCode,
    }
  }
}
</script>

<style scoped>
.img-crop{
  width: 8rem;
  margin-bottom: -80%;
}
.img-crop:hover{
  width: 8rem;
  margin-bottom: 0px;
}

</style>
