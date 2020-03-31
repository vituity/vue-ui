<template lang="pug">
.vrb-condition
  .vrb-condition-form
    .vrb-condition-filter-container
      // Field Selection
      .b-control
        .b-select
          select(v-model='selectedFilter')
            option(v-for='filter in filters', :key='filter.field', :value='filter') {{ filter.label }}
    .vrb-condition-operator-container
      // Operator Selection
      .b-control(v-if="typeof filter.operators !== 'undefined' && filter.operators.length > 1")
        .b-select
          select(v-model='operator')
            option(v-for='op in filter.operators', :key='op', :value='op') {{ op.replace(/_/g,' ') }}
    .vrb-condition-value-container.is-info
      rule-builder-condition-value(
        v-if="operatorInfo.nb_inputs === 1"
        v-model="rule.value"
        :filter="filter"
        :operator="operatorInfo"
        :rule="rule"
        :key="$vnode.key"
      )
      // 2 inputs needed
      template(v-else-if="operatorInfo.nb_inputs > 1 && Array.isArray(rule.value)")
        rule-builder-condition-value(
          v-model="rule.value[0]"
          :filter="filter"
          :operator="operatorInfo"
          :rule="rule"
          :key="$vnode.key"
        )
        span.m-h-10(style="align-self: center") And
        rule-builder-condition-value(
          v-model="rule.value[1]"
          :filter="filter"
          :operator="operatorInfo"
          :rule="rule"
          :key="$vnode.key+1"
        )

  // Remove condition button
  .vrb-remove-condition.b-delete(type='button', @click='remove' )

</template>

<script>
import RuleBuilderCondition from '../../components/RuleBuilderCondition'
import RuleBuilderConditionValue from './BulmaRuleConditionValue.vue'
export default {
  components: {
    RuleBuilderConditionValue
  },
  extends: RuleBuilderCondition
}
</script>
<style scoped>
/* .vrb-custom-component-wrap {
  flex-grow: 1;
  padding-right: 15px;
} */
</style>
