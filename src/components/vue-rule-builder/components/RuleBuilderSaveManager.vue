<template>
  <div></div>
</template>

<script>
import { deepClone } from '../utilities.js'
export default {
  props: {
    rule: {
      type: Object,
      required: true
    },
    namespace: {
      type: String,
      required: true,
      validator: function (val) {
        var result = val.split('.').every(x => /^[a-z][a-z0-9-]{2,}$/i.test(x))
        if (!result) {
          // eslint-disable-next-line no-console
          console.error('Namespace must start with letter and only include letters, numbers and hypen')
        }
        return result
      }
    },
    savedRules: {
      type: Array
    }
  },
  data() {
    return {
      name: '',
      error: null
    }
  },
  watch: {
    name() {
      this.error = ''
    }
  },
  methods: {
    saveRule() {
      const name = this.name.trim()
      if (name === '' || name === null) {
        this.error = 'Name is required'
        return
      }
      const ix = this.savedRules.findIndex(x => x.name === name)
      if (ix >= 0) {
        this.error = 'A rule with this name already exists.'
        return
      }
      const ruleSet = { name: name, rule: deepClone(this.rule) }
      this.$emit('save', ruleSet)
      this.name = null
    },
    loadRule(rule) {
      const val = deepClone(rule)
      this.$emit('load', val)
    },
    deleteRule(rule) {
      this.$emit('delete', rule)
    }
  }
}
</script>
