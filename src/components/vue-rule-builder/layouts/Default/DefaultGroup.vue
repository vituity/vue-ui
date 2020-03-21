<template lang="pug">
.vrb-group.vrb-group-default.rules-group-container(:class="'depth-' + depth.toString()")
  .vrb-group-heading.rules-group-header(v-if="!isBasic")
    .vrb-match-type
      .b-select
        select.b-select.is-small(v-model='query.logicalOperator')
          option(v-for='label in labels.matchTypes', :key='label.id', :value='label.id') {{ label.label }} are true
    .vrb-group-heading-buttons
      button.b-btn.is-tiny(v-if="depth > 1", type='button', @click='remove')
        .b-icon
          i.fas.fa-minus-circle
        span {{labels.removeGroup}}
  .vrb-group-body.rules-group-body
    rule-builder-children(v-bind='$props')
  .vrb-group-buttons
    button.m-r-5.b-btn.is-tiny.is-info(type='button', @click='addRule')
      .b-icon
        i.fas.fa-plus
      span {{ labels.addRule }}
    button.b-btn.is-tiny.is-info.is-inverted(v-if='depth < maxDepth', type='button', @click='addGroup')
      .b-icon
        i.fas.fa-plus-circle
      span {{ labels.addGroup }}
</template>

<script>
import RuleBuilderGroup from '../../components/RuleBuilderGroup'
import RuleBuilderRule from './DefaultRule.vue'

export default {
  name: 'RuleBuilderGroup',

  components: {
    RuleBuilderRule: RuleBuilderRule
  },

  extends: RuleBuilderGroup
}
</script>
<style lang="sass">
.rule-value-container
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
.vrb-group-default
  .vrb-group-heading
    display: flex
    align-items: center
    justify-content: space-between

.vrb-rule
  display: flex

.vrb-rule-form
  flex: 1
  display: flex

.vrb-remove-rule
  align-self: center

.rule-value-container
  flex: 1
  display: flex

.rule-input-container
  flex: 1
  align-self: center

.vrb-group-buttons
  margin-left: 15px
  .vrb-basic &
    margin: 0

.vrb-children
  margin: 0
  padding: 0 0 0 15px
  .vrb-basic &
    padding: 0

.vrb-children > ::after,
.vrb-children > ::before
  content: ""
  position: absolute
  left: -10px
  width: 10px
  height: calc(50% + 4px)
  border-color: #ccc
  border-style: solid

.vrb-children > ::before
  top: -4px
  border-width: 0 0 2px 2px

.vrb-children > ::after
  top: 50%
  border-width: 0 0 0 2px

.vrb-children > :first-child::before
  top: -12px
  height: calc(50% + 14px)

.vrb-children > :last-child::before
  border-radius: 0 0 0 4px

.vrb-children > :last-child::after
  display: none

</style>

<style>
.rules-builder .rule-container,
.rules-builder .rule-placeholder,
.rules-builder .rules-group-container {
  position: relative;
  margin: 4px 0;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #eee;
  background: rgba(255, 255, 255, 0.9);
}

.rules-builder .drag-handle,
.rules-builder .error-container,
.rules-builder .rule-container .rule-filter-container,
.rules-builder .rule-container .rule-operator-container,
.rules-builder .rule-container .rule-value-container {
  margin: 0 5px 0 0;
  vertical-align: middle;
}

.rules-builder .rules-group-container {
  padding: 10px;
  padding-bottom: 6px;
  border: 1px solid #d9d9d9;
  background: whitesmoke;
}

.rules-builder .rules-group-header {
  margin-bottom: 10px;
}

.rules-builder .rules-group-header .group-conditions .btn.readonly:not(.active),
.rules-builder .rules-group-header .group-conditions input[name$="_cond"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

.rules-builder .rules-group-header .group-conditions .btn.readonly {
  border-radius: 3px;
}

.rules-builder .rule-value-container {
  border-left: 1px solid #ddd;
  padding-left: 5px;
}

.rules-builder .rule-value-container label {
  margin-bottom: 0;
  font-weight: 400;
}

.rules-builder .rule-value-container label.block {
  display: block;
}

.rules-builder .error-container {
  display: none;
  cursor: help;
  color: red;
}

.rules-builder .has-error {
  background-color: #fdd;
  border-color: #f99;
}

.rules-builder .has-error .error-container {
  display: inline-block !important;
}
</style>
