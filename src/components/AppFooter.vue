<script>
export default {
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
