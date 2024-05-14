<script>
  import AppIconsSocial from "./AppIconsSocial.vue";

  export default {
    components: {
      AppIconsSocial,
    },
    data() {
      return {
        menu: [
          {
            title: "Home",
            routeName: "home",
          },
          {
            title: "Recipes",
            routeName: "recipes",
          },
          {
            title: "Places",
            routeName: "places",
          },
          {
            title: "Blog",
            routeName: "blog",
          },
          {
            title: "About",
            routeName: "about",
          },
          {
            title: "Contact",
            routeName: "contacts",
          },
        ],
      };
    },
  };
</script>

<template>
  <div class="ivory-background px-4"> <!-- Aggiunta classe ivory-background -->
    <header class="d-flex flex-wrap justify-content-between align-items-start pt-3 mb-4 full-width">
      <!-- ------------------LINKS DOWNLOAD APP, ADVERTISE------------------ -->
      <div class="d-flex align-items-start w-30 ms-4">
        <a href="https://1.envato.market/qjLX5" class="nav-link orange-hover">Download App <span
            class="badge bg-warning text-dark">iOS</span> </a>
        <a href="https://1.envato.market/qjLX5" class="nav-link ms-3 orange-hover">Advertise with us</a>
      </div>
      <!-- ------------------LINKS DOWNLOAD APP, ADVERTISE------------------ -->

      <!-- ------------------Logo------------------ -->
      <div class="d-flex align-items-center">
        <a href="/"
          class="d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src="https://avada.website/food/wp-content/uploads/sites/118/2021/04/avada-food-logo.svg"
            alt="Avada Food" width="40" height="32" class="logo"></a>
      </div>


      <!-- ------------------Logo------------------ -->

      <!-- ------------------Social media links------------------ -->
      <div class="d-flex justify-content-end align-items-start w-30 my-wrapper me-4">
        <AppIconsSocial />
      </div>
      <!-- ------------------Social media links------------------ -->
    </header>

    <!-- NavICONS -->
    <div class="d-flex gap-2 justify-content-center pt-2 nav-icons">
      <ul class="d-flex">
        <li v-for="item in menu" :key="item" class="mb-3">
          <router-link :to="{ name: item.routeName }" class="ms_router-link">
            {{ item.title }}
          </router-link>
        </li>
        <li>
          <router-link to="/contacts" class="btn"><i class="fa-solid fa-magnifying-glass"></i></router-link> 
        </li>
      </ul>
      <!-- <router-link to="/" class="btn">Home</router-link>
      <router-link to="/about" class="btn">About</router-link>
      <router-link to="/contacts" class="btn">Contacts</router-link> -->
    </div>
    <!-- NavICONS -->
  </div>
</template>

<style scoped>
  /* ------------------SIZES------------------------- */

  .w-30 {
    width: 30%;
  }

  /* ------------------FULL WIDTH------------------------- */

  .full-width {
    width: 100%;
    box-sizing: border-box;
  }

  /* ------------------SIZES------------------------- */

  .logo {
    width: 200%;
    height: auto;
  }

  .nav-link {
    color: #000;
    margin-right: 10px;
  }

  .nav-link.active {
    color: #ff6600;
  }

  .badge.bg-warning.text-dark {
    background-color: #ff6600;
    color: #fff;
  }

  .bi {
    font-size: 1.5rem;
    color: #6c757d;
  }

  .nav-link:hover .bi {
    color: #ff6600;
  }

  /* ------------------HOVER EFFECTS-------------------------------- */

  .orange-hover:hover {
    color: #ff6600;
  }

  /* ------------------BACKGROUND COLOR AVORIO--------------------- */

  .ivory-background {
    background-color: #f5f5f1;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ------------------BACKGROUND COLOR AVORIO--------------------- */

  /* -----------------buttons--------------------- */

  .nav-icons ul {
    padding-left: 0;
  }

  .nav-icons ul li {
    list-style: none;
    margin-right: 20px;
    /* Spazio tra gli elementi */
  }

  .nav-icons router-link {
    height: 100vh;
    width: 70vw;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
  }

  .nav-icons a {
    position: relative;
    text-decoration: none;
    font-family: sans-serif;
    color: black;
    font-size: 18px;
    letter-spacing: 0.5px;
    padding: 0 10px;
  }

  .nav-icons a:after {
    content: "";
    position: absolute;
    background-color: orange;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  .nav-icons a:hover {
    color: #000;
  }

  .nav-icons a:hover:after {
    width: 100%;
  }

  /* -----------------buttons--------------------- */
</style>