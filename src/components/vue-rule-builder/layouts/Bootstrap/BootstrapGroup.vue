<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="vrb-group card" :class="'depth-' + depth.toString()">
    <div class="vrb-group-heading card-header">
      <div class="match-type-container form-inline">
        <!-- <label class="mr-2" for="vrb-match-type">{{ labels.matchType }}</label> -->

        <select id="vrb-match-type" v-model="query.logicalOperator" class="form-control">
          <option
            v-for="label in labels.matchTypes"
            :key="label.id"
            :value="label.id"
          >if {{ label.label }} are true</option>
        </select>

        <button type="button" class="btn btn-secondary mr-2" @click="addRule">{{ labels.addRule }}</button>

        <button
          v-if="depth < maxDepth"
          type="button"
          class="btn btn-secondary"
          @click="addGroup"
        >{{ labels.addGroup }}</button>

        <button
          v-if="depth > 1"
          type="button"
          class="close ml-auto"
          @click="remove"
          v-html="labels.removeGroup"
        ></button>
      </div>
    </div>

    <div class="vrb-group-body card-body">
      <!-- <select v-model="selectedRule" class="form-control mr-2">
            <option v-for="rule in rules" :key="rule.field" :value="rule">{{ rule.label }}</option>
      </select>-->
      <rule-builder-children v-bind="$props"></rule-builder-children>
    </div>
  </div>
</template>

<script>
import RuleBuilderGroup from '../../components/RuleBuilderGroup'
import RuleBuilderRule from './BootstrapRule.vue'

export default {
  name: 'RuleBuilderGroup',

  components: {
    // eslint-disable-next-line vue/no-unused-components
    RuleBuilderRule: RuleBuilderRule
  },

  extends: RuleBuilderGroup
}
</script>

<style scoped>
.vue-rule-builder .vrb-group .rule-actions {
  margin-bottom: 20px;
}

.vue-rule-builder .vrb-rule {
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #f5f5f5;
  border-color: #ddd;
  padding: 15px;
}

.vue-rule-builder .vrb-group.depth-1 .vrb-rule,
.vue-rule-builder .vrb-group.depth-2 {
  border-left: 2px solid #8bc34a;
}

.vue-rule-builder .vrb-group.depth-2 .vrb-rule,
.vue-rule-builder .vrb-group.depth-3 {
  border-left: 2px solid #00bcd4;
}

.vue-rule-builder .vrb-group.depth-3 .vrb-rule,
.vue-rule-builder .vrb-group.depth-4 {
  border-left: 2px solid #ff5722;
}

.vue-rule-builder .close {
  opacity: 1;
  color: rgb(150, 150, 150);
}

@media (min-width: 768px) {
  .vue-rule-builder .vrb-rule.form-inline .form-group {
    display: block;
  }
}
</style>
