<script>
import AppIconsSocial from "./AppIconsSocial.vue";


export default {
    components: {
        AppIconsSocial
    },

  data() {
    return {
      menu: [
        {
          title: "Home",
          routeName: "home",
        },
        {
          title: "About",
          routeName: "about",
        },
        {
          title: "Contacts",
          routeName: "contacts",
        },
      ],
    };
  },
};
</script>

<!-- <template>
    <header>
        <ul>
            <li v-for="item in menu" :key="item"> 
                <router-link :to="{name: item.routeName}" >
                    {{ item.title }}
                </router-link>
             </li>
        </ul>
        <div></div>
    </header>
</template> -->

<template>
    <div class="container">
      <header class="d-flex flex-wrap justify-content-between align-items-start py-3 mb-4">
        <!-- ------------------LINKS DOWNLOAD APP, ADVERTISE------------------ -->
        <div class="d-flex align-items-start w-30">
          <a href="https://1.envato.market/qjLX5" class="nav-link orange-hover">Download App <span class="badge bg-warning text-dark">iOS</span> </a>
          <a href="https://1.envato.market/qjLX5" class="nav-link ms-3 orange-hover">Advertise with us</a>
        </div>
        <!-- ------------------LINKS DOWNLOAD APP, ADVERTISE------------------ -->

        
        <!-- ------------------Logo------------------ -->
        <div class="d-flex align-items-center">
          <a href="/" class="d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2021/04/avada-food-logo.svg" alt="Avada Food" width="40" height="32" class="logo"></a>
        </div>
        <!-- ------------------Logo------------------ -->

        
        <!-- ------------------Social media links------------------ -->
        <div class="d-flex justify-content-end align-items-start w-30 my-wrapper">
            <!-- <div class="my-icon my-facebook">
                <a href="https://www.facebook.com/ThemeFusion-101565403356430/" class="nav-link px-3"><i class="fa-brands fa-facebook-f"></i></a>
                <div class="my-tooltip">Facebook</div>
            </div>
          <a href="https://www.instagram.com/themefusion/" class="nav-link px-3"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com/theme_fusion" class="nav-link px-3"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.youtube.com/@AvadaVideos" class="nav-link px-3"><i class="fa-brands fa-youtube"></i></a> -->
          <AppIconsSocial />

        </div>
        <!-- ------------------Social media links------------------ -->

      </header>

    </div>
  

    <!-- STAGING BOTTOM -->
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="https://avada.website/food/wp-content/uploads/sites/118/2021/04/avada-food-logo.svg" alt="" width="152" height="121">
      <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
    <!-- STAGING BOTTOM -->

  </template>
  
  

<style scoped>

/* ------------------SIZES------------------------- */

.w-30 {
  width: 30%;
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
  color: #ff6600; /* Colore arancione */
}

</style>


  




