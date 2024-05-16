<script>
import AppOrangeButton from "./AppOrangeButton.vue";
export default {
  components: {
    AppOrangeButton,
  },

  data() {
    return {
      smallArray: [
        {
          title2: "Appetisers",
          image2: "src/assets/img/cheese.webp",
        },
        {
          title2: "Bakery",
          image2: "src/assets/img/bakery.webp",
        },
        {
          title2: "Dinner",
          image2: "src/assets/img/dinner.webp",
        },
        {
          title2: "Drinks",
          image2: "src/assets/img/cheese.webp",
        },
        {
          title2: "Healthy",
          image2: "src/assets/img/healthy.webp",
        },
        {
          title2: "Quick & Easy",
          image2: "src/assets/img/quick-easy.webp",
        },
        {
          title2: "Soups",
          image2: "src/assets/img/soups.webp",
        },
        {
          title2: "Staff Picks",
          image2: "src/assets/img/staff-picks.webp",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- CARDS A 6 GRIGLIA EX. APETISERS -->
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6">
        <div class="card mb-4 ms-card mx-5" v-for="item in smallArray">
          <img class="card-img-top" :src="item.image2" alt="" />
          <div class="card-body text-center">
            <AppOrangeButton text={{ item.title2 }} />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
