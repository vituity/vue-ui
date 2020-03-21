<template lang="pug">
.page
  .page--header
    slot(name="header")
      h3.title {{title}} <small>{{subTitle}}</small>
  slot
</template>

<script>
export default {
  props: ['title', 'subTitle']

}
</script>

<style lang="sass" scoped>
.page
  flex: 1
  display: flex
  flex-direction: column
  .page--header
    padding: 14px
    display: flex
    flex-direction: row
    align-items: center
    position: relative
    height: 3rem
    z-index: 1
    flex: auto 0 0
    > *
      flex: auto 0 0
    .title
      font-size: 1.5rem
      font-weight: lighter
      margin-bottom: 0
    .spacer
      flex: auto 1 1
      width: 0
      height: 0
  .page--body
    padding: 10px
</style>
