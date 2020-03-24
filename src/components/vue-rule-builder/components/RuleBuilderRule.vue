<template>
  <div></div>
</template>

<script>
import { deepClone } from '../utilities.js'

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['query', 'index', 'filter', 'labels', 'depth', 'filters', 'operators'],
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
        return this.query.operator
      },
      set(v) {
        this.changeOperator(v, this.operator)
      }
    },
    selectedOperator() {
      return this.operators[this.operator]
    },
    isCustomComponent() {
      return this.filter.input === 'custom-component'
    }
  },

  methods: {

    changeOperator(newVal, oldVal) {
      console.log('change-operator', newVal, oldVal)
      const newOp = this.operators[newVal]
      const oldOp = this.operators[oldVal]
      if (oldOp && newOp && oldOp.multiple === newOp.multiple && oldOp.nb_inputs === newOp.nb_inputs) {
        this.updateQuery(newVal, this.query.value)
      } else {
        this.updateQuery(newVal, this.getDefaultValueForOperator(newOp))
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
    updateQuery(op, value) {
      const updateQuery = deepClone(this.query)
      updateQuery.operator = op
      updateQuery.value = value
      this.$emit('update:query', updateQuery)
    }
  }
}
</script>
