<template>
  <div class="parallax">
    <!-- <div class="parallax__layer parallax__layer__0">
      <img src="assets/home_parallax/layer_3.png" />
    </div> -->
    <div class="parallax__layer parallax__layer__1">
      <img src="~assets/home_parallax/layer_1.png" />
    </div>
    <div class="parallax__layer parallax__layer__2">
      <img src="~assets/home_parallax/layer_2.png" />
    </div>
    <div class="parallax__layer parallax__layer__3">
      <img src="~assets/home_parallax/layer_3.png" />
    </div>
    <div class="parallax__layer parallax__layer__4">
      <img src="~assets/home_parallax/layer_4.png" />
    </div>
    <div class="parallax__layer parallax__layer__5">
      <img src="~assets/home_parallax/layer_5.png" />
    </div>
    <div class="parallax__layer parallax__layer__6">
      <img src="~assets/home_parallax/layer_6.png" />
    </div>
    <div class="parallax__cover">
      <slot name="cover" />
    </div>
    <div class="body-container">
      <div class="body-content">
        <div style="background-color: #003321; padding-bottom: 60px">
          <slot name="sl01" />
        </div>
        <div>
          <slot name="sl02" />
        </div>
        <div>
          <footer-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
// @import "compass/css3";

// * {
//   box-sizing: border-box;
// }

.parallax {
  perspective: 100px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  margin-left: -1500px;
}

.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  img {
    display: block;
    position: absolute;
    bottom: 0;
  }
}

.parallax__cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: calc(1500px - 50vw);
  height: 100vh;
  width: 100vw;
  z-index: 2;
}
.body-container {
  display: block;
  position: absolute;
  top: calc(100%);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  // background-color: #fff;
  .body-content {
    // background-color: #fff;
    position: absolute;
    display: block;
    top: -6px;
    left: calc(1500px - 50vw);
    max-width: 100vw;
  }
}

.parallax__layer__0 {
  display: none;
  -webkit-transform: translateZ(-300px) scale(4);
  transform: translateZ(-300px) scale(4);
}

.parallax__layer__1 {
  // display: none;
  -webkit-transform: translateZ(-300px) scale(4);
  transform: translateZ(-300px) scale(4);
  // -webkit-transform: translateZ(-250px) scale(3.5);
  // transform: translateZ(-250px) scale(3.5);
  img {
    display: block;
    position: absolute;
    top: 0 !important;
  }
}

.parallax__layer__2 {
  // display: none;
  -webkit-transform: translateZ(-200px) scale(3);
  transform: translateZ(-200px) scale(3);
}

.parallax__layer__3 {
  // display: none;
  -webkit-transform: translateZ(-150px) scale(2.5);
  transform: translateZ(-150px) scale(2.5);
}

.parallax__layer__4 {
  // display: none;
  -webkit-transform: translateZ(-100px) scale(2);
  transform: translateZ(-100px) scale(2);
}

.parallax__layer__5 {
  display: none;
  -webkit-transform: translateZ(-50px) scale(1.5);
  transform: translateZ(-50px) scale(1.5);
}

.parallax__layer__6 {
  // display: none;
  -webkit-transform: translateZ(0px) scale(1);
  transform: translateZ(0px) scale(1);
}

// $parallax__layers: 6;

// @for $i from 0 through $parallax__layers {
//   $x: ($parallax__layers - $i) / 2;
//   .parallax__layer__#{$i} {
//     transform: translateZ(-100 * $x#{px}) scale($x + 1);
//   }
// }

// .parallax {
//   perspective: 100px;
//   height: 100vh;
//   overflow-x: hidden;
//   overflow-y: auto;
//   position: absolute;
//   top: 0;
//   left: 50%;
//   right: 0;
//   bottom: 0;
//   margin-left: -1500px;
// }

// .parallax__layer {
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;

//   img {
//     display: block;
//     position: absolute;
//     bottom: 0;
//   }
// }

// .parallax__cover {
//   background: #2d112b;
//   display: block;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   right: 0;
//   height: 2000px;
//   z-index: 2;
// }

// $parallax__layers: 6;

// @for $i from 0 through $parallax__layers {
//   $x: ($parallax__layers - $i) / 2;
//   .parallax__layer__#{$i} {
//     transform: translateZ(-100 * $x#{px}) scale($x + 1);
//   }
// }
</style>
