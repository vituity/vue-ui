<template>
  <div class="tab-layout">
    <div class="b-tabs">
      <router-link class="tab" to="/dashboard" active-class="is-active">
        <span class="b-icon is-small">
          <i class="fas fa-tachometer-alt"></i>
        </span>
        Dashboard
      </router-link>
      <a class="tab">
        <span class="b-icon is-small">
          <i class="fas fa-chart-bar"></i>
        </span>
        View Reports
      </a>
      <router-link class="tab" to="/account" active-class="is-active">
        <span class="b-icon is-small">
          <i class="fas fa-edit"></i>
        </span>
        Manage Account
      </router-link>
      <router-link class="tab" to="/activities/open" active-class="is-active">
        <span class="b-icon is-small">
          <i class="fas fa-list"></i>
        </span>
        Active Activities
      </router-link>
      <a class="tab">
        <span class="b-icon is-small">
          <i class="far fa-check-square"></i>
        </span>
        Closed Activities
      </a>
      <a class="tab">
        <span class="b-icon is-small">
          <i class="far fa-times-circle"></i>
        </span>
        Removed Activities
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tab-layout {
  background-color: #262626;
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.b-tabs {
  display: flex;
}

.tab {
  padding: 10px;
  margin-right: 2px;
  background-color: var(--ui-color-light-neutral);
  color: var(--ui-color-dark);
  border-radius: 2px 2px 0 0;
  font-size: 0.85em;
}

.tab:hover,
.tab.is-active {
  background-color: var(--ui-color-primary);
  color: var(--ui-color-light);
}

.b-icon {
  margin-right: 6px;
}
</style>

