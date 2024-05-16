<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppCards from "./components/AppCards.vue";
import BackToTopButton from "./components/BackToTopButton.vue";
import ButtonRightSide from "./components/ButtonRightSide.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppCards,
    BackToTopButton,
    ButtonRightSide,
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppCards />
  <BackToTopButton />
  <ButtonRightSide />
  <AppFooter />
</template>

<style scoped lang="scss"></style>
