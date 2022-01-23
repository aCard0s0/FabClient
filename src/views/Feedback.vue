<template>

  <br />
  <p style="text-align: left">
    Do you have any ideas, suggestions or something is not working well? We are all ears! <br />
    Furthermore, if you want to help develop this tool, let us know! <br />
  </p>
  <br />

  <div style="text-align: left">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        <h5>Email address:</h5> <div style="opacity: 0.6">(Optional - if you want to receive an response)</div>
      </label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="email"/>
    </div>

    <br />

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">
        <h5>Feedback</h5>
      </label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="text"></textarea>
    </div>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="sendFeedback()">Submit</button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
        </div>
        <div class="modal-body">
          <h1>Thank you!</h1>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import postFeedback from "../composables/postFeedback";
import axios from "axios";

export default {
  name: "Feedback",
  setup() {
    const email = ref("")
    const text = ref("")

    const sendFeedback = () => {
      if (email.value !== "" && text.value !== "") {
        const body = {
          ...(email.value.length ? {email: email.value} : {}),
          ...(text.value.length ? {text: text.value} : {})
        }

        const url = "https://"+ process.env.VUE_APP_SERVER_URL + process.env.VUE_APP_SERVER_PORT +"/v0/feedback"
        axios.post(url, body)
            .catch(error => console.log(error))
            .finally(() => {
              email.value = ""
              text.value = ""
            })
      }
    }

    return {
      email,
      text,
      sendFeedback
    }
  }
}
</script>

<style scoped>

</style>
