<template>

  <NavBar />
  <br/>

  <div class="container" style="min-height: 64vh">
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>

  <br />
  <Footer />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  margin: 0;
  max-width: 1620px !important;
  width: 90%;
}
@media only screen and (min-width: 601px) {
  .container {
    width: 85%;
  }
}
@media only screen and (min-width: 993px) {
  .container {
    width: 70%;
  }
}

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
  background-color: #e5b55d !important;
  border-color: #e5b55d !important;
}

.btn-outline-primary {
  color: #e5b55d !important;
  border-color: #e5b55d !important;
}

.btn-link, .a {
  color: #e5b55d !important;
}

a:link,
a:hover,
a:active {
  text-decoration: none;
  color: #e5b55d !important;
}

.accordion-button  {
  color: #e5b55d !important;
  font-weight: bold;
}

.accordion-button:not (.collapsed)  {
  background-color: #e1dbcb !important;
}

.nav-link {
  color: #e5b55d !important;
}

.form-check-input:checked {
  background-color: #e5b55d !important;
  border-color: #e5b55d !important;
}

.text-gold {
  color: #e5b55d !important;
}

</style>
<script>
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
export default {
  components: {Footer, NavBar}
}
</script>
