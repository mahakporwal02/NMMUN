<template>
  <div>
    <form id="user_info" class="offset-sm-1" v-on:submit.prevent="get_names">
      <div class="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input
          type="text"
          class="form-control col-sm-5"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter First Name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Last Name</label>
        <input
          type="text"
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
      <button type="submit"  class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    get_names: async function() {
     const form_data = document.getElementById("user_info")
     var data  = {
            "firstname": form_data.elements[0].value,
          "lastname":  form_data.elements[1].value,
          "phone":  form_data.elements[2].value,
          "email":  form_data.elements[3].value,
          "committee1":  form_data.elements[4].value,
          "committee2":  form_data.elements[5].value,
      }
      console.log(data);
      const response = await fetch("https://sheetdb.io/api/v1/77dgrp95pgh5u", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      console.log(response)
    },
  },
};
</script>
<style scoped></style>
