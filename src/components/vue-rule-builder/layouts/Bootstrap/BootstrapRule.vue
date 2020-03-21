<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="vrb-rule card">
    <div class="form-inline">
      <!-- <label class="mr-5">{{ rule.label }}</label> -->
      <select v-model="selectedRule" class="form-control mr-2">
        <option v-for="rule in rules" :key="rule.field" :value="rule">{{ rule.label }}</option>
      </select>
      <!-- List of operands (optional) -->
      <!-- <select
        v-if="typeof rule.operands !== 'undefined'"
        v-model="query.operand"
        class="form-control mr-2"
      >
        <option v-for="operand in rule.operands" :key="operand">{{ operand }}</option>
      </select>-->

      <!-- List of operators (e.g. =, !=, >, <) -->
      <select
        v-if="typeof rule.operators !== 'undefined' && rule.operators.length > 1"
        v-model="query.operator"
        class="form-control mr-2"
      >
        <option v-for="operator in rule.operators" :key="operator" :value="operator">{{ operator }}</option>
      </select>

      <!-- Basic text input -->
      <input
        v-if="rule.inputType === 'text'"
        v-model="query.value"
        class="form-control"
        type="text"
        :placeholder="labels.textInputPlaceholder"
      />

      <!-- Basic number input -->
      <input
        v-if="rule.inputType === 'number'"
        v-model="query.value"
        class="form-control"
        type="number"
      />

      <!-- Datepicker -->
      <input
        v-if="rule.inputType === 'date'"
        v-model="query.value"
        class="form-control"
        type="date"
      />

      <!-- Custom component input -->
      <div v-if="isCustomComponent" class="vrb-custom-component-wrap">
        <component
          :is="rule.component"
          :value="query.value"
          @input="updateQuery"
          :options="rule.options"
        />
      </div>

      <!-- Checkbox input -->
      <template v-if="rule.inputType === 'checkbox'">
        <div
          v-for="choice in rule.choices"
          :key="choice.value"
          class="form-check form-check-inline"
        >
          <input
            :id="'depth' + depth + '-' + rule.field + '-' + index + '-' + choice.value"
            v-model="query.value"
            type="checkbox"
            :value="choice.value"
            class="form-check-input"
          />
          <label
            class="form-check-label"
            :for="'depth' + depth + '-' + rule.field + '-' + index + '-' + choice.value"
          >{{ choice.label }}</label>
        </div>
      </template>

      <!-- Radio input -->
      <template v-if="rule.inputType === 'radio'">
        <div
          v-for="choice in rule.choices"
          :key="choice.value"
          class="form-check form-check-inline"
        >
          <input
            :id="'depth' + depth + '-' + rule.field + '-' + index + '-' + choice.value"
            v-model="query.value"
            :name="'depth' + depth + '-' + rule.field + '-' + index"
            type="radio"
            :value="choice.value"
            class="form-check-input"
          />
          <label
            class="form-check-label"
            :for="'depth' + depth + '-' + rule.field + '-' + index + '-' + choice.value"
          >{{ choice.label }}</label>
        </div>
      </template>

      <!-- Select without groups -->
      <select
        v-if="rule.inputType === 'select' && !hasOptionGroups"
        v-model="query.value"
        class="form-control"
        :multiple="rule.type === 'multi-select'"
      >
        <option
          v-for="option in selectOptions"
          :key="option.value"
          :value="option.value"
        >{{ option.label }}</option>
      </select>

      <!-- Select with groups -->
      <select
        v-if="rule.inputType === 'select' && hasOptionGroups"
        v-model="query.value"
        class="form-control"
        :multiple="rule.type === 'multi-select'"
      >
        <optgroup
          v-for="(option, option_key) in selectOptions"
          :key="option_key"
          :label="option_key"
        >
          <option
            v-for="sub_option in option"
            :key="sub_option.value"
            :value="sub_option.value"
          >{{ sub_option.label }}</option>
        </optgroup>
      </select>

      <!-- Remove rule button -->
      <button type="button" class="close ml-auto" @click="remove" v-html="labels.removeRule"></button>
    </div>
  </div>
</template>

<script>
import RuleBuilderRule from '../../components/RuleBuilderRule'

export default {
  extends: RuleBuilderRule
}
</script>
<style scoped>
.vrb-custom-component-wrap {
  flex-grow: 1;
  padding-right: 15px;
}
</style>
