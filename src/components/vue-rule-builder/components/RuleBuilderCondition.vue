<template>
  <div></div>
</template>

<script>
import { deepClone } from '../utilities.js'

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['rule', 'index', 'filter', 'labels', 'depth', 'filters', 'operators'],
  data() {
    return {
    }
  },
  computed: {
    selectedFilter: {
      get() {
        return this.filter
      },
      set(v) {
        this.$emit('change-filter', this.index, v)
      }
    },
    operator: {
      get() {
        return this.rule.operator
      },
      set(v) {
        this.changeOperator(v, this.operator)
      }
    },
    operatorInfo() {
      return this.operators[this.operator]
    },
    isCustomComponent() {
      return this.filter.input === 'custom-component'
    }
  },

  methods: {

    changeOperator(newVal, oldVal) {
      const newOp = this.operators[newVal]
      const oldOp = this.operators[oldVal]
      if (oldOp && newOp && oldOp.multiple === newOp.multiple && oldOp.nb_inputs === newOp.nb_inputs) {
        this.updateRule(newVal, this.rule.value)
      } else {
        this.updateRule(newVal, this.getDefaultValueForOperator(newOp))
      }
    },
    getDefaultValueForOperator(op) {
      if (op.multiple || op.nb_inputs >= 2) {
        return []
      } else {
        return null
      }
    },
    remove: function () {
      this.$emit('child-deletion-requested', this.index)
    },
    updateRule(op, value) {
      const updateRule = deepClone(this.rule)
      updateRule.operator = op
      updateRule.value = value
      this.$emit('update:rule', updateRule)
    }
  }
}
</script>
