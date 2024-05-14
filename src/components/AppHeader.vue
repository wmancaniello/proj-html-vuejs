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
    <div class="container ivory-background full-width">
      <header class="d-flex flex-wrap justify-content-between align-items-start pt-3 mb-4">
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
          <AppIconsSocial />

        </div>
        <!-- ------------------Social media links------------------ -->

      </header>
      
      <!-- STAGING BOTTOM -->
      <div class="d-flex gap-2 justify-content-center pb-4">
          <router-link to="/" class="btn btn-primary rounded-pill">Home</router-link>
          <router-link to="/about" class="btn btn-secondary rounded-pill">About</router-link>
          <router-link to="/contacts" class="btn btn-success rounded-pill">Contacts</router-link>    
      </div>
      <!-- STAGING BOTTOM -->
    </div>
  


  </template>
  
  

<style scoped>

/* ------------------SIZES------------------------- */

.w-30 {
  width: 30%;
}

/* ------------------SIZES------------------------- */

/* ------------------FULL WIDTH HeADER------------------------- */

.full-width {
  width: 100%;
  box-sizing: border-box;
}

/* ------------------FULL WIDTH HeADER------------------------- */



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

/* .ivory-background {
  background-color: #f5f5f1; 
} */

/* ------------------BACKGROUND COLOR AVORIO--------------------- */

</style>


  




