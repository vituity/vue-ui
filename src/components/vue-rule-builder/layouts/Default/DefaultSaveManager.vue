<template lang="pug">
.vrb-save-manager
  form.m-b-10.vrb-save-from(@submit.prevent="save")
    .b-field.is-grouped
      .b-control
        input.b-input(placeholder="Name" v-model="name" style="width: 350px")
        p.b-help.is-danger(v-if="error")
          span {{ error }}
      .b-control
        button.b-btn.is-success
          span Save Query
  .vrb-saved-rules(style="width: fit-content")
    .vrb-saved-item.m-b-5.is-flex.align-items-center(v-for="rule in savedRules")
      .b-btn.is-small.is-info(@click='load(rule)')
        .b-icon
          i.fas.fa-upload
        span Load
      span.m-h-10 {{ rule.name }}
      .is-flex-spacer
      .b-btn.is-small.is-danger.is-light(@click='load(rule)')
        .b-icon
          i.fas.fa-trash
</template>

<script>
import RuleBuilderRule from '../../components/RuleBuilderSaveManager'

export default {
  extends: RuleBuilderRule
}
</script>
<style scoped>
</style>
