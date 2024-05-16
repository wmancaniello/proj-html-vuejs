<script>
export default {
  props: {
    cardObj: Object,
  },
};
</script>

<template>
    <div class="card ms_image"> 
        <img
          :src="cardObj.image"
          alt=""
          class="img-fluid"
        />
        <div class="ms_content">
          <p>{{ cardObj.title }}</p>
        </div>
      </div>
  <!-- <div class="card">
    <a href="">
      <img class="ms-img" :src="cardObj.image" alt="" />
    </a> -->
    <!-- Contenuto della card -->
    

    <!-- <div class="card-body">
      <h5 class="card-title">
        {{ cardObj.title }}
      </h5>
    </div> -->
  <!-- </div> -->
</template>

<style scoped>
.ms_image {
  position: relative;

  img {
    width: 100%;
    display: block;
    margin: auto;
  }
}

.ms_content {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(250, 146, 0, 0.485);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.6s;
}

.ms_content:hover {
  opacity: 1;
}

.ms_content p {
  color: #fff;
}
</style>
