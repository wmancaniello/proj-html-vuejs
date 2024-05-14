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
        },
      ],
    };
  },
};
</script>

<template>
    <header>
        <ul>
            <li v-for="item in menu"> 
                <router-link :to="{name: item.routeName}" >
                    {{ item.title }}
                </router-link>
             </li>
        </ul>
    </header>
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
  




