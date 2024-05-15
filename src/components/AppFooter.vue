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
  <div class="full-width text-black ms_footer">
    <!-- Spazio immagini -->

    <div class="d-flex flex-wrap mb-5">
      <div class="col-12 col-md-3 ms_image">
        <img
          src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits-1200x790.jpg"
          alt=""
          class="img-fluid"
        />
        <div class="ms_content">
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div class="col-12 col-md-3 ms_image">
        <img
          src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-rachel-park-366508-unsplash-min-1200x790.jpg"
          alt=""
          class="img-fluid"
        />
        <div class="ms_content">
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div class="col-12 col-md-3 ms_image">
        <img
          src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-michelle-tsang-500721-unsplash-min-1200x790.jpg"
          alt=""
          class="img-fluid"
        />
        <div class="ms_content">
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div class="col-12 col-md-3 ms_image">
        <img
          src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/quick-summer-drink.jpg"
          alt=""
          class="img-fluid"
        />
        <div class="ms_content">
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>

    <!-- /Spazio immagini -->

    <!-- FOOTER DOWN -->

    <!-- Section 1 -->
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
      <!-- /Section 1 -->

      <!-- Section 2 -->
      <div class="col-md-3 nav-icons">
        <ul class="list-unstyled">
          <li v-for="item in menu" :key="item" class="mb-3">
            <router-link :to="{ name: item.routeName }" class="ms_router-link">
              {{ item.title }}
            </router-link>
          </li>
        </ul>

        <!-- <ul class="list-unstyled">
          <li v-for="item in menu" :key="item" class="mb-3">
            <router-link :to="{ name: item.routeName }" class="ms_router-link">
              {{ item.title }}
            </router-link>
          </li>
        </ul> -->
      </div>
      <!-- /Section 2 -->

      <!-- Section 3 -->
      <div class="col-md-3 ms_contact">
        <h6 class="text-uppercase mb-4 font-weight-bold ms_text-orange">
          Contact US
        </h6>

        <ul class="list-unstyled">
          <li class="d-flex flex-row gap-3">
            <div>
              <i class="fa-solid fa-location-dot ms_text-orange"></i>
            </div>
            <div>12345 Avada Main Street, New York, NY 555555</div>
          </li>
          <hr />

          <li class="d-flex flex-row gap-3">
            <div><i class="fa-solid fa-phone-flip ms_text-orange"></i></div>
            <div>+ 0100-505-0000</div>
          </li>
          <hr />

          <li class="d-flex flex-row gap-3">
            <div>
              <i class="fa-solid fa-envelope ms_text-orange"></i>
            </div>
            <div>info@avada-domain.com</div>
          </li>
          <hr />
        </ul>
      </div>
      <!-- /Section 3 -->

      <!-- Section 4  -->
      <div class="col-md-3">
        <h6 class="text-uppercase mb-4 font-weight-bold ms_text-orange">
          GET OUR APP
        </h6>
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

  <!-- Copyright -->
  <div class="text-center py-4 bg_lightgrey ms_copy">
    © Copyright 2012 - 2019 |
    <a href="#">Avada Website Builder</a>
    by
    <a href="#">ThemeFusion</a>
    | All Rights Reserved | Powered by
    <a href="#">WordPress</a>
  </div>
  <!-- /Copyright -->
</template>

<style lang="scss" scoped>
.full-width {
  width: 100%;
  box-sizing: border-box;
}

.ms_copy {
  font-size: 0.75em;
}

.ms_footer {
  background-color: #fff;
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

// Colori
.ms_text-orange {
  color: #fc7523;
}

.bg_lightgrey {
  background-color: #f5f5f0;
}

// Hover IMG
.ms_image {
  position: relative;

  img {
    width: 100%;
    display: block;
    margin: auto;
  }
}

.ms_content {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.6s;
}

.ms_content:hover {
  opacity: 1;
}

.ms_content p {
  color: #fff;
}

// HOVER MENU

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
  height: 100%;
  width: 3px;
  right: 50%;
  top: 0;
  transform: translateX(50%);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
}

.nav-icons a:hover {
  color: orange;
}

.nav-icons a:hover:after {
  transform: translateX(100px);
  opacity: 1;
  visibility: visible;
}
</style>
