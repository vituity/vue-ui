export let logger
export default {
  install(Vue) {
    logger = new Vue({
      data() {
        return {
          logs: []
        }
      },
      methods: {
        info(message) {
          // store.commit('ADD_LOG', { type: 'info', message })
          this.addToLog('info', message)
        },
        warn(message) {
          // store.commit('ADD_LOG', { type: 'warn', message })
          this.addToLog('warn', message)
        },
        error(message) {
          // store.commit('ADD_LOG', { type: 'error', message })
          this.addToLog('error', message)
        },
        done(message) {
          // store.commit('ADD_LOG', { type: 'done', message })
          this.addToLog('done', message)
        },
        clearLogs() {
          // store.commit('CLEAR_LOGS')
          this.logs = []
        },
        addToLog(type, message) {
          this.logs.push({ date: Date.now(), type, message })
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$log', {
      get: () => logger
    })
  }
}
