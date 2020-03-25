<template lang="pug">
  .vrb-condition-input-container
    // Unrestricted input
    template(v-if="filter.control === 'input'")
      .b-control(v-if="!operator.multiple")
        input.b-input(v-model="value1" v-bind="filter.props")

      .vrb-custom-component-wrap(v-else-if="operator.multiple")
        tag-select(v-model='value1' v-bind="filter.props" :multiple="operator.multiple")

    // Restricted input
    template(v-if="filter.control === 'cleave'")
      .b-control(v-if="!operator.multiple")
        Cleave.b-input(v-model="value1" :options="filter.props")

      .vrb-custom-component-wrap(v-else-if="operator.multiple")
        tag-select(v-model='value1' v-bind="filter.props" :useCleave="true" :multiple="operator.multiple")

    // Multi-Select Input (lookup)
    template(v-else-if="filter.control === 'multi-select'")
      .vrb-custom-component-wrap
        multi-select(v-model='value1' v-bind="filter.props" :multiple="operator.multiple")

    // Tag-Select
    template(v-else-if="filter.control === 'tag-select'")
      .vrb-custom-component-wrap
        tag-select(v-model='value1' v-bind="filter.props" :multiple="operator.multiple")

    // Boolean
    template(v-else-if="filter.control === 'radio'")
      .b-control
        label.b-radio(v-for="choice in filter.props.options")
          input(
            :id="'depth' + depth + '-' + filter.field + '-' + index + '-' + choice.value"
            v-model="value1"
            :name="'depth' + depth + '-' + filter.field + '-' + index"
            type="radio"
            :value="choice.value"
            class="form-check-input"
            )
          | {{ choice.label }}

</template>

<script>
import Cleave from '../../extras/CleaveInput'

export default {

  props: ['value', 'filter', 'operator', 'rule', 'index', 'depth'],
  components: { Cleave },
  data() {
    return {
    }
  },
  computed: {
    isValid() {
      return true
    },
    dataType() {
      return this.filter.type
    },
    value1: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>
