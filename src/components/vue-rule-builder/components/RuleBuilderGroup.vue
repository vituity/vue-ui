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
    query: Object,
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
    changeRule(index, newRule) {
      console.log('change-rule')
      const updatedQuery = deepClone(this.query)

      const child = {
        type: 'rule-builder-rule',
        query: {
          field: newRule.field,
          operator: newRule.operators[0],
          value: null
        }
      }

      const op = this.operators[child.query.operator]
      if (op.multiple || op.nb_inputs >= 2) {
        child.query.value = []
      }

      updatedQuery.children[index] = child
      this.$emit('update:query', updatedQuery)
    },
    addRule() {
      console.log('add-rule')
      const updatedQuery = deepClone(this.query)
      const firstFilter = this.filters[0]
      const child = {
        type: 'rule-builder-rule',
        query: {
          field: firstFilter.field,
          operator: firstFilter.operators[0],
          value: null
        }
      }
      const op = this.operators[child.query.operator]
      if (op.multiple || op.nb_inputs >= 2) {
        child.query.value = []
      }
      const groupIndex = updatedQuery.children.findIndex(x => x.type === 'rule-builder-group')
      if (groupIndex < 0) {
        updatedQuery.children.push(child)
      } else {
        updatedQuery.children.splice(groupIndex, 0, child)
      }
      this.$emit('update:query', updatedQuery)
    },

    addGroup() {
      console.log('add-group')
      const updatedQuery = deepClone(this.query)
      if (this.depth < this.maxDepth) {
        updatedQuery.children.push({
          type: 'rule-builder-group',
          query: {
            logicalOperator: this.labels.matchTypes[0].id,
            children: []
          }
        })
        this.$emit('update:query', updatedQuery)
      }
    },

    remove() {
      console.log('remove')
      this.$emit('child-deletion-requested', this.index)
    },

    removeChild(index) {
      console.log('remove-child')
      const updatedQuery = deepClone(this.query)
      updatedQuery.children.splice(index, 1)
      this.$emit('update:query', updatedQuery)
    }
  }
}
</script>
