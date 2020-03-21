<template lang="pug">
li.has-sub(v-if="menu.children" :class="{ 'is-active': subIsActive(menu.path), 'expand': this.stat =='expand'}")
  div.nav-item(@click.prevent.stop="expand($event)")
    span.b-icon.is-small(v-if="menu.icon")
      i(:class="menu.icon")
    span {{menu.title}}
    span.v-label.is-primary(v-if="menu.label") {{menu.label}}
    span.v-badge.is-black(v-if="menu.badge") {{menu.badge}}
    span.caret(v-else)
  ul.sub-nav
    template(v-for="submenu in menu.children")
      SidebarNavList(
        ref="sidebarNavList"
        :menu="submenu"
        :key="submenu.path"
        v-on:collapse-other="handleCollapseOther(submenu)"
      )
router-link(v-else :to="menu.path" tag="li" active-class="is-active")
  a.nav-item
    span.b-icon.is-small(v-if="menu.icon")
      i(:class="menu.icon")
    span {{menu.title}}
    span.v-label.is-primary(v-if="menu.label") {{menu.label}}
    span.v-badge.is-black(v-if="menu.badge") {{menu.badge}}
</template>

<script>
export default {
  props: ['menu'],
  data() {
    return {
      stat: ''
    }
  },
  methods: {
    expand: function () {
      if (this.stat === '') {
        this.stat = (this.subIsActive(this.menu.path)) ? 'collapse' : 'expand'
      } else {
        this.stat = (this.stat === 'expand') ? 'collapse' : 'expand'
      }
      this.$emit('collapse-other', this.menu)
    },
    collapse: function (menu) {
      if (this.menu !== menu) {
        this.stat = 'collapse'
      }
    },
    collapseOther: function () {
      this.$emit('collapse-other', this.menu)
    },
    handleCollapseOther: function (menu) {
      for (var i = 0; i < this.menu.children.length; i++) {
        this.$refs.sidebarNavList[i].collapse(menu)
      }
    },
    subIsActive(path) {
      const paths = Array.isArray(path) ? path : [path]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0
      })
    }
  }
}
</script>
