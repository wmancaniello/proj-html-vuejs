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
  <div class="container-fluid text-white p-3 ms_footer">
    <!-- Spazio immagini -->
    <div class="mt-3">
      <h3 class="text-center fw-bold">Spazio per immagini</h3>
    </div>
    <hr />
    <!-- /Spazio immagini -->

    <!-- Footer Down -->
    <!-- Section 1 -->
    <div class="row justify-content-around text-center text-md-start">
      <div class="col-md-2 text-center">
        <h3>Logo img</h3>
        <p>icone social</p>
      </div>
      <!-- /Section1 -->

      <!-- Section 2 -->
      <div class="col-md-2">
        <ul class="list-unstyled">
          <li v-for="item in menu" :key="item" class="my-3">
            <router-link :to="{ name: item.routeName }">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <!-- /Section 2 -->

      <!-- Section 3 -->
      <div class="col-md-2">
        <h5 class="text-uppercase mb-4 font-weight-bold">Contact US</h5>
        <ul class="list-unstyled">
          <li class="ms_list">
            <div>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>12345 Avada Main Street, New York, NY 555555</div>
          </li>
          <hr />
          <li>
            <div><i class="fa-solid fa-phone-flip"></i> + 0100-505-0000</div>
          </li>

          <hr />
          <li>
            <div>
              <i class="fa-solid fa-envelope"></i> info@avada-domain.com
            </div>
          </li>
          <hr />
        </ul>
      </div>
      <!-- /Section 3 -->

      <!-- Section 4  -->
      <div class="col-md-2">
        <h3>Spazio per Get our App</h3>
      </div>
      <!-- /Section 4 -->
    </div>
    <!-- /Footer Down -->
  </div>

  <!-- <footer>
    <h1>Footer</h1>
    <ul>
      <li v-for="item in menu" :key="item">
        <router-link :to="{ name: item.routeName }">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </footer> -->
</template>

<style lang="scss" scoped>
.ms_footer {
  background-color: black;
}

.ms_list {
  display: flex;
  flex-direction: row;
}
</style>
