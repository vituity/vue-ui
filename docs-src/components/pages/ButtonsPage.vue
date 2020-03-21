<template lang="pug">
Page(title="Buttons" subTitle="look at all the fancy buttons")
  .page--body
    .b-box
      .b-box-header
        | Colors
      .b-btns
        .b-btn(v-for="color in color1" :class="['is-'+color]") {{color}}
      .b-btns
        .b-btn(v-for="color in color2" :class="['is-'+color]") {{color}}
      h5 .is-light
      .b-btns
        .b-btn.is-light(v-for="color in color2" :class="['is-'+color]") {{color}}
    .b-box
      .b-box-header
        | Sizes
        .b-btns
          .b-btn.is-info.is-large Large
          .b-btn.is-info.is-medium Medium
          .b-btn.is-info Default
          .b-btn.is-info.is-small Small
          .b-btn.is-info.is-tiny Tiny
    .b-box
      .b-box-header
        | Button with icon
        .b-btns
          .b-btn.is-primary.is-large
            .b-icon
              i.fa.fa-star
          .b-btn.is-primary.is-default
            .b-icon
              i.fa.fa-star
          .b-btn.is-primary.is-tiny
            .b-icon
              i.fa.fa-star
        .b-btns
          .b-btn
            .b-icon
              i.fa.fa-comment
            span Comment
          .b-btn.is-info
            .b-icon
              i.fab.fa-twitter
            span Twitter
          .b-btn.is-inverted.is-primary
            span Github
            .b-icon
              i.fab.fa-github
          .b-btn.is-outlined.is-danger
            span Delete
            .b-icon
              i.fa.fa-times
        .b-btns
          .b-btn.is-round
            .b-icon
              i.fa.fa-expand
          .b-btn.is-primary.is-round
            .b-icon
              i.fa.fa-redo
          .b-btn.is-warning.is-round
            .b-icon
              i.fa.fa-minus
          .b-btn.is-danger.is-round
            .b-icon
              i.fa.fa-times
          .b-btn.is-info.is-round
            .b-icon
              i.fa.fa-stack
        div
          | Keeps things square no matter size of icon or button
        .b-btns
          .b-btn
            .b-icon.is-small
              i.fas.fa-heading
          .b-btn
            .b-icon.is-medium
              i.fas.fa-heading.fa-lg
          .b-btn
            .b-icon
              i.fas.fa-heading.fa-2x

    .b-box
      .b-box-header
        | .is-outlined
      .b-btns
        .b-btn.is-outlined(v-for="color in color2" :class="['is-'+color]") {{color}}
    .b-box.has-background-grey
      .b-box-header
        | .is-inverted
      .b-btns
        .b-btn.is-inverted(v-for="color in color2" :class="['is-'+color]") {{color}}
    .b-box.has-background-grey
      .b-box-header
        | .is-inverted.is-outlined
      .b-btns
        .b-btn.is-inverted.is-outlined(v-for="color in color2" :class="['is-'+color]") {{color}}
    .b-box
      .b-box-header
        | .is-rounded
      .b-btns
        .b-btn.is-rounded(v-for="color in color2" :class="['is-'+color]") {{color}}
    .b-box
      .b-box-header
        | .is-round
      .b-btns
        .b-btn.is-round(v-for="color in color2" :class="['is-'+color]") R
    .b-box
      .b-box-header
        | .is-loading
      .b-btns
        .b-btn.is-loading(v-for="color in color2" :class="['is-'+color]") Loading
    .b-box
      .b-box-header
        | [disabled]
      .b-btns
        .b-btn(disabled v-for="color in color2" :class="['is-'+color]") {{color}}
    .b-box
      .b-box-header
        | grouped
      .b-btns.has-addons
        .b-btn Yes
        .b-btn Maybe
        .b-btn No
      .b-btns.has-addons
        .b-btn
          .b-icon
            i.fas.fa-align-left
          span Left
        .b-btn.is-info.is-selected
          .b-icon
            i.fas.fa-align-center
          span Center
        .b-btn
          .b-icon
            i.fas.fa-align-right
          span Right
</template>
<script>

export default {
  data() {
    return {
      color1: ['white', 'light', 'dark', 'black', 'text'],
      color2: ['default', 'primary', 'accent', 'link', 'info', 'success', 'warning', 'danger']
    }
  }
}
</script>
<style lang="sass" scoped>
.page--body
  display: flex
  flex-wrap: wrap
  position: relative
  justify-content: space-around
  .b-box
    flex: 0 0 49%
    max-width: 49%
</style>
