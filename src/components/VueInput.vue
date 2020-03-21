<template lang="pug">
.v-input(
    :class="[\
      `type-${type}`,\
      {\
      disabled: finalDisabled,\
      focused,\
      'show-suggestion': showSuggestion,\
      [`is-${status}`]: status,\
      }]",
      @click='focus()'
  )
  .v-input--content
    .v-loading.small.left(v-if="loadingLeft")
    .b-icon.input-icon.left(v-else-if="iconLeft")
      i(:class="iconLeft")
    slot(name="left")
    //.b-icon.is-large.has-text-danger.input-icon.left(icon="fas fa-times")
    .v-input--wrapper
      component(
          :is="type === 'textarea' ? type : 'input'"
          ref="input"
          class="input"
          :type="type"
          :value.prop="valueModel"
          :placeholder="placeholder"
          :disabled="finalDisabled"
          v-bind="$attrs"
          v-on="$listeners"
          @input="valueModel = $event.currentTarget.value"
          @focus="onFocus"
          @blur="onBlur"
          @keydown.tab="onKeyTab"
      )
      input.input.suggestion(v-if="showSuggestion" :value="suggestion" disabled)
    slot(name="right")
    .b-icon.input-icon.right(v-if="iconRight")
      i(:class="iconRight")
    .border
</template>

<script>
import DisabledChild from '../mixins/DisabledChild'
export default {
  name: 'VueInput',
  inheritAttrs: false,
  mixins: [
    DisabledChild
  ],
  inject: {
    VFormField: { default: null }
  },
  model: {
    event: 'update'
  },
  props: {
    iconLeft: {
      type: String,
      default: null
    },
    iconRight: {
      type: String,
      default: null
    },
    loadingLeft: {
      type: Boolean,
      default: false
    },
    loadingRight: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: undefined
    },
    selectAll: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: undefined
    },
    suggestion: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {}
  },
  data() {
    return {
      focused: false
    }
  },
  computed: {
    showSuggestion() {
      return this.suggestion !== null && this.suggestion !== this.value && this.focused && this.value
    },
    valueModel: {
      get() { return this.value },
      set(value) { this.$emit('update', value) }
    }
  },
  watch: {
    focused: {
      handler(value) {
        if (this.VueFormField) {
          this.VueFormField.data.focused = value
        }
      },
      immediate: true
    },
    status: {
      handler(value) {
        if (this.VueFormField) {
          this.VueFormField.data.status = value
        }
      },
      immediate: true
    }
  },
  methods: {
    focus() {
      const input = this.$refs.input
      input.focus()
      if (this.selectAll) {
        input.setSelectionRange(0, input.value.length)
      }
    },
    onBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    },
    onFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    onKeyTab(event) {
      if (this.showSuggestion) {
        this.valueModel = this.suggestion
        event.preventDefault()
        event.stopPropagation()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$lightened: $grey

.v-input
  display: inline-block
  vertical-align: middle
  box-sizing: border-box
  width: auto
  min-width: 200px
  @each $name, $pair in $colors
    $color: nth($pair, 1)
    $color-invert: nth($pair, 2)
    &.is-#{$name}
      > .v-input--content
        > .border
          background: $color
      &.focused
        > .v-input--content
          > .v-loading-indicator
            .animation
              border-right-color: $color
              border-bottom-color: $color
          > .input-icon
            color: rgba($color, .8)
  >.v-input--content
    +h-box
    +box-center
    padding: 0 10px
    border: 1px solid rgba($primary,.2)
    color: #2c3e50
    border-radius: 3px
    transition: background .3s
    position: relative
    > .v-input--wrapper
      position: relative
      width: 0
      flex: auto 1 1
      > .input
        position: relative
        z-index: 1
        font-family: inherit
        font-size: 14px
        line-height: 14px
        color: #2c3e50
        padding: 0
        width: 100%
        display: block
        border: none
        background: transparent
        &:not(textarea)
          height: 30px
        &::placeholder
          color: $lightened
          .vue-ui-dark-mode &
            color: red
        // Disable noisy browser styles
            outline: none
        &::-moz-focus-inner
          border: 0
      > textarea.input
        padding: 8px 10px
        resize: vertical
        min-height: 30px
        box-sizing: border-box
        line-height: 18px
      > .suggestion
        position: absolute
        z-index: 0
        top: 0
        left: 0
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
        color: $lightened
        pointer-events: none
    > .input-icon
      color: $lightened
      transition: color .3
      &.left
        margin-right: 6px
      &.right
        margin-left: 6px
    > .vue-ui-loading-indicator
      &.left
        margin-right: 8px
      &.right
        margin-left: 8px
      .animation
        border-right-color: $lightened
        border-bottom-color: $lightened
    >.border
      position: absolute
      bottom: -1px
      left: 30%
      right: 30%
      opacity: 0
      background-color: $primary
      height: 2px
      transition: left .15s, right .15s, opacity .15s
  &.type-textarea
    > .v-input--content
      padding: 0
  &:not(.flat)
    > .v-input--content
      background: $white
      .vue-ui-dark-mode &
        background: red
  &.show-suggestion
    > .v-input--content > .input-wrapper > .input
      &::placeholder
        color: transparent
  &.focused
    &:not(.flat)
      > .v-input--content
        > .border
          left: 0
          right: 0
          opacity: 1
      &.round
        > .v-input--content > .border
          display: none
  &.flat
    > .v-input--content
      border-color: transparent
      > .border
        display: none
  &.big
    > .v-input--content
      padding: 0 14px
      > .input-wrapper
        > .input
          font-size: 16px
          &:not(textarea)
            height: 42px
        > textarea.input
          padding: 14px 0
      > .input-icon
        width: 20px
        height: 20px
        &.left
          margin-right: 10px
        &.right
          margin-left: 10px
  &.round
    > .v-input--content
      border-radius: 17px
    // Big button
    &.big
      > .v-input--content
        border-radius: 22px
  &:not(.disabled)
    cursor: text
  &.disabled
    opacity: .5

input:focus
  outline-style: none
</style>
