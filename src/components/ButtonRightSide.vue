<script>
export default {};
</script>

<template>
  <a href="#" class="top-btn">
    <i class="fa-solid fa-folder-plus"></i>
  </a>
  <a href="#" class="bottom-btn">
    <i class="fa-solid fa-cart-shopping"></i>
  </a>
</template>

<style lang="scss" scoped>
.top-btn {
  position: fixed;
  top: 15rem;
  right: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  text-decoration: none;
  transition: 0.2s ease-out;

  i {
    font-size: 1.6rem;
    color: #33465B;
  }
}

.bottom-btn {
  position: fixed;
  top: 19.2rem;
  right: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  text-decoration: none;
  transition: 0.2s ease-out;

  i {
    font-size: 1.6rem;
    color: #33465B;
  }
}

.top-btn:hover,
.bottom-btn:hover {
  
  background-color: orange;

  i {
    color: #fff;
  }
}
</style>
