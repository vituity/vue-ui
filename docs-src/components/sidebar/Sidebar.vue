<template>
  <div class="v-sidebar is-dark">
    <ul class="nav">
      <li class="nav-header">Navigation</li>
      <template v-for="menu in menus">
        <SidebarNavList
          ref="sidebarNavList"
          :menu="menu"
          @collapse-other="handleCollapseOther(menu)"
        />
      </template>
      <!-- Uncomment and adapt the following as needed -->
      <!-- 
      <li>
        <a class="nav-item">
          <span class="b-icon is-small">
            <i class="fas fa-robot"></i>
          </span>
          AutoPost
          <span class="v-label is-primary">New</span>
          <span class="v-badge is-black">22</span>
        </a>
      </li>
      <li>
        <a class="nav-item">
          <span class="b-icon is-small">
            <i class="far fa-check-square"></i>
          </span>
          Label 2
          <span class="v-label is-primary">New</span>
          <span class="v-badge is-black">1</span>
        </a>
      </li>
      <li class="is-active">
        <div class="nav-item">
          <span class="b-icon is-small">
            <i class="far fa-check-square"></i>
          </span>
          Dashboards
          <span class="v-label is-primary">New</span>
          <span class="caret"></span>
        </div>
        <ul class="sub-nav">
          <router-link to="dashboard" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <li :class="[isActive && 'is-active', isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
              <a class="nav-item" :href="href" @click="navigate">
                <span class="b-icon is-small">
                  <i class="far fa-check-square"></i>
                </span>
                Dashboard 1
              </a>
            </li>
          </router-link>
          <li>
            <a class="nav-item">
              <span class="b-icon is-small">
                <i class="far fa-check-square"></i>
              </span>
              Nested Label 2
            </a>
          </li>
          <li>
            <a class="nav-item">
              <span class="b-icon is-small">
                <i class="far fa-check-square"></i>
              </span>
              Nested Label 3
            </a>
          </li>
        </ul>
      </li>
      -->
    </ul>
  </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
  data() {
    return {
      menus: SidebarMenu,
      pageOptions: PageOptions,
    };
  },
  methods: {
    handleCollapseOther(menu) {
      for (let i = 0; i < this.menus.length; i++) {
        this.$refs.sidebarNavList[i].collapse(menu);
      }
    },
  },
};
</script>

