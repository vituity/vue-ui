<template lang="pug">
  .vue-rule-builder(:class="[isBasic ? 'vrb-basic' : 'vrb-advanced']")
    slot(v-bind="vrbProps")
      rule-builder-group(v-bind="vrbProps" :rule.sync="rule")
    slot(name="toolbar" v-bind="vrbProps")

</template>

<script>

import RuleBuilderGroup from './layouts/Bulma/BulmaRuleGroup.vue'
import { deepMerge, deepClone } from './utilities.js'
import { operators, filterTypes } from './defaults.js'

var defaultLabels = {
  matchType: 'Match Type',
  matchTypes: [
    { id: 'all', label: 'All' },
    { id: 'any', label: 'Any' }
  ],
  addCondition: 'Add Condition',
  removeCondition: '',
  addGroup: 'Add Group',
  removeGroup: 'Remove Group',
  textInputPlaceholder: 'value'
}

export default {
  name: 'VueRuleBuilder',

  components: {
    RuleBuilderGroup
  },

  props: {
    filters: {
      Array,
      required: true
    },
    labels: {
      type: Object,
      default() {
        return defaultLabels
      }
    },
    operators: {
      type: Object,
      default() {
        return operators
      }
    },
    maxDepth: {
      type: Number,
      default: 3,
      validator: function (value) {
        return value >= 1
      }
    },
    value: Object,
    isBasic: Boolean
  },

  data() {
    return {
      rule: {
        logicalOperator: this.labels.matchTypes[0].id,
        conditions: []
      },
      filterTypes
    }
  },

  computed: {
    mergedLabels() {
      return Object.assign({}, defaultLabels, this.labels)
    },
    mergedOperators() {
      return Object.assign({}, operators, this.operators)
    },

    mergedFilters() {
      var mergedFilters = []
      this.filters.forEach((filter) => {
        if (typeof this.filterTypes[filter.type] !== 'undefined') {
          const merged = deepMerge(this.filterTypes[filter.type], filter)
          mergedFilters.push(merged)
        } else {
          mergedFilters.push(filter)
        }
      })

      return mergedFilters
    },
    vrbProps() {
      return {
        index: 0,
        depth: 1,
        maxDepth: this.maxDepth,
        filterTypes: this.filterTypes,
        filters: this.mergedFilters,
        labels: this.mergedLabels,
        operators: this.mergedOperators,
        isBasic: this.isBasic
      }
    }
  },
  mounted() {
    this.validate()
    this.$watch(
      'rule',
      (newRule, oldRule) => {
        if (JSON.stringify(newRule) !== JSON.stringify(this.value)) {
          this.$emit('input', deepClone(newRule))
        }
      }, { deep: true }
    )

    this.$watch(
      'value',
      (newValue, oldValue) => {
        if (!newValue.logicalOperator || !newValue.conditions) {
          newValue = {
            logicalOperator: this.labels.matchTypes[0].id,
            conditions: []
          }
        }
        if (JSON.stringify(newValue) !== JSON.stringify(this.rule)) {
          this.rule = deepClone(newValue)
        }
      }, { deep: true }
    )

    if (typeof this.$options.propsData.value !== 'undefined') {
      this.rule = Object.assign(this.rule, this.$options.propsData.value)
    }
  },
  methods: {
    validate() {
      this.mergedFilters.forEach(r => {
        r.operators.forEach(o => {
          if (!this.mergedOperators[o]) {
            // eslint-disable-next-line no-console
            console.error(`Invalid operator '${o}' found in filter`, r)
          }
        })
      })
    }
  }
}
</script>
<style lang="sass">
@import url("~vue-multiselect/dist/vue-multiselect.min.css")
.vue-rule-builder
  .multiselect__tag
    // font-size: 12px
    margin: 0 3px 3px 0 !important
  .multiselect__placeholder
    font-size: 12px
  .multiselect__select
    height: 32px
    padding: 0
  .multiselect__tags
    //min-height: 34px
  .multiselect__tag
    // font-size: 12px
    margin: 0 3px 3px 0 !important
  .multiselect__placeholder
    font-size: 12px
  .multiselect, .multiselect__input, .multiselect__single
    font-size: .9rem
  .multiselect
    min-height: 34px
  .multiselect__option
    padding: 5px
    min-height: 26px
    line-height: .8rem
    font-size: .8rem

  .multiselect--active
    .multiselect__input
      width: 100px !important
</style>
