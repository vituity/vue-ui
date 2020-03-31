<template lang="pug">
page(title='Rule Builder')
  .page--body
    h4 Floating
    vituity-rule-builder(
      v-model="rule"
      :isFloating="true"
      :filters="filters"
      :maxDepth="1"
      :isBasic="true"
      :rule="rule"
      namespace="example.basic"
    )
    h4.m-t-20 Custom
    vue-rule-builder(
        :filters="filters"
        :maxDepth="3"
        v-model="rule"
      )
    BulmaRuleSaveManager(
        :savedRules.sync="savedRules"
        :rule="rule"
        namespace="example.basic"
        @save="onRuleSaved"
        @load="onRuleLoaded"
        @delete="onRuleDeleted"
      )
    br
    p
      pre {{ outputFormatted }}

</template>

<script>

const filters = [
  {
    field: 'field_1',
    label: 'Field 1',
    control: 'multi-select',
    operators: ['in', 'not_in'],
    props: {
      options: [
        { id: 1, name: 'Normal' },
        { id: 2, name: 'High' },
        { id: 3, name: 'Critical' }
      ]
    }
  },
  {
    field: 'taggable',
    label: 'tags',
    control: 'tag-select',
    operators: ['in', 'not_in'],
    props: {
      options: [
        'hello',
        'darkness',
        'my old friend'
      ]
    }
  },
  {
    field: 'created',
    label: 'Created Date',
    type: 'datetime'
  },
  {
    field: 'name',
    label: 'Name',
    type: 'string'
  },
  {
    field: 'category',
    label: 'Category',
    control: 'multi-select',
    operators: ['in', 'not_in'],
    props: {
      options: [
        { id: 1, name: 'Books' },
        { id: 2, name: 'Movies' },
        { id: 3, name: 'Music' },
        { id: 4, name: 'Tools' },
        { id: 5, name: 'Goodies' },
        { id: 6, name: 'Clothes' }
      ]
    }
  },
  {
    field: 'in_stock',
    label: 'In stock',
    type: 'boolean'
  },
  {
    field: 'price',
    label: 'Price',
    type: 'currency',
    cleave: {
      numeral: true,
      numeralThousandsGroupStyle: 'none'
    }
  }
]

const defaultRule = {
  logicalOperator: 'all',
  conditions: [
    {
      field: 'name',
      operator: 'in',
      value: [
        '123456',
        '7891'
      ]

    },
    {
      field: 'price',
      operator: 'in',
      value: [25.30]
    }
  ]
}
export default {
  components: {
    // RuleBuilderSaveManager
  },
  data() {
    return {
      rule: defaultRule,
      filters: filters,
      savedRules: []
    }
  },
  computed: {
    outputFormatted() {
      return JSON.stringify(this.rule, null, 2)
    }
  },
  methods: {
    onRuleSaved(rule) {
      console.log('save', rule)
    },
    onRuleDeleted(rule) {
      console.log('delete', rule)
    },
    onRuleLoaded(rule) {
      console.log('load', rule)
    }
  }
}
</script>

<style lang="sass" scoped>
.page--body
  font-size: 1rem
</style>
