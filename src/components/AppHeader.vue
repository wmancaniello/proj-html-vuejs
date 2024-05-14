<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: "Home",
                    routeName: "home",
                },
                {
                    title: "About",
                    routeName: "about",
                },
                {
                    title: "Contacts",
                    routeName: "contacts",
                }
            ]
        }
    }
}
</script>

<!-- <template> -->
    <!-- <header>
        <ul>
            <li v-for="item in menu"> 
                <router-link :to="{name: item.routeName}" >
                    {{ item.title }}
                </router-link>
             </li>
        </ul>
    </header> -->

<!-- </template> -->
<template>

<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
</div>
<div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="../assets/img/avada-food-logo.svg" alt="" width="72" height="57">
    <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
  </div>

</template>
  

<style scoped>
  /* .navbar-brand img {
    max-height: 50px;
  }
  
  .nav-link {
    color: #000;
    margin-right: 10px;
  }
  
  .nav-link.active {
    color: #ff6600;
  }
  
  .btn-warning {
    background-color: #ff6600;
    border-color: #ff6600;
  }
  
  .bi {
    font-size: 1.5rem;
    color: #6c757d;
  }
  
  .nav-link:hover .bi {
    color: #ff6600;
  } */
</style>
  




