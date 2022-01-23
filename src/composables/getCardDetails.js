import {ref} from "vue";
import axios from "axios";

const getCardDetails = () => {
    const cards = ref([])
    const error = ref(null)

    const loadCardDetails = async (code) => {

        // 'http://localhost:1010/v0/fab/cards?codes=arc005'
        // const url = "http://"+ process.env.VUE_APP_SERVER_URL +":"+ process.env.VUE_APP_SERVER_PORT +"/v0/fab/cards"

        const url = "https://"+ process.env.VUE_APP_SERVER_URL + process.env.VUE_APP_SERVER_PORT +"/v0/fab/cards"

        const params = {
            ...(code.length ? {codes: code} : {})
        }

        /*const headers = {
            "Access-Control-Allow-Origin": "*"
        }*/

        axios.get(url, { params: params }) // headers: headers,
            .then(response => cards.value = response.data)
            .catch(error => console.log(error))
    }

    return {cards, loadCardDetails}
}

export default getCardDetails
