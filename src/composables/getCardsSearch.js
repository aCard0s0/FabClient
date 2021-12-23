import { ref } from "vue";
import axios from "axios";

function buildParameters(query, releases, rarities, frames, resources, clazz, type, talent, cost, power, defense, text) {

    // TODO: improve this logic
    clazz = clazz === "All" ? "" : clazz
    type = type === "All" ? "" : type
    console.log(talent)
    const params = {
        ...(releases.length ? {set: releases.map(v => v).toString() } : {}),
        ...(rarities.length ? {rarity: rarities.map(v => v).toString() } : {}),
        ...(frames.length ? {frame: frames.map(v => v).toString() } : {}),
        ...(resources ? {resources: resources } : {}),    // todo: update api to resources
        ...(clazz ? {class: clazz } : {}),
        ...(type ? {type: type } : {}),
        ...(talent ? {talent: talent } : {}),
        ...(cost ? {cost: cost } : {}),
        ...(power ? {power: power } : {}),
        ...(defense ? {defense: defense } : {}),
        ...(text ? {text: text } : {})
    }

    let regex;

    if (query.includes("talent=")) {
        regex = new RegExp("(talent=\\s*)\"(.*?)\"", "g")
        params.talent = regex.exec(query)[2]
        query = query.replace("talent=", "").replace(params.talent, "")
    }

    if (query.includes("intellect=")) {
        regex = new RegExp("(intellect=\\s*)(\\d+)", "g")
        params.intellect = regex.exec(query)[2]
        query = query.replace("intellect=", "").replace(params.intellect, "")
    }
    if (query.includes("life=")) {
        regex = new RegExp("(life=\\s*)(\\d+)", "g")
        params.life = regex.exec(query)[2]
        query = query.replace("life=", "").replace(params.life, "")
    }

    /*if (query.trim().length) {
        params.name = query.trim()
    }*/

    return params
}

const getCardsSearch = () => {
    const cards = ref([])
    const error = ref(null)

    const loadDefaultCards = () => {
      return loadCards("",[],[],"")
          .then(response => response)
    }

    const loadCards = async (query, releases, rarities, frames, resources, clazz, type, talent, cost, power, defense, text) => {

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

        params = buildParameters(query, releases, rarities, frames,
            resources, clazz, type, talent, cost, power, defense, text)
        console.log(params)

        axios.get('http://localhost:1010/v0/fab/cards/search', { params: params })
            .then(response => cards.value = response.data)
            .catch(error => console.log(error))
    }

    return {cards, loadCards, loadDefaultCards}
}

export default getCardsSearch
