<script>

export default {
 
};
</script>


<template>
        <div class="wrapper">
          <div class="icon facebook">
            <div class="ms_tooltip">Facebook</div>
            <span><i class="fa-brands fa-facebook-f"></i></span>
          </div>

          <div class="icon instagram">
            <div class="ms_tooltip">Instagram</div>
            <span><i class="fa-brands fa-instagram"></i></span>
          </div>

          <div class="icon twitter">
            <div class="ms_tooltip">X</div>
            <span><i class="fa-brands fa-x-twitter"></i></span>
          </div>

          <div class="icon youtube">
            <div class="ms_tooltip">YouTube</div>
            <span><i class="fa-brands fa-youtube"></i></span>
          </div>
        </div>
</template>
  
  

<style scoped>

/* ICONE SOCIAL */

.wrapper {
  display: inline-flex;
  gap: 20px;
  margin: 25px 0;
}
.wrapper .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon span {
  position: relative;
  height: 40px;
  width: 40px;
  display: block;
  background: #fff;
  text-align: center;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.wrapper .icon span i {
  font-size: 25px;
  line-height: 40px;
}

.wrapper .icon:hover span {
  color: #fff;
}

.wrapper .icon .ms_tooltip {
  position: absolute;
  bottom: 0px;
  background: #fff;
  color: #fff;
  font-size: 20px;
  padding: 10px 18px;
  border-radius: 25px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .ms_tooltip {
  bottom: -70px;
  opacity: 1;
  pointer-events: auto;
}

.wrapper .icon .ms_tooltip:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: #fff;
  top: -2px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icone:hover span,
.wrapper .icon:hover .ms_tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
}

/* // Facebook */
.wrapper .facebook:hover span,
.wrapper .facebook:hover .ms_tooltip,
.wrapper .facebook:hover .ms_tooltip:before {
  background: #3b5999;
}

/* // Instagram */
.wrapper .instagram:hover span,
.wrapper .instagram:hover .ms_tooltip,
.wrapper .instagram:hover .ms_tooltip:before {
  background: #e1306c;
}

/* // Twitter */
.wrapper .twitter:hover span,
.wrapper .twitter:hover .ms_tooltip,
.wrapper .twitter:hover .ms_tooltip:before {
  background: #333;
}

/* // YouTube */
.wrapper .youtube:hover span,
.wrapper .youtube:hover .ms_tooltip,
.wrapper .youtube:hover .ms_tooltip:before {
  background: #de463b;
}


</style>


  




