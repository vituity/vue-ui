<template lang="pug">
.tab-layout
  .b-tabs
    router-link.tab(to="/dashboard" active-class="is-active")
      span.b-icon.is-small
        i.fas.fa-tachometer-alt
      | Dashboard
    a.tab
      span.b-icon.is-small
        i.fas.fa-chart-bar
      | View Reports
    router-link.tab(to="/account" active-class="is-active")
      span.b-icon.is-small
        i.fas.fa-edit
      | Manage Account
    router-link.tab(to="/activities/open" active-class="is-active")
      span.b-icon.is-small
        i.fas.fa-list
      | Active Activities
    a.tab
      span.b-icon.is-small
        i.far.fa-check-square
      | Closed Activities
    a.tab
      span.b-icon.is-small
        i.far.fa-times-circle
      | Removed Activities
</template>
<script>
export default {

}
</script>

<style lang="sass" scoped>
.tab-layout
  background-color: #262626
  padding: 10px
  height: 100%
  display: flex
  flex-direction: column

  .b-tabs
    display: flex
    .tab
      padding: 10px
      margin-right: 2px
      background-color: $ui-color-light-neutral
      color: $ui-color-dark
      border-radius: 2px 2px 0 0
      font-size: .85em
      &:hover, &.is-active
        background-color: $ui-color-primary
        color: $ui-color-light
      .b-icon
        margin-right: 6px

</style>
