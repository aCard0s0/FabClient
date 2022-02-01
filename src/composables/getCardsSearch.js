import { ref } from "vue";
import axios from "axios";

function buildParameters(
    query, sets, rarities, clazz, talent, type,
    resources, cost, power, defense, intellect, life, frames) {

    // TODO: improve this logic
    clazz = clazz === "All" ? "" : clazz
    type = type === "All" ? "" : type

    const params = {
        ...(query.length ? {query: query} : {}),
        ...(sets.length ? {set: sets.map(v => v).toString() } : {}),
        ...(rarities.length ? {rarity: rarities.map(v => v).toString() } : {}),
        ...(clazz ? {class: clazz } : {}),
        ...(type ? {type: type } : {}),
        ...(talent ? {talent: talent } : {}),
        ...(resources.length ? {resources: resources.map(v => v).toString() } : {}),
        ...(cost ? {cost: cost } : {}),
        ...(power ? {power: power } : {}),
        ...(defense ? {defense: defense } : {}),
        ...(intellect ? {intellect: intellect } : {}),
        ...(life ? {life: life } : {}),
        ...(frames.length ? {frame: frames.map(v => v).toString() } : {})
    }

    /*if (query.trim().length) {
        params.name = query.trim()
    }*/

    return params
}

const getCardsSearch = () => {
    const cards = ref([])
    const error = ref(null)

    /*const loadDefaultCards = () => {
      return loadCards("",["wtr"],[],"")
          .then(response => response)
    }*/

    const loadCardsByQuery = (query) => {
        return loadCards(query,[],[],"")
            .then(response => response)
    }

    const loadCards = async (
        query, sets, rarities, clazz, talent, type,
        resources, cost, power, defense, intellect, life, frames
    ) => {
        let params = {}
        let regex = new RegExp("(wtr|arc|cru|mon)(.\\d*)")

        // query = query.toLowerCase()

        /*if (regex.test(query)) {
            params.codes = regex.exec(query)[0]     // get multiple card codes
            axios.get('http://localhost:1010/v0/fab/cards', { params: params })
                .then(response => cards.value = response.data)
                .catch(error => console.log(error))
            return;
        }*/

        params = buildParameters(
            query, sets, rarities, clazz, talent, type,
            resources, cost, power, defense, intellect, life, frames)
        //console.log("Params", params)

        // 'http://localhost:1010/v0/fab/cards/search'
        // const url = "http://"+ process.env.VUE_APP_SERVER_URL +":"+ process.env.VUE_APP_SERVER_PORT +"/v0/fab/cards/search"

        const url = "https://"+ process.env.VUE_APP_SERVER_URL + process.env.VUE_APP_SERVER_PORT +"/v0/fab/cards/search"

        axios.get(url, { params: params })
            .then(response => cards.value = response.data)
            .catch(error => console.log(error))
    }

    return {cards, loadCards, loadCardsByQuery}
}

export default getCardsSearch
