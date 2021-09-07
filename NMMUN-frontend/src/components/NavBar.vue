<template>
  <div>
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
        <img class="heading" src="../assets/header.svg" />
      </div>
      <div class="col-lg-3">
        <img class="side_heading" src="../assets/side_header.svg" />
      </div>
      <div>
        <img class="main_photos display" src="../assets/main_photos.svg" />
      </div>
      <div class="urel">
        <div class="rel" style="">
          <div>
            <img class="about" src="../assets/About.svg" />
          </div>
          <div>
            <img class="campus" src="../assets/campus.svg" />
          </div>
          <div class="about_us offset-lg-1 col-lg-10">
            <p>
              NMMUN '21 was adjudged as one of the premier MUN conferences held
              in 2019 by its attendees. Having the presence of international
              delegates and participants from different MUNing circuits it stood
              out as an MUN that has crossed all divides and valleys. In the
              upcoming edition, we try bring to you a better and smoother
              session, laden with high octane debates and fruitful discussions.
            </p>

            <p>
              The Narsee Monjee Model United Nations Conference is an event that
              is organised annually in the Shirpur Campus of the SVKMs NMIMS
              Mukesh Patel School of Technology Management and Engineering. The
              event is organised by the students of this campus to provide the
              participants with a view as to how the United Nations and the
              bodies associated with it work.
            </p>

            <p>
              This year’s edition of the event is essentially the amalgamation
              of the ideas brought forward by the previous teams who have
              organised this event. the current team leading the event. and the
              backbone of the event- our college management. NMMUN has always
              had a reputation for being solemn and sophisticated. Thus. a
              tremendous effort is made to ensure that the participants get the
              feel of an actual council wherein discussions are being conducted
              at the best level and with proper respect and reverence for both
              the authorities and the nations being represented.
            </p>

            <p>
              TSo, as we ensure the very best efforts on our pat to give you the
              realistic fed of the United Nations along with our partners and
              sponsors. we hope that you will join us to partake of this grand
              event in its twelfth edition. We hope to see you there
            </p>
          </div>
        </div>
      </div>
      <div class="urel2" >
        <div class="rel2">
          <h1>SECRETERAIAT</h1>
        </div>
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
