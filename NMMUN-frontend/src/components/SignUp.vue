<template>
  <div>
     signup
    <form method="post">
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
  <label for="lname"><b>Lastname</b></label>
        <input type="text" placeholder="Enter Lastname" name="lname" required />
        <label for="email"><b>email</b></label>
        <input type="text" placeholder="Enter emailid" name="email" required />
        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button v-on:click="onclick" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  methods: {
    onclick: function() {
      // fetch request
      this.$router.push('/login');
    },
  },
};
</script>
