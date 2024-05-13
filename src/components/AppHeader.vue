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
  <header>
    <h1>Header</h1>
    <ul>
      <li v-for="item in menu" :key="item">
        <router-link :to="{ name: item.routeName }">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped></style>
