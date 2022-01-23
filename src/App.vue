<template>

  <NavBar />
  <br/>

  <div class="container" style="min-height: 65vh">
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
  text-align: center;
  color: #2c3e50;
}

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
  background-color: #e5b55d !important;
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

.nav-link {
  color: #e5b55d !important;
}

.form-check-input:checked {
  background-color: #e5b55d !important;
  border-color: #e5b55d !important;
}

</style>
<script>
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
export default {
  components: {Footer, NavBar}
}
</script>
