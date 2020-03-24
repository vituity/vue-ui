<template lang="pug">
.vrb-rule
  .vrb-rule-form
    .vrb-rule-filter-container
      // Field Selection
      .b-control
        .b-select
          select(v-model='selectedRule')
            option(v-for='rule in rules', :key='rule.field', :value='rule') {{ rule.label }}
    .vrb-rule-operator-container
      // Operator Selection
      .b-control(v-if="typeof rule.operators !== 'undefined' && rule.operators.length > 1")
        .b-select
          select(v-model='query.operator')
            option(v-for='operator in rule.operators', :key='operator', :value='operator') {{ operator }}
    .vrb-rule-value-container.is-info
      rule-builder-rule-value(
        v-if="selectedOperator.nb_inputs === 1"
        v-model="query.value"
        :rule="rule"
        :operator="selectedOperator"
        :query="query"
        :key="$vnode.key"
      )
      // 2 inputs needed
      template(v-else-if="selectedOperator.nb_inputs > 1 && Array.isArray(query.value)")
        rule-builder-rule-value(
          v-model="query.value[0]"
          :rule="rule"
          :operator="selectedOperator"
          :query="query"
          :key="$vnode.key"
        )
        span.m-h-10(style="align-self: center") And
        rule-builder-rule-value(
          v-model="query.value[1]"
          :rule="rule"
          :operator="selectedOperator"
          :query="query"
          :key="$vnode.key+1"
        )

  // Remove rule button
  .vrb-remove-rule.b-delete(type='button', @click='remove' )

</template>

<script>
import RuleBuilderRule from '../../components/RuleBuilderRule'
import RuleBuilderRuleValue from './DefaultRuleValue.vue'
export default {
  components: {
    RuleBuilderRuleValue
  },
  extends: RuleBuilderRule
}
</script>
<style scoped>
/* .vrb-custom-component-wrap {
  flex-grow: 1;
  padding-right: 15px;
} */
</style>
