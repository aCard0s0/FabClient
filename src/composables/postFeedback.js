import axios from "axios";

const postFeedback = () => {
    const postFeedback = async (email, text) => {
        const body = {
            ...(email.value.length ? {email: email.value} : {}),
            ...(text.value.length ? {text: text.value} : {})
        }

        const url = "http://"+ process.env.VUE_APP_SERVER_URL +":"+ process.env.VUE_APP_SERVER_PORT +"/v0/feedback"
        axios.post(url, body)
            .catch(error => console.log(error))
    }

    return {postFeedback}
}

export default postFeedback
