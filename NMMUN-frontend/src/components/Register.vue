<template>
  <div>
    <form class="offset-sm-1">
      <div class="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input
          type="email"
          class="form-control col-sm-5"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter First Name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Last Name</label>
        <input
          type="email"
          class="form-control col-sm-5"
          placeholder="Enter Last Name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control col-sm-5"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Committee</label>
        <input
          type="text"
          class="form-control col-sm-5"
          placeholder="Committee 1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Committee</label>
        <input
          type="text"
          class="form-control col-sm-5"
          placeholder="Committee 2"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
<style scoped></style>
