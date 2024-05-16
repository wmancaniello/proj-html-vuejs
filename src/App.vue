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
  data() {
    return {
      cardsArray: [
        {
          title: "Fruit Platter with Banana, Mango, Berries and Orange",
          image: "../assets/img/banana.jpg",
        },
        {
          title: "Breakfast Delight With Strawberry, Egg and Fruit",
          image: "../assets/img/egg-fruit.jpg",
        },
        {
          title: "Ice Cream Heaven With Vanilla, Chocolate and Pistachio",
          image: "../assets/img/ice-cream.jpg",
        },
        {
          title: "Video Recipe: How to make a Summer Drink Cool",
          image: "../assets/img/summer-drink.jpg",
        },
        {
          title: "Ketogenic Diet Recipe with Avocado",
          image: "../assets/img/fruit-vegetables.jpg",
        },
        {
          title: "Video Recipe: The perfect Cosmopolitan",
          image: "../assets/img/drink.jpg",
        },
      ],
    };
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
