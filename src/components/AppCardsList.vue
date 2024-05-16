<script>
export default {
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <div class="card">
    <a href="">
      <img class="ms-img" :src="cardobj.image" alt="" />
    </a>
    <!-- Contenuto della card -->
    <div class="card-body">
      <h5 class="card-title">
        {{ cardobj.title }}
      </h5>
    </div>
  </div>
</template>

<style scoped></style>
