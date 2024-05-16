<script>
import AppCardsList from "./AppCardsList.vue";

export default {
  components: {
    AppCardsList,
  },
  props: {
    cardsArray: Array,
  },

  data() {
    return {};
  },
};
</script>

<template>
  <div class="col-md-6">
    <div class="row">
      <div class="col-md-6 mb-3" v-for="card in cardsArray">
        <AppCardsList :cardObj="card" />
      </div>
    </div>
  </div>
  
</template>

<style>

</style>
