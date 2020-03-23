<template>
  <div></div>
</template>

<script>
import { deepClone } from '../utilities.js'
export default {
  props: {
    query: {
      type: Object,
      required: true
    },
    namespace: {
      type: String,
      required: true,
      validator: function (val) {
        var result = val.split('.').every(x => /^[a-z][a-z0-9-]{2,}$/i.test(x))
        if (!result) {
          console.error('Namespace must start with letter and only include letters, numbers and hypen')
        }
        return result
      }
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
      const ruleSet = { name: name, query: deepClone(this.query) }
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
