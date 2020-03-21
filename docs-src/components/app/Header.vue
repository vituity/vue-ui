<template lang="pug">
nav.navbar.is-dark(role='navigation' aria-label='main navigation')
  .navbar-brand
    router-link.navbar-item(to="/")
      img(src='@/assets/logo.png' height='28')
  #navbarBasicExample.navbar-menu
    .navbar-start
      a.navbar-item
        | Home
      a.navbar-item
        | Documentation
      .navbar-item.has-dropdown.is-hoverable
        a.navbar-link
          | More
        .navbar-dropdown
          a.navbar-item
            | About
          a.navbar-item
            | Jobs
          a.navbar-item
            | Contact
          hr.navbar-divider
          a.navbar-item
            | Report an issue
    .navbar-end
      .navbar-item
        .b-btns
          a.b-btn.is-primary
            strong Sign up
          a.b-btn.is-light
            | Log in
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
