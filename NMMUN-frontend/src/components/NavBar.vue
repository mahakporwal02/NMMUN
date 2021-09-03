<template>
  <div class="container-fluid">
    <div class="display">
      <div class="row ml-4">
        <div class="col-lg-2 logo">
          <img class="logo" alt="Vue logo" src="../assets/logo.svg" />
        </div>
        <div class="main-nav col-lg-6 col-xl-5 mt-4 offset-lg-1">
          <div class="row">
            <div class="col-2 neg-margin">
              <a
                class="ml-4"
                style="color: #DDB771; text-decoration: none;"
                href="#"
                >ABOUT</a
              >
            </div>
            <div class="col-2">
              <a
                class="ml-2"
                style="color: #DDB771; text-decoration: none;"
                href="#/sec"
                >SECRETARIAT</a
              >
            </div>
            <div class="col-3" style="text-align:center;">
              <a
                class="ml-4 pl-2"
                style="color: #DDB771; text-decoration: none;"
                href="#/committees"
                >COMMITTEES</a
              >
            </div>
            <div class="col-2">
              <a
                class="ml-2 p-lg-2"
                style="color: #DDB771; text-decoration: none;"
                href="#/gallery"
                >GALLERY</a
              >
            </div>
            <div class="col-2">
              <a
                class="ml-2"
                style="color: #DDB771; text-decoration: none;"
                href="#/resources"
                >RESOURCES</a
              >
            </div>
          </div>
        </div>
        <div
          class="side-nav col-lg-1 offset-xl-2 offset-lg-1  mt-4"
          style="text-align:center;"
        >
          <a
            class="neg-mg-side-nav"
            style="color: #DDB771; text-decoration: none;"
            href="#/register"
            >REGISTER</a
          >
        </div>
      </div>
    </div>

    <div class="display-small">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a href="#"><img class="logo" src="../assets/logo.svg"/></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nav-toggle"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav-toggle">
          <ul class="navbar-nav mr-auto li-color">
            <li class="nav-item active">
              <a class="nav-link" style="color: #dbaf5d;" href="#/about"
                >ABOUT</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color: #dbaf5d;" href="#/sec"
                >SECRETARIAT</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color: #dbaf5d;" href="#/committees">
                COMMITTEES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " style="color: #dbaf5d;" href="#/gallery"
                >GALLERY</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link " style="color: #dbaf5d;" href="#/resources"
                >RESOURCES</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link " style="color: #dbaf5d;" href="#/register"
                >REGISTER</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-5 ">
        <img class="heading" src="../assets/header.svg"/>
      </div>
       <div class="col-lg-3">
        <img class="side_heading" src="../assets/side_header.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style scoped></style>
