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
    <hr>
    <!-- Spazio immagini -->

    <div class="row justify-content-around text-center text-md-start">
      <div class="col-md-2 text-center">
        <h3>Logo img</h3>
        <p>icone social</p>
      </div>

      <!-- Section 1 -->
      <div class="col-md-2">
        <ul class="list-unstyled">
          <li v-for="item in menu" :key="item" class="my-3">
            <router-link :to="{ name: item.routeName }">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <!-- /Section 1 -->

      <!-- Section 2 -->
      <div class="col-md-2">
        <h3>
          Spazio per contact US
        </h3>
      </div>
      <!-- /Section 2 -->

      <!-- Section 3  -->
      <div class="col-md-2">
        <h3>Spazio per Get our App</h3>
      </div>
      <!-- /Section 3 -->

    </div>
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
</style>
