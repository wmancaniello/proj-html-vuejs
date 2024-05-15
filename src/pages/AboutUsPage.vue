<script>
    export default {

    };
</script>

<template>
    <div>
      <!-- Container con background image e overlay scuro -->
      <div class="hero-section">
        <div class="overlay">
          <div class="text-center">
            <h1>About Us</h1>
            <p>About Avada Food Blog. About our amazing journey so far</p>
          </div>
        </div>
      </div>
  
      <!-- sezione con griglia di immagini e testo -->
      <div class="container my-5">
        <div class="row">
          <!-- Colonna di sinistra con la griglia di immagini -->
          <div class="col-md-6">
            <div class="row">
              <div class="col-6 p-1">
                <img src="../assets/img/banana.jpg" alt="Image 1" class="img-fluid">
              </div>
              <div class="col-6 p-1">
                <img src="../assets/img/beans.jpg" alt="Image 2" class="img-fluid">
              </div>
              <div class="col-6 p-1">
                <img src="../assets/img/kimchi.jpg" alt="Image 3" class="img-fluid">
              </div>
              <div class="col-6 p-1">
                <img src="../assets/img/egg-fruit.jpg" alt="Image 4" class="img-fluid">
              </div>
              <div class="col-6 p-1">
                <img src="../assets/img/ice-cream.jpg" alt="Image 5" class="img-fluid">
              </div>
              <div class="col-6 p-1">
                <img src="../assets/img/sushi.jpg" alt="Image 6" class="img-fluid">
              </div>
            </div>
          </div>
          <!-- Colonna di destra con il testo -->
          <div class="col-md-6">
            <div class="row mb-5">
              <div class="col-12">
                <h3>Our Story</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat. Phasellus vel semper ante. Vivamus turpis purus, dapibus vitae ex a, varius ornare elit. Nullam eu purus congue, bibendum felis id, aliquet ante.</p>
                <p>Donec porttitor, diam quis posuere lacinia, justo libero consequat mi, at euismod lacus mi in erat. Cras sit amet ornare orci.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h3>About Our Company</h3>
                <p>Curabitur id nibh sit amet lectus efficitur tempus aliquet non ante. Aenean feugiat, enim suscipit dictum ullamcorper, tellus nunc mollis leo, vitae elementum lacus lorem tempor ante. Maecenas ac aliquet risus, nec fringilla sem. Nam sed nibh id arcu vestibulum malesuada pretium sed nisl. Nunc tristique, dui ac interdum scelerisque, arcu purus faucibus nisl.</p>
                <p>Praesent condimentum ligula lacus, id dignissim mi feugiat non. Nulla vel velit nisi. Nam vitae eros ullamcorper dolor dapibus pellentesque. In non iaculis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <style scoped lang="scss">
    .hero-section {
      position: relative;
      background-image: url("../assets/img/Avada-AboutUs-Background.png"); 
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 400px;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
    }
    
    .overlay h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      margin-bottom: 10px;
    }
    
    .overlay p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
    }
    
    h3 {
      font-family: 'Playfair Display', serif;
      font-weight: bold;
      margin-bottom: 20px;
    }
    
    p {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #666;
      margin-bottom: 20px;
    }
    
    .ms-container-card {
      margin: auto;
      background-color: #ffffff;
      margin-top: -100px;
    }
    
    .ms-btn,
    .ms-btn-home {
      background-color: #fc7523;
      border: none;
    }
    
    .ms-img {
      height: 200px;
      object-fit: cover;
    }
    
    a {
      text-decoration: none;
      color: black;
    }
    
    .ms-banner-text:hover {
      color: #fc7523;
    }
    
    .card-text {
      color: #666;
    }
    
    h2 {
      font-family: 'Playfair Display', serif;
      color: #333;
    }
    
    p.card-text {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #666;
    }
    </style>
        