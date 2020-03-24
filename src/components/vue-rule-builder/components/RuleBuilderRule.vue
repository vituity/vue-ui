<template>
  <div></div>
</template>

<script>
import { deepClone } from '../utilities.js'

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['query', 'index', 'rule', 'labels', 'depth', 'rules', 'operators'],
  data() {
    return {

    }
  },
  computed: {
    selectedRule: {
      get() {
        return this.rule
      },
      set(v) {
        this.$emit('change-rule', this.index, v)
      }
    },
    selectedOperator() {
      return this.operators[this.query.operator]
    },
    isCustomComponent() {
      return this.rule.input === 'custom-component'
    }
  },

  mounted() {
    this.$watch(
      'query.operator',
      this.onOperatorChanged
    )
  },

  methods: {
    onOperatorChanged(newVal, oldVal) {
      console.log('op-change')
      var newOp = this.operators[newVal]
      var oldOp = this.operators[oldVal]
      if (oldOp && newOp && oldOp.multiple === newOp.multiple && oldOp.nb_inputs === newOp.nb_inputs) {
        this.updateQuery(this.query.value)
      } else {
        this.updateQuery(this.getDefaultValueForOperator(newOp))
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
    updateQuery(value) {
      const updateQuery = deepClone(this.query)
      updateQuery.value = value
      this.$emit('update:query', updateQuery)
    }
  }
}
</script>
