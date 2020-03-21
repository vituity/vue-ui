<template lang="pug">
.v-sidebar.is-dark
  ul.nav
    li.nav-header Navigation
    template(v-for="menu in menus")
      SidebarNavList(
        ref="sidebarNavList"
        :menu="menu"
        :key="menu.path"
        v-on:collapse-other="handleCollapseOther(menu)"
      )
    //- li
    //-   a.nav-item
    //-     span.b-icon.is-small
    //-       i.fas.fa-robot
    //-     span AutoPost
    //-     span.v-label.is-primary New
    //-     span.v-badge.is-black 22
    //- li
    //-   a.nav-item
    //-     span.b-icon.is-small
    //-       i.far.fa-check-square
    //-     span Label 2
    //-     span.v-label.is-primary New
    //-     span.v-badge.is-black 1
    //- li.is-active
    //-   div.nav-item
    //-     span.b-icon.is-small
    //-       i.far.fa-check-square
    //-     span Dashboards
    //-     span.v-label.is-primary New
    //-     span.caret
    //-   ul.sub-nav
    //-     router-link(to="dashboard" v-slot="{ href, route, navigate, isActive, isExactActive }")
    //-       li(:class="[isActive && 'is-active', isActive && 'router-link-active', isExactActive && 'router-link-exact-active']")
    //-         a.nav-item(:href="href" @click="navigate")
    //-           span.b-icon.is-small
    //-             i.far.fa-check-square
    //-           span Dashboard 1
    //-     li
    //-       a.nav-item
    //-         span.b-icon.is-small
    //-           i.far.fa-check-square
    //-         span Nested Label 2
    //-     li
    //-       a.nav-item
    //-         span.b-icon.is-small
    //-           i.far.fa-check-square
    //-         span Nested Label 3
</template>
<script>
import SidebarMenu from './SidebarMenu.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
  data() {
    return {
      menus: SidebarMenu,
      pageOptions: PageOptions
    }
  },
  methods: {
    handleCollapseOther: function (menu) {
      for (var i = 0; i < this.menus.length; i++) {
        this.$refs.sidebarNavList[i].collapse(menu)
      }
    }
  }
}
</script>
