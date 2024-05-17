<script>
import AppOrangeButton from "../components/AppOrangeButton.vue";
import AppIconsSocial from "../components/AppIconsSocial.vue";
import AppCards from "../components/AppCards.vue";
import AppCardsList from "../components/AppCardsList.vue";

export default {
  components: {
    AppOrangeButton,
    AppIconsSocial,
    AppCardsList,
    AppCards,
  },
  data() {
    return {
      cardsArray: [
        {
          title: "Fruit Platter with Banana, Mango, Berries and Orange",
          image: "src/assets/img/banana.jpg",
        },
        {
          title: "Breakfast Delight With Strawberry, Egg and Fruit",
          image: "src/assets/img/egg-fruit.jpg",
        },
        {
          title: "Ice Cream Heaven With Vanilla, Chocolate and Pistachio",
          image: "src/assets/img/ice-cream.jpg",
        },
        {
          title: "Video Recipe: How to make a Summer Drink Cool",
          image: "src/assets/img/summer-drink.jpg",
        },
        {
          title: "Ketogenic Diet Recipe with Avocado",
          image: "src/assets/img/fruit-vegetables.jpg",
        },
        {
          title: "Video Recipe: The perfect Cosmopolitan",
          image: "src/assets/img/drink.jpg",
        },
      ],
    };
  },
};
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
  <div class="container ms-container-card">
    <div class="row justify-content-center mt-4">
      <div class="col-12">
        <hr />
        <h2 class="text-center">FOODIE JOURNAL</h2>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4">
          <img class="ms-img" src="../assets/img/sushi.jpg" alt="Sushi" />
          <div class="card-body">
            <h5 class="card-title">
              <a href="">Food Corner: Top Japanese Restaurants for Sushi</a>
            </h5>
            <p class="card-text">March 25th, 2019</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <img class="ms-img" src="../assets/img/riso.jpg" alt="Rice" />
          <div class="card-body">
            <h5 class="card-title">
              <a href=""
                >Roundup: My New Favourite Recipes For Healthy Living</a
              >
            </h5>
            <p class="card-text">March 25th, 2019</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <img class="ms-img" src="../assets/img/kimchi.jpg" alt="Kimchi" />
          <div class="card-body">
            <h5 class="card-title">
              <a href="">Meal Prep: Korean Bibimbap with Kimchi</a>
            </h5>
            <p class="card-text">March 25th, 2019</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- GRIGLIA CON CARD -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 mt-5 p-4">
        <h2 class="text-center">POPULAR RECIPES</h2>
        <p class="card-text text-center">
          Aliquam erat volutpat. Ut quis ligula a magna blandit finibus.
          Suspendisse maximus lacus non nunc lacinia lobortis.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <!-- Colonna sinistra con la grande card -->
          <div class="col-md-6 mb-3">
            <div class="card">
              <!-- Contenuto della grande card -->
              <img src="../assets/img/beans.jpg" alt="beans" />
              <div class="card-body">
                <h5 class="card-title">
                  Lunch Favourite with Salad, Naan and Beans
                </h5>
                <p class="card-text">
                  Suspendisse at semper odio. Nam fringilla scelerisque
                  tincidunt. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Donec tincidunt
                  posuere ornare. Phasellus placerat odio non feugiat
                  sollicitudin. Integer vitae elementum ex. Sed porttitor, diam
                  eget convallis volutpat, arcu.
                </p>
                <AppOrangeButton text="Learn More" />
              </div>
            </div>
          </div>

          <AppCards :cardsArray="cardsArray" />
        </div>
      </div>
    </div>
  </div>

  <!-- CULINARY COLLECTION -->
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center my-5">
        <h2>CULINARY COLLECTION</h2>
        <p>
          Aliquam erat volutpat. Ut quis ligula a magna blandit finibus.
          Suspendisse maximus lacus non nunc lacinia lobortis.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="card mb-4 ms-card text-center">
            <img
              class="card-img-top custom-card-img"
              src="../assets/img/cheese.webp"
              alt="Cheese"
            />
            <div class="card-body text-center">
              <a href="" class="ms-btn-recipes btn btn-primary w-100"
                >Appetisers</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="card mb-4 ms-card text-center">
            <img
              class="card-img-top custom-card-img"
              src="../assets/img/bakery.webp"
              alt="Bakery"
            />
            <div class="card-body text-center">
              <a href="/" class="ms-btn-recipes btn btn-primary w-100"
                >Bakery</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="card mb-4 ms-card text-center">
            <img
              class="card-img-top custom-card-img"
              src="../assets/img/dinner.webp"
              alt="Dinner"
            />
            <div class="card-body text-center">
              <a href="" class="ms-btn-recipes btn btn-primary w-100">Dinner</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="card mb-4 ms-card text-center">
            <img
              class="card-img-top custom-card-img"
              src="../assets/img/drinks.webp"
              alt="Drinks"
            />
            <div class="card-body text-center">
              <a href="" class="ms-btn-recipes btn btn-primary w-100">Drinks</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="card mb-4 ms-card text-center">
            <img
              class="card-img-top custom-card-img"
              src="../assets/img/healthy.webp"
              alt="Healthy"
            />
            <div class="card-body text-center">
              <a href="" class="ms-btn-recipes btn btn-primary w-100"
                >Healthy</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="card mb-4 ms-card text-center">
            <img
              class="card-img-top custom-card-img"
              src="../assets/img/quick-easy.webp"
              alt="Quick & Easy"
            />
            <div class="card-body text-center">
              <a href="" class="ms-btn-recipes btn btn-primary w-100"
                >Quick & Easy</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="card mb-4 ms-card text-center">
            <img
              class="card-img-top custom-card-img"
              src="../assets/img/soups.webp"
              alt="Soups"
            />
            <div class="card-body text-center">
              <a href="" class="ms-btn-recipes btn btn-primary w-100">Soups</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="card mb-4 ms-card text-center">
            <img
              class="card-img-top custom-card-img"
              src="../assets/img/staff-picks.webp"
              alt="Staff Picks"
            />
            <div class="card-body text-center">
              <a href="" class="ms-btn-recipes btn btn-primary w-100"
                >Staff Picks</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FARM TO TABLE -->
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6 text-left">
        <h2>FARM TO TABLE</h2>
        <p>
          Aliquam erat volutpat. Ut quis ligula a magna blandit finibus.
          Suspendisse maximus lacus non nunc lacinia lobortis.
        </p>
      </div>
      <div class="col-md-6 text-right">
        <a href="" class="ms-btn btn btn-primary"
          >READ OUR BLOG <i class="fa-solid fa-book-open-reader"></i
        ></a>
      </div>
    </div>
    <!-- CARD GRANDE  A SINISTRA -->
    <!-- CONTAINER SX -->
    <div class="row">
      <div class="col-md-6 col-sm-6 justify-content-around mb-3">
        <div class="card">
          <img src="../assets/img/sushi.jpg" alt="" />
          <div class="card-body">
            <h5 class="card-title">
              Food corner: Top Japanese Restaurants for Sushi
            </h5>
            <p class="card-text">
              Suspendisse at semper odio. Nam fringilla scelerisque tincidunt.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus
              placerat odio non feugiat sollicitudin. Integer vitae elementum
              ex. Sed porttitor, diam eget convallis volutpat, arcu.
            </p>
            <a href="" class="ms-btn-noborder btn btn-primary ms-btn"
              >Read More</a
            >
          </div>
        </div>
        <div class="col-12 my-5 ms_width">
          <AppCards :cardsArray="cardsArray" />
        </div>
      </div>

      <!-- PRIMA CARD A DESTRA -->

      <div class="col-md-6 col-sm-6">
        <div class="container col-6">
          <div class="card ms_image mb-4">
            <a href="">
              <img
                class="img-our-recipe"
                src="../assets/img/bg-card-recipes.jpg"
                alt=""
              />
            </a>
          </div>
        </div>

        <!-- SECONDA CARD A DESTRA -->
        <div class="container col-6">
          <div class="card ms_image mb-4">
            <a href="">
              <img class="" src="../assets/img/singapore.jpg" alt="" />
            </a>
            <div class="align-items justify-content-center text-center">
              <h5><a href="">City Guides Singapore</a></h5>
            </div>
            <a href="" class="btn btn-primary ms-btn"
              >View all City Guides <i class="fa-solid fa-globe"></i
            ></a>
          </div>

          <hr />

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default"
                ><button class="btn-search">
                  <i class="fa-solid fa-magnifying-glass"></i></button
              ></span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Search"
              placeholder="Search"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div>
            <AppIconsSocial />
          </div>
          <div class="btn-group my-4" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-lg btn-outline-dark">
              Popular
            </button>
            <button type="button" class="btn btn-lg btn-outline-dark">
              Recent
            </button>
          </div>
          <div class="container p-2 d-flex">
            <div class="ms-img">
              <img
                class="ms-img-rounded"
                src="../assets/img/sushi.jpg"
                alt=""
              />
            </div>
            <div>
              <h6>Food Corner: Top Japanese Restaurants for Sushi</h6>
              <p>March 25th, 2019</p>
            </div>
          </div>
          <div class="container p-2 d-flex">
            <div class="ms-img">
              <img class="ms-img-rounded" src="../assets/img/riso.jpg" alt="" />
            </div>
            <div>
              <h6>Roundup: My new Favourite Recipes For Healthy Living</h6>
              <p>March 25th, 2019</p>
            </div>
          </div>
          <div class="container p-2 d-flex">
            <div class="ms-img">
              <img
                class="ms-img-rounded"
                src="../assets/img/kimchi.jpg"
                alt=""
              />
            </div>
            <div>
              <h6>Meal Prep: Korean Bibimbap with Kimchi</h6>
              <p>March 25th, 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CONTAINER FINALE CON BAKGROUND -->
  <div class="last-bg">
    <div class="container text-center">
      <h1>Subscribe <span class="text-orange">&</span> Receive A Free eBook</h1>
      <p>
        Aliquam erat volutpat. Ut quis ligula a magna blandit finibus.
        Suspendisse maximus lacus non nunc lacinia lobortis.
      </p>
      <div class="input-group mb-3">
        <input
          type="email"
          class="form-control"
          placeholder="Insert your email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">@email.com</span>
        </div>
      </div>
      <AppOrangeButton text="Subscribe" />
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
    border: none;
    margin-bottom: -50px;
  }

  .ms-banner-bg {
    background-color: white;
    border-radius: 15px;
    width: 50%;
    margin: auto;
    font-family: serif;
  }
}
.ms-btn-home {
  margin-bottom: -50px;
}

