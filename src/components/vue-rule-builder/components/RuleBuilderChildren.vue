<template>
  <div class="vrb-children">
    <component
      :is="getComponent(child)"
      v-for="(child, index) in rule.conditions"
      :key="getKey(child, index)"
      :rule.sync="rule.conditions[index]"
      :filterTypes="filterTypes"
      :filters="filters"
      :filter="$parent.filterById(child.field)"
      :index="index"
      :max-depth="maxDepth"
      :depth="depth + 1"
      :labels="labels"
      :operators="operators"
      @child-deletion-requested="$parent.removeChild"
      @change-filter="$parent.changeFilter"
    ></component>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['rule', 'filterTypes', 'filters', 'maxDepth', 'labels', 'operators', 'depth'],

  data() {
    return {
      ruleGroupComponent: null,
      ruleConditionComponent: null
    }
  },
  mounted() {
    this.ruleGroupComponent = this.$parent.$options.components.RuleBuilderGroup
    this.ruleConditionComponent = this.$parent.$options.components.RuleBuilderCondition
  },

  methods: {
    getComponent(child) {
      return Array.isArray(child.conditions)
        ? this.ruleGroupComponent
        : this.ruleConditionComponent
    },
    getKey(child, index) {
      return (child.field || 'group') + '_' + index
    }
  }
}
</script>
