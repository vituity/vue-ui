<template lang="pug">
  .v-input
    .input-wrapper
      slot
      .border
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.input-wrapper
  display: flex
  flex-direction: row
  position: relative
  border: 1px solid lighten($ui-color-primary, 35%)
  border-radius: 3px
  .input
    height: 30px
    flex: 1
    border-radius: 0px
    border: none
    box-shadow: none
    background-color: rgba($ui-color-primary, 0.05)
    outline: 0
    &:focus
      background-color: #fff
  .border
    position: absolute
    bottom: -1px
    left: 30%
    right: 30%
    opacity: 0
    background-color: $ui-color-primary
    height: 2px
    transition: left .15s, right .15s, opacity .15s
  .input:focus + .border
    left: 0
    right: 0
    opacity: 1
</style>
