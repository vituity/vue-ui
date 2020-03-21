<template lang="pug">
page(title='Rule Builder')
  .page--body
    vue-rule-builder(
        :rules="rules"
        :maxDepth="3"
        v-model="query"
      )
    DefaultSaveManager(
        :savedRules.sync="savedRules"
        :query="query"
        @save="onRuleSaved"
        @load="onRuleLoaded"
        @delete="onRuleDeleted"
      )
    br
    p
      pre {{ outputFormatted }}

</template>

<script>

const rules = [
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

const defaultQuery = {
  logicalOperator: 'all',
  children: [
    {
      __key: 1584564657317,
      type: 'rule-builder-rule',
      query: {
        rule: 'name',
        operator: 'in',
        value: [
          '123456',
          '7891'
        ]
      }
    },
    {
      __key: 1584564914803,
      type: 'rule-builder-rule',
      query: {
        rule: 'price',
        operator: 'in',
        value: []
      }
    }
  ]
}
export default {
  components: {
    // RuleBuilderSaveManager
  },
  data() {
    return {
      query: defaultQuery,
      rules: rules,
      savedRules: []
    }
  },
  computed: {
    outputFormatted() {
      return JSON.stringify(this.query, null, 2)
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
