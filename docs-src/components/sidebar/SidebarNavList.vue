<template>
  <li
    v-if="menu.children"
    :class="{ 'is-active': subIsActive(menu.path), 'expand': stat == 'expand' }"
    class="has-sub"
  >
    <div class="nav-item" @click.prevent.stop="expand">
      <span class="b-icon is-small" v-if="menu.icon">
        <i :class="menu.icon"></i>
      </span>
      <span>{{ menu.title }}</span>
      <span class="v-label is-primary" v-if="menu.label">{{ menu.label }}</span>
      <span class="v-badge is-black" v-if="menu.badge">{{ menu.badge }}</span>
      <span class="caret" v-else></span>
    </div>
    <ul class="sub-nav">
      <template v-for="submenu in menu.children" :key="submenu.path">
        <SidebarNavList
          ref="sidebarNavList"
          :menu="submenu"
          @collapse-other="handleCollapseOther(submenu)"
        />
      </template>
    </ul>
  </li>
  <router-link v-else :to="menu.path" tag="li" active-class="is-active">
    <a class="nav-item">
      <span class="b-icon is-small" v-if="menu.icon">
        <i :class="menu.icon"></i>
      </span>
      <span>{{ menu.title }}</span>
      <span class="v-label is-primary" v-if="menu.label">{{ menu.label }}</span>
      <span class="v-badge is-black" v-if="menu.badge">{{ menu.badge }}</span>
    </a>
  </router-link>
</template>


<script>
export default {
  props: ['menu'],
  data() {
    return {
      stat: '',
    };
  },
  methods: {
    expand() {
      if (this.stat === '') {
        this.stat = this.subIsActive(this.menu.path) ? 'collapse' : 'expand';
      } else {
        this.stat = this.stat === 'expand' ? 'collapse' : 'expand';
      }
      this.$emit('collapse-other', this.menu);
    },
    collapse(menu) {
      if (this.menu !== menu) {
        this.stat = 'collapse';
      }
    },
    collapseOther() {
      this.$emit('collapse-other', this.menu);
    },
    handleCollapseOther(menu) {
      this.menu.children.forEach((_, index) => {
        this.$refs.sidebarNavList[index].collapse(menu);
      });
    },
    subIsActive(path) {
      const paths = Array.isArray(path) ? path : [path];
      return paths.some((p) => this.$route.path.indexOf(p) === 0);
    },
  },
};
</script>

