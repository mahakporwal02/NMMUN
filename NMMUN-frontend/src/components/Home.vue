<template>
  <div>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg"> -->
    <!-- <img alt="img-heading" class="img-heading" src="./assets/heading.svg">
    <img alt="heading-pink" class="heading-pink" src ="./assets/heading pink.svg">
    <img alt="white curve" class="white-curve" src ="./assets/white curve.svg"> -->
    <button v-on:click="onclick">
      Login
    </button>
    <!-- <img alt="pink curve" class="pink-curve" src ="./assets/pink curve.svg">
    <img alt="grey curve" class="grey-curve" src ="./assets/grey curve.svg">
    <img alt="nav rect" class="nav-rect" src ="./assets/nav rect.svg">
    <img alt="auth rect" class="auth-rect" src ="./assets/auth rect.svg">
    <img alt="black curve" class="black-curve" src ="./assets/black curve.svg">
    <img alt="black rect" class="black-rect" src ="./assets/black_rect.svg">
    <img alt="black_bottom_curve" class="black-bcurve" src ="./assets/black_bottom_curve.svg"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    onclick: function() {
      this.$router.push('/login');
    },
  },
};
</script>
