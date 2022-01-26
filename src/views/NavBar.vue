<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <router-link to="/" class="navbar-brand me-2">
        <img src="@/assets/imgs/logo/fabledeck-logo.png" style="width: 8rem"/>
      </router-link>

      <button aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navBar" data-bs-toggle="collapse" type="button">
        <font-awesome-icon icon="bars" />
      </button>

      <div id="navBar" class="collapse navbar-collapse" style="margin-left: 3rem">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/card-search">Card Searcher</router-link>
          </li>
         <!-- <li class="nav-item dropdown">
            <a id="navbarDropdown" aria-expanded="false" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
               role="button">
              Dropdown
            </a>
            <ul aria-labelledby="navbarDropdown" class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->

        </ul>

        <hr>

        <div class="align-items-center">
          <button class="btn btn-link" type="button">
            Login
          </button>
        </div>
        <div class="align-items-center">
          <button class="btn btn-primary" type="button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "NavBar",
  setup() {

    return {
    }
  }
}
</script>

<style scoped>
nav {
  padding: 0.5rem 2rem 0.5rem 2rem;
  font-size: 17px;
}
#navBar a {
  font-weight: bold;
  color: #eec582;
  margin-left: 1rem;
}

#navBar a.router-link-exact-active {
  color: #e5b55d !important;
  border-bottom: 1px solid #e5b55d;
}
</style>
