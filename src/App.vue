<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppCards from "./components/AppCards.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppCards,
  },
 
 
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppCards />
  <AppFooter />
</template>

<style scoped lang="scss"></style>
