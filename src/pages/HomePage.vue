<script>
export default {};
</script>

<template>
    <!-- Container con background image -->
  <div
    class="container-fluid ms-home-bg p-0 justify-content-center align-item-center"
  >
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="text-center p-4">
          <a href="#" class="ms-btn-home btn btn-primary btn-lg rounded-0"
            >Today's Picks</a
          >
        </div>
      </div>
    </div>
    <div
      class="ms-banner-bg align-items-center row justify-content-center mb-4"
    >
      <div class="col-9">
        <div class="text-center p-4">
          <h1 class="mt-4">
            <a href="" class="text-dark ms-banner-text"
              >Food Corner: Top Japanese Restaurants for Sushi</a
            >
          </h1>
          <p>March 25, 2019</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Card con cibo -->
  <div class="container">
    <div class="row justify-content-center mt-4">
        <div class="col-12">
            <hr>
                <h2 class="text-center"> FOODIE JOURNAL</h2>
            <hr>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card mb-4">
                <img class="card-img-top" src="../assets/img/sushi.jpg" alt="Sushi">
                <div class="card-body">
                    <h5 class="card-title"><a href="">Food Corner: Top Japanese Restaurants for Sushi</a></h5>
                    <p class="card-text">March 25th, 2019</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4">
                <img class="card-img-top" src="../assets/img/riso.jpg" alt="Rice">
                <div class="card-body">
                    <h5 class="card-title"><a href="">Roundup: My New Favourite Recipes For Healthy Living</a></h5>
                    <p class="card-text">March 25th, 2019</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4">
                <img class="card-img-top" src="../assets/img/kimchi.jpg" alt="Kimchi">
                <div class="card-body">
                    <h5 class="card-title"><a href="">Meal Prep: Korean Bibimbap with Kimchi</a></h5>
                    <p class="card-text">March 25th, 2019</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.ms-home-bg {
  background-image: url("../assets/img/bg-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 140px;
  padding-bottom: 220px;
  margin: 0 auto;
  height: 700px;

  .ms-btn-home {
    background-color: #fc7523;
    border: none;
  }

  .ms-banner-bg {
    background-color: white;
    border-radius: 15px;
    width: 50%;
    margin: auto;
    font-family: serif;
  }
}
a {
  text-decoration: none;
  color: black;
}
.ms-banner-text:hover {
  color: #fc7523;
}
</style>
