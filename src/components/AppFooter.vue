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
  <footer>
    <h1>Footer</h1>
    <ul>
      <li v-for="item in menu" :key="item">
        <router-link :to="{ name: item.routeName }">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped></style>
