<script>
export default {
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
    <div class="mt-3">
      <h3 class="text-center fw-bold">Spazio per immagini</h3>
    </div>
    <hr />
    <!-- /Spazio immagini -->

    <!-- Footer Down -->
    <!-- Section 1 -->
    <div class="row justify-content-around text-center text-md-start">
      <div class="col-md-3 text-center">
        <div class="">
          <img
            src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/avada-food-logo-mob-2x.png"
            alt="logo avada food"
            class="img-fluid ms_logo"
          />
        </div>

        <div class="wrapper">
          <div class="icon facebook">
            <div class="ms_tooltip">Facebook</div>
            <span><i class="fa-brands fa-facebook-f"></i></span>
          </div>

          <div class="icon instagram">
            <div class="ms_tooltip">Instragram</div>
            <span><i class="fa-brands fa-instagram"></i></span>
          </div>

          <div class="icon twitter">
            <div class="ms_tooltip">X</div>
            <span><i class="fa-brands fa-x-twitter"></i></span>
          </div>

          <div class="icon youtube">
            <div class="ms_tooltip">YouTube</div>
            <span><i class="fa-brands fa-youtube"></i></span>
          </div>
        </div>
      </div>
      <!-- /Section1 -->

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
        <h3>Spazio per Get our App</h3>
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

// ICONE SOCIAL

.wrapper {
  display: inline-flex;
  gap: 20px;
  margin-top: 20px;
}
.wrapper .icon {
  // margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);
}

.wrapper .icon span {
  position: relative;
  height: 40px;
  width: 40px;
  display: block;
  background: #fff;
  text-align: center;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.wrapper .icon span i {
  font-size: 25px;
  line-height: 40px;
}

.wrapper .icon:hover span {
  color: #fff;
}

.wrapper .icon .ms_tooltip {
  position: absolute;
  bottom: 0px;
  background: #fff;
  color: #fff;
  font-size: 20px;
  padding: 10px 18px;
  border-radius: 25px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);
}

.wrapper .icon:hover .ms_tooltip {
  bottom: -70px;
  opacity: 1;
  pointer-events: auto;
}

.wrapper .icon .ms_tooltip:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: #fff;
  top: -5px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  transition: all 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);
}

.wrapper .icone:hover span,
.wrapper .icon:hover .ms_tooltip {
  text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
}

// Facebook
.wrapper .facebook:hover span,
.wrapper .facebook:hover .ms_tooltip, 
.wrapper .facebook:hover .ms_tooltip:before {
  background: #3B5999;
}

// Instagram
.wrapper .instagram:hover span,
.wrapper .instagram:hover .ms_tooltip, 
.wrapper .instagram:hover .ms_tooltip:before {
  background: #e1306c;
}

// Twitter
.wrapper .twitter:hover span,
.wrapper .twitter:hover .ms_tooltip, 
.wrapper .twitter:hover .ms_tooltip:before {
  background: #333;
}

// YouTube
.wrapper .youtube:hover span,
.wrapper .youtube:hover .ms_tooltip, 
.wrapper .youtube:hover .ms_tooltip:before {
  background: #DE463B;
}
</style>
