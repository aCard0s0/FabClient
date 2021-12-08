<template>

  <div class="row">
    <!-- Pagination -->
    <nav aria-label="Page navigation example" style="padding-top: 5px;">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a aria-label="Previous" class="page-link" href="#">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="(n,i) in getPages()" class="page-item">
          <a class="page-link" @click="cardsToDisplay(i)">{{ i + 1 }}</a>
        </li>
        <li class="page-item">
          <a aria-label="Next" class="page-link" href="#">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="grid-container justify-content-center">
    <!--<div  v-for="card in cards" :key="card" style="padding-right: 5px; padding-left: 5px; padding-bottom: 5px;">-->
    <div v-for="card in display" v-if="cards.length">
      <div v-if="card" style="padding-right: 5px; padding-left: 5px; padding-bottom: 5px;">
        <div class="card" style="width: 10rem;" @click="openCardDetails(card)">
          {{ card.cardCode }}
          <img alt="..." class="card-img-top" v-bind:src="generateImgLinkByCardCode(card.cardCode)"/>
          <div class="justify-content-center" style="display: flex; font-size:12px;">
            <div v-for="frame in card.frames" :key="frame">
              <div v-if="frame === 'Rainbow'">
                RF &nbsp;
              </div>
              <div v-else-if="frame === 'Cold Foil'">
                CF &nbsp;
              </div>
              <div v-else-if="frame === 'Double Slided'">
                DS &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {computed, reactive, ref, watch, watchEffect} from "vue";

export default {
  name: 'CardGrid',
  props: ['cards', 'nCardToDisplay'],
  computed: {
    testing() {console.log("testing compute")}
  },
  setup(props) {
    let display = ref(props.cards.slice(0, props.nCardToDisplay))

    const openCardDetails = (card) => {
      console.log("open modal with card details")
      console.log(card)
    }

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
      openCardDetails, generateImgLinkByCardCode,
      cardsToDisplay,
      getPages,
      display
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
