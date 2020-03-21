<template lang="pug">
  .v-statusbar.is-info
    .logger-view(v-if="showLogs")
      .pane-toolbar
        .b-icon
          i.far.fa-list-alt
        .pane-title
          | Logs
        a.b-btn.is-small(@click="$log.clearLogs()")
          .b-icon.is-small
            i.far.fa-trash-alt
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
      showLogs: false
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

</style>
