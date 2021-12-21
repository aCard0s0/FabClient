import { ref } from "vue";
import axios from "axios";

function buildParameters(query, releases, rarities, frames, resources, clazz, type, cost, power, defense, text) {

    // TODO: improve this logic
    if (clazz === "All") {
        clazz = ""
    }
    if (type === "All") {
        type = ""
    }

    const params = {
        ...(releases.length ? {set: releases.map(v => v)+"" } : {}),
        ...(rarities.length ? {rarity: rarities.map(v => v)+"" } : {}),
        ...(frames.length ? {frame: frames.map(v => v)+"" } : {}),
        ...(resources ? {resources: resources } : {}),    // todo: update api to resources
        ...(clazz ? {class: clazz } : {}),
        ...(type ? {type: type } : {}),
        ...(cost ? {cost: cost } : {}),
        ...(power ? {power: power } : {}),
        ...(defense? {defense: defense } : {}),
        ...(text? {text: text } : {})
    }

    let regex;

    if (query.includes("pitch=")) {
        regex = new RegExp("(pitch=\\s*)(\\d+)", "g")
        params.resource = regex.exec(query)[2]
        query = query.replace("pitch=", "").replace(params.resource, "")
    }

    if (query.includes("text=")) {
        regex = new RegExp("(text=\\s*)\"(.*?)\"", "g")
        params.text = regex.exec(query)[2]
        query = query.replace("text=", "").replace(params.text, "")
    }
    if (query.includes("type=")) {
        regex = new RegExp("(type=\\s*)\"(.*?)\"", "g")
        params.type = regex.exec(query)[2]
        query = query.replace("type=", "").replace(params.type, "")
    }
    if (query.includes("class=")) {
        regex = new RegExp("(class=\\s*)\"(.*?)\"", "g")
        params.text = regex.exec(query)[2]
        query = query.replace("class=", "").replace(params.class, "")
    }
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

    if (query.includes("cost=")) {
        regex = new RegExp("(cost=\\s*)(\\d+)", "g")
        params.cost = regex.exec(query)[2]
        query = query.replace("cost=", "").replace(params.cost, "")
    }
    if (query.includes("power=")) {
        regex = new RegExp("(power=\\s*)(\\d+)", "g")
        params.power = regex.exec(query)[2]
        query = query.replace("power=", "").replace(params.power, "")
    }
    if (query.includes("defense=")) {
        regex = new RegExp("(defense=\\s*)(\\d+)", "g")
        params.defense = regex.exec(query)[2]
        query = query.replace("defense=", "").replace(params.defense, "")
    }

    if (query.trim().length) {
        params.name = query.trim()
    }

    return params
}

const getCardsSearch = () => {
    const cards = ref([])
    const error = ref(null)

    const loadDefaultCards = () => {
      return loadCards([],[],[],"")
    }

    const loadCards = async (query, releases, rarities, frames, resources, clazz, type, cost, power, defense, text) => {

        let params = {}
        let regex = new RegExp("(wtr|arc|cru|mon)(.\\d*)")

        query = query.toLowerCase()

        /*if (regex.test(query)) {
            params.codes = regex.exec(query)[0]     // get multiple card codes
            axios.get('http://localhost:1010/v0/fab/cards', { params: params })
                .then(response => cards.value = response.data)
                .catch(error => console.log(error))
            return;
        }*/

        params = buildParameters(query, releases, rarities, frames,
            resources, clazz, type, cost, power, defense, text)
        console.log(params)

        axios.get('http://localhost:1010/v0/fab/cards/search', { params: params })
            .then(response => cards.value = response.data)
            .catch(error => console.log(error))

        return cards;
    }

    return {cards, loadCards, loadDefaultCards}
}

export default getCardsSearch
