<template>
  <div class="vrb-children">
    <component
      :is="getComponent(child.type)"
      v-for="(child, index) in query.children"
      :key="getKey(child, index)"
      :type="child.type"
      :query.sync="child.query"
      :rule-types="ruleTypes"
      :rules="rules"
      :rule="$parent.ruleById(child.query.rule)"
      :index="index"
      :max-depth="maxDepth"
      :depth="depth + 1"
      :labels="labels"
      :operators="operators"
      @child-deletion-requested="$parent.removeChild"
      @change-rule="$parent.changeRule"
    ></component>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['query', 'ruleTypes', 'rules', 'maxDepth', 'labels', 'operators', 'depth'],

  data() {
    return {
      groupComponent: null,
      ruleComponent: null
    }
  },
  mounted() {
    this.groupComponent = this.$parent.$options.components.RuleBuilderGroup
    this.ruleComponent = this.$parent.$options.components.RuleBuilderRule
  },

  methods: {
    getComponent(type) {
      return type === 'rule-builder-group'
        ? this.groupComponent
        : this.ruleComponent
    },
    getKey(child, index) {
      return (child.query.rule || child.type) + '_' + index
    }
  }
}
</script>
