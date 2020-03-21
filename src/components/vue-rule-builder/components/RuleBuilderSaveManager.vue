<template>
  <div></div>
</template>

<script>
import { deepClone } from '../utilities.js'
export default {
  props: {
    query: {
      type: Object
    }
  },
  data() {
    return {
      name: '',
      savedRules: [],
      error: null
    }
  },
  watch: {
    name() {
      this.error = ''
    }
  },
  methods: {
    save() {
      const ix = this.savedRules.findIndex(x => x.name === this.name)
      if (ix >= 0) {
        this.error = 'A rule with this name already exists.'
        return
      }
      const ruleSet = { name: this.name, query: deepClone(this.query) }
      this.savedRules.push(ruleSet)
      this.$emit('save', ruleSet)
      this.name = null
    },
    load(name) {
      const rule = this.savedRules.find(x => x.name === name)
      const val = deepClone(rule)
      this.$emit('load', val)
    },
    delete(name) {
      const ix = this.savedRules.findIndex(x => x.name === name)
      this.savedRules.splice(ix, 1)
      this.$emit('delete', name)
    }
  }
}
</script>
