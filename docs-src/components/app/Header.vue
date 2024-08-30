<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/assets/logo.png" height="28" alt="Logo"/>
      </router-link>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <!-- Simple Items -->
        <a
          v-for="item in simpleItems"
          :key="item.name"
          class="navbar-item"
          :href="item.link"
        >
          {{ item.name }}
        </a>
        <!-- Dropdown Items -->
        <div
          v-for="item in dropdownItems"
          :key="item.name"
          class="navbar-item has-dropdown is-hoverable"
        >
          <a class="navbar-link" :href="item.link">
            {{ item.name }}
          </a>
          <div class="navbar-dropdown">
            <a
              v-for="subItem in item.subItems"
              :key="subItem.name"
              class="navbar-item"
              :href="subItem.link"
            >
              {{ subItem.name }}
            </a>
            <hr class="navbar-divider" />
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
      navbarItems: [
        { name: 'Home', link: '/' },
        { name: 'Documentation', link: '/documentation' },
        {
          name: 'More',
          subItems: [
            { name: 'About', link: '/about' },
            { name: 'Jobs', link: '/jobs' },
            { name: 'Contact', link: '/contact' }
          ]
        }
      ]
    }
  },
  computed: {
    simpleItems() {
      return this.navbarItems.filter(item => !item.subItems)
    },
    dropdownItems() {
      return this.navbarItems.filter(item => item.subItems)
    }
  }
}
</script>
