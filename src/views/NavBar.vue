<template>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <router-link to="/" class="navbar-brand me-2">
        <img src="@/assets/logo-placeholder.png" style="width: 7rem"/>
      </router-link>

      <!-- Toggle button
      <button data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <font-awesome-icon icon="bars" />
      </button>-->


      <!-- Collapsible wrapper  class="collapse navbar-collapse" -->
      <div id="navBar" class="navbar-collapse">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">FableDeck</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/card-search">Card Searcher</router-link>
          </li>
          <!--<li class="nav-item">
            <router-link to="/deck-builder">Deck Builder</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/feedback">Feedback</router-link>
          </li>-->
        </ul>

        <!-- Right links
        <div class="d-flex align-items-center">
          <button class="btn btn-link px-3 me-2" type="button">
            Login
          </button>
          <button class="btn btn-primary me-3" type="button">
            Sign up
          </button>
        </div>-->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {
  name: "NavBar",
  setup() {
    const isLoading = () => {
      return true
    }

    return {
      isLoading
    }
  }
}
</script>

<style scoped>
#navBar a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 1rem;
}

#navBar a.router-link-exact-active {
  color: #0d6efd;
}
</style>
