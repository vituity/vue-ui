<template lang="pug">
.vrb-group.vrb-group-default(:class="'depth-' + depth.toString()")
  .vrb-group-heading(v-if="!isBasic")
    .vrb-match-type
      .b-select.is-small.m-b-5
        select(v-model='rule.logicalOperator')
          option(v-for='label in labels.matchTypes', :key='label.id', :value='label.id') {{ label.label }} are true
    .vrb-group-heading-buttons
      button.b-btn.is-tiny(v-if="depth > 1", type='button', @click='remove')
        .b-icon
          i.fas.fa-minus-circle
        span {{labels.removeGroup}}
  .vrb-group-body
    rule-builder-children(v-bind='$props')
  .vrb-group-buttons
    button.m-r-5.b-btn.is-tiny.is-info(type='button', @click='addCondition')
      .b-icon
        i.fas.fa-plus
      span {{ labels.addCondition }}
    button.b-btn.is-tiny.is-info.is-inverted(v-if='depth < maxDepth', type='button', @click='addGroup')
      .b-icon
        i.fas.fa-plus-circle
      span {{ labels.addGroup }}
</template>

<script>
import RuleBuilderGroup from '../../components/RuleBuilderGroup'
import RuleBuilderCondition from './BulmaRuleCondition.vue'

export default {
  name: 'RuleBuilderGroup',

  components: {
    RuleBuilderCondition: RuleBuilderCondition
  },

  extends: RuleBuilderGroup
}
</script>
<style lang="sass">
.vrb-condition-value-container
  @each $name, $pair in $colors
    $color: nth($pair, 1)
    $color-invert: nth($pair, 2)
    &.is-#{$name}
      .multiselect__tag, .multiselect__option--highlight
        // background: lighten($color, 10%)
        background-color: $color
        border-color: transparent
        color: $color-invert
      .multiselect__tag-icon:focus, .multiselect__tag-icon:hover
        background-color: darken($color, 10%)
        color: $color-invert
      .multiselect__tag-icon:after
        content: "\D7"
        color: $color-invert
        font-size: 14px

.vrb-group, .vrb-condition
  position: relative
  margin: 4px 0
  border-radius: 5px
  padding: 5px
  border: 1px solid #eee
  background: rgba(255, 255, 255, 0.9)

.vrb-group
  padding: 10px
  padding-bottom: 6px
  border: 1px solid #d9d9d9
  background: whitesmoke
  .vrb-group-heading
    display: flex
    align-items: center
    justify-content: space-between

  .vrb-condition
    display: flex

  .vrb-condition-form
    flex: 1
    display: flex

  .vrb-remove-condition
    align-self: center

  .vrb-condition-value-container
    flex: 1
    display: flex

  .vrb-condition-filter-container,
  .vrb-condition-operator-container,
  .vrb-condition-value-container
    margin: 0 5px 0 0

  .vrb-condition-input-container
    flex: 1
    align-self: center

  .vrb-group-buttons
    margin-left: 15px
    .vrb-basic &
      margin: 0

.vrb-children
  margin: 0
  padding: 0
  .vrb-advanced &
    padding: 0 0 0 15px
    > ::after, > ::before
      content: ""
      position: absolute
      left: -10px
      width: 10px
      height: calc(50% + 4px)
      border-color: #ccc
      border-style: solid
    >  ::before
      top: -4px
      border-width: 0 0 2px 2px
    >  ::after
      top: 50%
      border-width: 0 0 0 2px
    > :first-child::before
      top: -12px
      height: calc(50% + 14px)
    > :last-child::before
      border-radius: 0 0 0 4px
    > :last-child::after
      display: none

</style>
