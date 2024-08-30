<template>
  <!-- Place fixed items outside .app-scroll -->

  <!-- Sticky sidebar and statusbar (Header not fixed) -->
  <div id="app" :class="{'has-scrolled': scrollPosition > 0}">
    <div class="app-scroll" @scroll="onScroll" ref="appScroll">
      <Header />
      <div class="app-body">
        <Sidebar class="sticky-sidebar" :style="{ height: sidebarHeight }" />
        <router-view />
      </div>
    </div>
    <Statusbar />
  </div>

  <!-- Fixed header, sidebar, statusbar -->
  <!--
  <div id="app">
    <Header />
    <div class="app-body no-scroll">
      <Sidebar />
      <div class="app-scroll">
        <router-view />
      </div>
    </div>
    <Statusbar />
  </div>
  -->

  <!-- Fixed statusbar -->
  <!--
  <div id="app" class="no-scroll">
    <div class="app-scroll">
      <Header />
      <div class="app-body">
        <Sidebar />
        <router-view />
      </div>
    </div>
    <Statusbar />
  </div>
  -->

  <!-- Fixed header and statusbar -->
  <!--
  <div id="app" class="no-scroll">
    <Header />
    <div class="app-scroll">
      <div class="app-body">
        <Sidebar />
        <router-view />
      </div>
    </div>
    <Statusbar />
  </div>
  -->

  <!-- No Fixed elements -->
  <!--
  <div id="app">
    <Header />
    <div class="app-body">
      <Sidebar />
      <router-view />
    </div>
    <Statusbar />
  </div>
  -->
</template>

<script>
export default {
  data() {
    return {
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

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-body {
  display: flex;
  flex: 1;
  position: relative;
}

.sticky-sidebar {
  position: sticky;
  top: 0;
}

.has-scrolled .hide-on-scroll {
  display: none;
}

.no-scroll {
  overflow: hidden;
}

.app-scroll {
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.flex-row {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

/* .content {
  flex: auto 1 1;
  overflow: hidden;
  position: relative;
}

.main-layout {
  display: flex;
  flex: auto 1 1;
  overflow: hidden;
}

.content-view {
  background-color: $background;
  flex: auto 1 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
} */
</style>
