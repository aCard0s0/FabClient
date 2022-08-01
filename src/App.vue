<template>

  <NavBar />

    <div class="container-fluid" style="min-height: 64vh">
      <router-view/>
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

.container-fluid {
  padding: 0 50px 0 50px !important;
}

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited  {
  background-color: #e5b55d !important;
  border-color: #e5b55d !important;
}

.btn-outline-primary {
  color: #e5b55d !important;
  border-color: #e5b55d !important;
}

.btn-link, .a, .page-link {
  color: #e5b55d !important;
}

a:link,
a:hover,
a:active {
  text-decoration: none;
  color: #e5b55d !important;
}

.page-item.active .page-link {
  color: #ffffff !important;
  background-color: #e5b55d !important;
  border-color: #e5b55d !important;
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