a {
  text-decoration: none;
  color: black;
}
.ms-banner-text:hover {
  color: #fc7523;
}

/* CARD CON CIBO */
.ms-container-card {
  margin: auto;
  background-color: #ffff;
  margin-top: -100px;
}

/* GRIGLIA CON CARD */
.ms-btn,
.ms-btn-home,
.ms-btn-recipes {
  background-color: #fc7523;
  color: white;
  border: none;
  border-radius: 0%;
}

// .ms-img {
//   height: 200px;
// }

/* CULINARY COLLECTION */
.card-img-top {
  position: relative;

  img {
    width: 50%;
    display: block;
    margin: auto;
  }
}

.card-img-top {
  width: 100%;
}

/*FARM TABLE*/
.ms-btn-noborder {
  border: none;
  background-color: #ffff;
  color: black;
}
.ms-btn-noborder:hover {
  border-bottom: 1px solid black;
}
// .img-our-recipe {
//   width: 70%;
// }

.ms_image {
  position: relative;

  img {
    width: 100%;
    display: block;
    margin: auto;
  }
}

.ms_width {
  width: 200%;
}

/*ROUNDED IMG */
.ms-img {
  display: flex;
  justify-content: left;
  text-align: left;

  .ms-img-rounded {
    position: relative;
    display: block;
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
}

/*LAST PART HOMEPAGE */
.last-bg {
  background-image: url(../assets/img/HomePage-bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px;

  .text-orange {
    color: #fc7523;
  }
}

.btn-search {
  border: none;
  background-color: #ffff;
  color: lightgray;
}

.custom-card-img {
  width: auto;
  height: auto;
  margin: 0 auto;
}

/* ------------------------------ HOVER ------------------------------ */

.my-hover-card {
  overflow: hidden;
}

.img-container {
  position: relative;
  overflow: hidden;
}

.my-hover-img {
  transition: transform 0.6s ease-in-out;
  width: 100%;
  height: auto;
}

.img-container:hover .my-hover-img {
  transform: scale(1.1);
}

.img-container-hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(250, 146, 0, 0.485);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.img-container-hero:hover::after {
  opacity: 1;
  transition: 1s;
}

/* ------------------------------ HOVER end------------------------------ */
</style>
