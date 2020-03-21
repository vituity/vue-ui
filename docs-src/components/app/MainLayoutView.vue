<template lang="pug">
//- Place fixed items outside .app-scroll

//- sticky sidebar and statusbar (Header not fixed)
#app(:class="{'has-scrolled':scrollPosition > 0}")
  .app-scroll(v-on:scroll="onScroll" ref="appScroll")
    Header
    .app-body
      Sidebar.sticky-sidebar(:style="{height:sidebarHeight}")
      router-view
  Statusbar

//-Fixed header, sidebar, statusbar
//#app
  Header
  .app-body.no-scroll
    Sidebar
    .app-scroll
      router-view
  Statusbar

//-Fixed statusbar
//#app.no-scroll
  .app-scroll
    Header
    .app-body
      Sidebar
      router-view
  Statusbar

//- Fixed header and statusbar
//#app.no-scroll
  Header
  .app-scroll
    .app-body
      Sidebar
      router-view
  Statusbar

//- No Fixed elements
//#app
  Header
  .app-body
    Sidebar
    router-view
  Statusbar
</template>

<script>
export default {
  data() {
    return {
      // showNavbar: true,
      scrollPosition: 0,
      win: {
        height: 0,
        width: 0
      }
    }
  },
  computed: {
    sidebarHeight() {
      let offset = 0
      if (this.scrollPosition === 0) {
        // offset the header if visible
        offset += 52
      }
      // offset the footer
      offset += 28
      return `calc(100vh - ${offset}px)`
    }
  },
  mounted() {
    // window.addEventListener('resize', this.onResize)
    // this.onResize()
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.onResize)
  },
  methods: {
    // onResize() {
    //   this.win.height = window.innerHeight
    //   this.win.width = window.innerWidth
    // },
    onScroll(e) {
      // Get the current scroll position
      let currentScrollPosition = e.target.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        currentScrollPosition = 0
      }
      this.scrollPosition = currentScrollPosition
    }
  }
}

</script>

<style lang="sass" scoped>
#app
  display: flex
  flex-direction: column
  min-height: 100vh

  .app-body
    display: flex
    flex: 1
    position: relative

.sticky-sidebar
  position: sticky
  top: 0

.has-scrolled
  .hide-on-scroll
    display: none

.no-scroll
  overflow: hidden

.app-scroll
  overflow: auto
  display: flex
  flex-direction: column
  flex: 1

.flex-row
  display: flex

.flex-column
  display: flex
  flex-direction: column

// .content
//   flex: auto 1 1
//   overflow: hidden
//   position: relative

// .main-layout
//   display: flex
//   flex: auto 1 1
//   overflow: hidden

// .content-view
//   background-color: $background
//   flex: auto 1 1
//   display: flex
//   flex-direction: column
//   overflow: hidden

</style>
