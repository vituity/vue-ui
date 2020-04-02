<template>
  <div></div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
import { deepClone } from '../utilities.js'
import RuleBuilderChildren from './RuleBuilderChildren.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    RuleBuilderChildren
  },

  props: {
    filterTypes: Object,
    rule: Object,
    filters: Array,
    index: Number,
    maxDepth: Number,
    depth: Number,
    labels: Object,
    operators: Object,
    isBasic: Boolean
  },

  data() {
    return {
    }
  },

  methods: {
    filterById(field) {
      var filter = null

      this.filters.forEach(function (value) {
        if (value.field === field) {
          filter = value
          return false
        }
      })

      return filter
    },
    changeFilter(index, newFilter) {
      const updatedRule = deepClone(this.rule)

      const child = {
        field: newFilter.field,
        operator: newFilter.operators[0],
        value: null
      }

      const op = this.operators[child.operator]
      if (op.multiple || op.nb_inputs >= 2) {
        child.value = []
      }

      updatedRule.conditions[index] = child
      this.$emit('update:rule', updatedRule)
    },
    addCondition() {
      const updatedRule = deepClone(this.rule)
      const firstFilter = this.filters[0]
      const child = {
        field: firstFilter.field,
        operator: firstFilter.operators[0],
        value: null
      }
      const op = this.operators[child.operator]
      if (op.multiple || op.nb_inputs >= 2) {
        child.value = []
      }
      const groupIndex = updatedRule.conditions.findIndex(x => Array.isArray(x.conditions))
      if (groupIndex < 0) {
        updatedRule.conditions.push(child)
      } else {
        updatedRule.conditions.splice(groupIndex, 0, child)
      }
      this.$emit('update:rule', updatedRule)
    },

    addGroup() {
      const updatedRule = deepClone(this.rule)
      if (this.depth < this.maxDepth) {
        updatedRule.conditions.push({
          logicalOperator: this.labels.matchTypes[0].id,
          conditions: []
        })
        this.$emit('update:rule', updatedRule)
      }
    },

    remove() {
      this.$emit('child-deletion-requested', this.index)
    },

    removeChild(index) {
      const updatedRule = deepClone(this.rule)
      updatedRule.conditions.splice(index, 1)
      this.$emit('update:rule', updatedRule)
    }
  }
}
</script>
