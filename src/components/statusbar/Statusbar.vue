<template lang="pug">
  .v-statusbar.is-info(:class="{'un-pinned': !isPinned}")
    .logger-view(v-if="showLogs")
      .pane-toolbar
        .b-btn.is-small(@click="$log.clearLogs()")
          .b-icon.is-small
            i.far.fa-trash-alt
        .b-icon
          i.far.fa-list-alt
        .pane-title
          | Logs
        a.b-btn.is-small(@click="isPinned = !isPinned")
          .b-icon.is-small
            i.fas.fa-thumbtack
        a.b-btn.is-small(@click="showLogs = false")
          .b-icon.is-small
            i.fas.fa-times
      .logs
        .logger-message.last-message(v-for="log in $log.logs" :class="log.type")
          .v-label(:class="{'is-info': log.type === 'info', 'is-warning': log.type === 'warn', 'is-danger': log.type === 'error', 'is-success': log.type === 'done'}")
            | {{log.type.toUpperCase()}}
          .log-message
            | {{log.message}}
          .date
            | {{log.date | date}}
    .context
      .section.action.console-log(@click="showLogs = !showLogs")
        .b-icon
          i.far.fa-list-alt
        .last-message-container.m-l-4
          .logger-message.last-message(v-if="lastLog" :class="lastLog.type")
            .v-label(:class="{'is-info': lastLog.type === 'info', 'is-warning': lastLog.type === 'warn', 'is-danger': lastLog.type === 'error', 'is-success': lastLog.type === 'done'}")
              | {{lastLog.type.toUpperCase()}}
            .log-message
              | {{lastLog.message}}
            .date
              | {{lastLog.date | date}}
</template>

<script>

export default {
  data() {
    return {
      showLogs: false,
      isPinned: true
    }
  },
  computed: {
    lastLog() {
      return this.$log.logs[this.$log.logs.length - 1]
    }
  }
}
</script>

<style lang="sass" scoped>
.v-statusbar
  position: relative
  z-index: 20
  box-shadow: 0 -2px 4px rgba(0,0,0,.1)
  line-height: initial
  @each $name, $pair in $colors
    $color: nth($pair, 1)
    $color-invert: nth($pair, 2)
    &.is-#{$name}
      .context
        background-color: darken($color, 10%)
        color: $color-invert
        &:hover
          background: darken($color, 5%)
  .logger-view
    background: $white
    height: 174px
    display: grid
    box-shadow: 0px -1px 4px 0px #808080
    grid-template-columns: 1fr
    grid-template-rows: auto 1fr
    grid-template-areas: "toolbar" "logs"
    .pane-toolbar
      grid-area: toolbar
      display: flex
      flex-direction: row
      align-items: center
      padding: 6px 6px 6px 16px
      >:not(.separator)
        margin-right: 6px
      .pane-title
        flex: 100% 1 1
        width: 0
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
  .context
    display: flex
    flex-direction: row
    align-items: center
    font-size: 12px
    height: 28px
  .section
    display: flex
    flex-direction: row
    align-items: center
    padding: 0 8px
    height: 100%
    cursor: default
    &.action
      cursor: pointer
      user-select: none
  .console-log
    flex: 100% 1 1
    width: 0

    .last-message-container
      flex: 100% 1 1
      width: 0

  .logger-view
    .logs
      grid-area: logs
      padding: 0 16px
      overflow-x: hidden
      overflow-y: auto
      font-size: 12px

  .logger-message
    display: flex
    flex-direction: row
    align-items: baseline
    font-family: $family-monospace
    padding: 2px 4px
    font-size: .9em
    padding-right: 0
    > *
      flex: auto 0 0
    .log-message
      flex: 100% 1 1
      margin-left: 12px
      width: 0
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap

.v-statusbar.un-pinned
  .logger-view
    position: fixed
    left: 0
    right: 0
    bottom: 28px
    z-index: 550
</style>
