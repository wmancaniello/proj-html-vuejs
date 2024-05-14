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
  <div class="container-fluid text-black p-3 ms_footer">
    <!-- Spazio immagini -->
    <div class="mt-3 ms_image-test">
      <h3 class="text-center fw-bold">Spazio per immagini</h3>
    </div>
    <hr />
    <!-- /Spazio immagini -->

    <!-- FOOTER DOWN -->

    <!-- Logo e Social -->
    <div class="row justify-content-around text-center text-md-start">
      <div class="col-md-3 text-center">
        <div class="mb-4">
          <img
            src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/avada-food-logo-mob-2x.png"
            alt="logo avada food"
            class="img-fluid ms_logo"
          />
        </div>

        <!-- Icone Social -->
        <AppIconsSocial />
        <!-- /Icone Social -->
      </div>
      <!-- /Logo e Social -->

      <!-- Section 2 -->
      <div class="col-md-3">
        <ul class="list-unstyled">
          <li v-for="item in menu" :key="item" class="mb-3">
            <router-link :to="{ name: item.routeName }" class="ms_router-link">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <!-- /Section 2 -->

      <!-- Section 3 -->
      <div class="col-md-3 ms_contact">
        <h5 class="text-uppercase mb-4 font-weight-bold">Contact US</h5>

        <ul class="list-unstyled">
          <li class="d-flex flex-row gap-3">
            <div>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>12345 Avada Main Street, New York, NY 555555</div>
          </li>
          <hr />

          <li class="d-flex flex-row gap-3">
            <div><i class="fa-solid fa-phone-flip"></i></div>
            <div>+ 0100-505-0000</div>
          </li>
          <hr />

          <li class="d-flex flex-row gap-3">
            <div>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div>info@avada-domain.com</div>
          </li>
          <hr />
        </ul>
      </div>
      <!-- /Section 3 -->

      <!-- Section 4  -->
      <div class="col-md-3">
        <h5 class="text-uppercase mb-4 font-weight-bold">GET OUR APP</h5>
        <div class="d-flex flex-column gap-3">
          <!-- GooglePlay -->
          <a href="#">
            <img
              src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/download-android.png"
              alt="GooglePlay"
              class="ms_logo"
          /></a>
          <!-- AppStore -->
          <a href="#">
            <img
              src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/download-app-store.png"
              alt="AppStore"
              class="ms_logo"
            />
          </a>
        </div>
      </div>
      <!-- /Section 4 -->
    </div>
    <!-- /Footer Down -->
  </div>
</template>

<style lang="scss" scoped>
.ms_footer {
  background-color: #fff;
}

// Immagini TOP FOOTER
.ms_image-test {
  background-color: red;
  // debug
  height: 200px;
}
// /Immagini TOP FOOTER

.ms_router-link {
  text-decoration: none;
  color: inherit;
}

.ms_contact {
  color: #67615a;
}

.ms_logo {
  width: 200px;
  height: auto;
}
</style>
