<template>
  <div class="vrb-children">
    <component
      :is="getComponent(child.type)"
      v-for="(child, index) in query.children"
      :key="getKey(child, index)"
      :type="child.type"
      :query.sync="query.children[index]"
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
  props: ['query', 'filterTypes', 'filters', 'maxDepth', 'labels', 'operators', 'depth'],

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
      return (child.field || child.type) + '_' + index
    }
  }
}
</script>
