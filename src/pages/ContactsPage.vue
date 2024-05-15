<script>
import AppIconsSocial from "../components/AppIconsSocial.vue";

export default {
  components: {
    AppIconsSocial,
  },
};
</script>

<template>
  <div
    class="container-fluid ms_bg d-flex justify-content-center align-items-center flex-column"
  >
    <h1>Contacts Us</h1>
    <p>
      Nunc rutrum a nibh id ornare. Vivamus eleifend ultricies elit quis
      imperdiet.
    </p>
  </div>
  <div class="container">
    <div class="row">
      <!-- Container sx -->
      <div class="col-6 ms_bg-test d-flex flex-column">
        <!-- Office Section -->
        <div class="container bg-light mt-2 d-flex gap-5">
          <div><i class="fa-solid fa-location-dot"></i></div>
          <div>
            <h4>MAIN OFFICE</h4>
            <p>12345 Avada Main Street, New York, NY 555555</p>
          </div>
        </div>
        <!-- /Office Section -->

        <!-- Contact Section -->
        <div class="container bg-light mt-2 d-flex gap-5">
          <div><i class="fa-solid fa-phone-flip"></i></div>
          <div>
            <h4>QUICK CONTACT</h4>
            <p>+ 0100-505-0000</p>
          </div>
        </div>
        <!-- /Contact Section -->

        <!-- Hours Section -->
        <div class="container bg-light mt-2 d-flex gap-5">
          <div><i class="fa-solid fa-clock"></i></div>
          <div>
            <h4>OFFICE HOURS</h4>
            <p>9AM – 5PM (Monday – Friday)</p>
          </div>
        </div>
        <!-- /Hours Section -->

        <!-- Icons Social Section -->
        <div class="container bg-light mt-2 text-center">
          <AppIconsSocial />
        </div>
        <!-- /Icons Social Section -->
      </div>
      <!-- /Container sx -->

      <!-- Container dx -->
      <div class="col-6 ms_bg-test1">
        <h6>GET IN TOUCH</h6>
        <p>
          Integer sem velit, bibendum nec lectus sit amet, efficitur mollis
          mauris. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec nisl dui, accumsan vel aliquet nec,
          blandit in nisi.
        </p>
      </div>
      <!-- /Container dx -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ms_bg {
  background-image: url(https://avada.website/food/wp-content/uploads/sites/118/2019/03/page-title-bar-bg-1.png);
  font-family: "Roboto", sans-serif;
  background-color: #67615a;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;

  h1 {
    color: #fff;
  }
  p {
    color: #d4d3d1;
  }
}

.ms_bg-test {
  background-image: url(https://avada.website/food/wp-content/uploads/sites/118/2019/03/brooke-lark-186926-unsplash-1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}
.ms_bg-test1 {
  background-color: lightblue;
}

/* Icon Hover */
i {
  position: relative;
  display: block;
  height: 60px;
  width: 60px;
  font-size: 30px;
  line-height: 60px;
  color: #666;
  background-color: #171515;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 15px;
}
</style>
