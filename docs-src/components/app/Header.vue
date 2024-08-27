<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/assets/logo.png" height="28" alt="Logo"/>
      </router-link>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#">
          Home
        </a>
        <a class="navbar-item" href="#">
          Documentation
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="#">
            More
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="#">
              About
            </a>
            <a class="navbar-item" href="#">
              Jobs
            </a>
            <a class="navbar-item" href="#">
              Contact
            </a>
            <hr class="navbar-divider"/>
            <a class="navbar-item" href="#">
              Report an issue
            </a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="b-btns">
            <a class="b-btn is-primary" href="#">
              <strong>Sign up</strong>
            </a>
            <a class="b-btn is-info" href="#">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>
