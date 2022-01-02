<template>

  <NavBar />
  <br/>

  <div class="container">
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


</style>
<script>
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
export default {
  components: {Footer, NavBar}
}
</script>
