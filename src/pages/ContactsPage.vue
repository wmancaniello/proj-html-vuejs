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
    class="container-fluid ms_bg-hero d-flex justify-content-center align-items-center flex-column"
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
      <div
        class="col-12 col-sm-6 ms_bg-dx d-flex flex-column justify-content-around inner"
      >
        <!-- Office Section -->
        <div class="container bg_white mt-2 d-flex p-4 gap-4">
          <div class="ms_icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h6>MAIN OFFICE</h6>
            <p>12345 Avada Main Street, New York, NY 555555</p>
          </div>
        </div>
        <!-- /Office Section -->

        <!-- Contact Section -->
        <div class="container bg_white mt-2 d-flex p-4 gap-4">
          <div class="ms_icon">
            <i class="fas fa-phone-alt"></i>
          </div>
          <div>
            <h6>QUICK CONTACT</h6>
            <p>+ 0100-505-0000</p>
          </div>
        </div>
        <!-- /Contact Section -->

        <!-- Hours Section -->
        <div class="container bg_white mt-2 d-flex p-4 gap-4">
          <div class="ms_icon">
            <i class="fas fa-clock"></i>
          </div>
          <div>
            <h6>OFFICE HOURS</h6>
            <p>9AM - 5PM (Monday - Friday)</p>
          </div>
        </div>
        <!-- /Hours Section -->

        <!-- Icons Social Section -->
        <div class="container text-center">
          <AppIconsSocial />
        </div>
        <!-- /Icons Social Section -->
      </div>
      <!-- /Container sx -->

      <!-- Container dx -->
      <div class="col-12 col-sm-6">
        <!-- Intestazione Form -->
        <div class="container mt-5 p-5">
          <h6>GET IN TOUCH</h6>
          <p style="color: #67615a">
            Integer sem velit, bibendum nec lectus sit amet, efficitur mollis
            mauris. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec nisl dui, accumsan vel aliquet
            nec, blandit in nisi.
          </p>

          <!-- Form -->
          <form class="row g-3">
            <div class="col-md-8">
              <label for="name" class="form-label">Your name *..</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Example: Mario Rossi"
                required
              />
            </div>
            <div class="col-md-8">
              <label for="emailInfo" class="form-label">E-mail*</label>
              <input
                type="email"
                class="form-control"
                id="emailInfo"
                placeholder="Example: mrossi@email.com"
                required
              />
            </div>
            <div class="col-md-8">
              <label for="subject" class="form-label">Subject*</label>
              <input
                type="text"
                class="form-control"
                id="subject"
                placeholder="Message Title"
                required
              />
            </div>
            <div class="col-md-8">
              <label for="message" class="form-label">Your message*</label>
              <textarea
                class="form-control"
                id="message"
                rows="3"
                placeholder="Type your message here..."
              ></textarea>
            </div>
          </form>
          <!-- /Form -->
        </div>
        <!-- /Intestazione Form -->
      </div>
      <!-- /Container dx -->
    </div>
  </div>
  <div>
    <!--  -->
    <div
      class="p-5 d-flex justify-content-center align-items-center flex-column bg_grey ms_height"
    >
      <p style="color: #919292">
        For privacy reasons Google Maps needs your permission to be loaded.
      </p>
      <div>
        <button>Bottone da inserire...</button>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<style lang="scss" scoped>
.ms_bg-hero {
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

.ms_bg-dx {
  background-image: url(https://avada.website/food/wp-content/uploads/sites/118/2019/03/brooke-lark-186926-unsplash-1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 700px;
}

.ms_height {
    height: 350px;
}

.bg_white {
  background-color: #fff;
  width: 60%;
}

.bg_grey {
  background-color: #dcdcd8;
}

.inner {
  position: relative;
  top: -60px;
}

/* Icon Hover */
.ms_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
i {
  position: relative;
  display: block;
  height: 60px;
  width: 60px;
  font-size: 30px;
  line-height: 57px;
  color: #fc7523;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #fc7523;
  margin: 0 15px;
  transition: background-color 1s ease-out, border-color 1s ease-out,
    color 1s ease-out;
}

i:hover {
  background-color: #333338;
  border-color: #333338;
  color: #fc7523;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.25);
}
</style>
