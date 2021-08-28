<template>
  <div>
    <NavBar></NavBar>
  </div>
</template>
<script>
import NavBar from './NavBar'
export default {
  name: 'Home',
  components : {
    NavBar
  },
  methods: {
    onclick: function() {
      this.$router.push('/login');
    },
  },
};
</script>
