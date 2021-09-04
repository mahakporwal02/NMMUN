<template>
  <div class="container-fluid">
    <NavBar></NavBar>
    <About></About>
  </div>
</template>
<script>
import NavBar from './NavBar'
import About from './About'
export default {
  name: 'Home',
  components : {
    NavBar,
    About
  },
  methods: {
    onclick: function() {
      this.$router.push('/login');
    },
  },
};
</script>
