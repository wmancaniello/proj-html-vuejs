<script>
export default {};
</script>

<template>
  <a href="#" class="back-top">
    <i class="fa-solid fa-chevron-up"></i>
  </a>
</template>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  bottom: 2rem;
  left: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #464646;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-decoration: none;
  transition: 0.2s ease-out;
  z-index: 1;

  i {
    color: #fff;
  }
}

.back-top:hover {
  background-color: orange;
}
</style>
