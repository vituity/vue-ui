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
    type: {
      type: String,
      default: 'rule-builder-group'
    },
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
      // selectedRule: null
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
      console.log('change-filter')
      const updatedRule = deepClone(this.rule)

      const child = {
        type: 'rule-builder-condition',
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
      console.log('add-condition')
      const updatedRule = deepClone(this.rule)
      const firstFilter = this.filters[0]
      const child = {
        type: 'rule-builder-condition',
        field: firstFilter.field,
        operator: firstFilter.operators[0],
        value: null
      }
      const op = this.operators[child.operator]
      if (op.multiple || op.nb_inputs >= 2) {
        child.value = []
      }
      const groupIndex = updatedRule.conditions.findIndex(x => x.type === 'rule-builder-group')
      if (groupIndex < 0) {
        updatedRule.conditions.push(child)
      } else {
        updatedRule.conditions.splice(groupIndex, 0, child)
      }
      this.$emit('update:rule', updatedRule)
    },

    addGroup() {
      console.log('add-group')
      const updatedRule = deepClone(this.rule)
      if (this.depth < this.maxDepth) {
        updatedRule.conditions.push({
          type: 'rule-builder-group',

          logicalOperator: this.labels.matchTypes[0].id,
          conditions: []

        })
        this.$emit('update:rule', updatedRule)
      }
    },

    remove() {
      console.log('remove')
      this.$emit('child-deletion-requested', this.index)
    },

    removeChild(index) {
      console.log('remove-child')
      const updatedRule = deepClone(this.rule)
      updatedRule.conditions.splice(index, 1)
      this.$emit('update:rule', updatedRule)
    }
  }
}
</script>
