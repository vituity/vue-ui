<template lang="pug">
.vituity-rule-builder(:class="{'is-floating': isFloating}")
  template(v-if="isFloating")
    slot(name="open")
      .b-btn(@click="isOpen = true" :class="floatingButtonClass")
        template(v-if="conditionCount === 0")
          .b-icon
            i.fa.fa-filter
          span Add Filter
        span(v-else) {{conditionCount}} {{conditionCount | pluralize('Condition')}} Selected
  .rule-builder-wrapper(v-if="!isFloating || isOpen")
    slot(name="builder")
      vue-rule-builder(v-bind="$attrs" v-on="$listeners")
        template(slot="top")
          slot(name="top")
    slot(name="toolbar")
      .v-flex.m-t-10
        .b-btn.is-info.is-outlined.is-small(@click="showSaveManager = !showSaveManager")
          .b-icon
            i.fas.fa-star
          span Favorites
        .v-flex-spacer
        .b-btns
          .b-btn.is-small(v-if="isFloating" @click="close") Close Filter
          .b-btn.is-small.is-danger.is-light( @click="clearRules") Clear Filter
          .b-btn.is-small.is-success(@click="applyRules") Apply Filter
    slot(name="save-manager")
      template(v-if="showSaveManager")
        BulmaRuleSaveManager.m-t-10(
            v-bind="$attrs"
            v-on="$listeners"
            :rule="rule"
            :savedRules.sync="savedRules"
            @save="onRuleSaved"
            @load="onRuleLoaded"
            @delete="onRuleDeleted"
          )
</template>

<script>
// import axios from 'axios'
import { deepClone } from './utilities.js'
// const api = axios.create({
//   baseURL: 'localhost:',
//   withCredentials: true
// })
function GetDefaultRule() {
  return {
    logicalOperator: 'AND',
    conditions: []
  }
}

export default {
  inheritAttrs: false,
  props: {
    isFloating: {
      type: Boolean,
      default: () => false
    },
    floatingButtonClass: String
  },
  data: function () {
    return {
      savedRules: [],
      isOpen: false,
      showSaveManager: false
    }
  },
  created() {
    if (this.rule && Array.isArray(this.rule.conditions)) { return }
    const lastRule = this.loadLastRule()
    if (lastRule && Array.isArray(lastRule.conditions)) {
      this.$emit('input', lastRule)
    } else {
      this.$emit('input', GetDefaultRule())
    }
  },
  computed: {
    rule() {
      return this.$attrs.value
    },
    conditionCount() {
      if (!this.rule.conditions) return 0
      return this.rule.conditions.length
    },
    namespace() {
      return this.$attrs.namespace
    }
  },
  watch: {
    namespace: {
      handler(value) {
        this.loadSavedQueries()
      },
      immediate: true
    }
  },
  methods: {
    async loadSavedQueries() {
      this.savedRules = this.loadFromLocalStorage()

      // const results = await api.get(`rules/${this.namespace}`)
      // this.savedRules[this.namespace] = results.data
    },
    loadFromLocalStorage() {
      var string = localStorage.getItem(`rules.${this.namespace}.user`)
      if (string) {
        try {
          return JSON.parse(string)
        } catch {
        }
      }
      return []
    },
    saveToLocalStorage() {
      localStorage.setItem(`rules.${this.namespace}.user`, JSON.stringify(this.savedRules))
    },
    open() {
      this.isOpen = true
      this.$emit('opened')
    },
    close() {
      if (!this.isFloating) { return }
      this.isOpen = false
      this.$emit('closed')
    },
    clearRules() {
      this.$emit('input', GetDefaultRule())
      this.clearCachedRule()
    },
    loadLastRule() {
      var string = localStorage.getItem(`rules.${this.namespace}.current`)
      if (string) {
        try {
          return JSON.parse(string)
        } catch {
        }
      }
      return null
    },
    clearCachedRule() {
      localStorage.removeItem(`rules.${this.namespace}.current`)
    },
    cacheLastRule() {
      localStorage.setItem(`rules.${this.namespace}.current`, JSON.stringify(this.rule))
    },
    applyRules() {
      this.cacheLastRule()
      this.$emit('on-apply', this.rule)
      this.close()
    },
    closeSaveManager() {
      this.showSaveManager = false
    },
    openSaveManager() {
      this.showSaveManager = true
    },
    onRuleSaved(ruleSet) {
      this.savedRules.push(ruleSet)
      this.saveToLocalStorage()
    },
    onRuleDeleted(ruleSet) {
      const ix = this.savedRules.indexOf(ruleSet)
      this.savedRules.splice(ix, 1)
      this.saveToLocalStorage()
    },
    onRuleLoaded(ruleSet) {
      this.$emit('input', deepClone(ruleSet.rule))
    }
  }
}
</script>
<style lang="sass" scoped>
.vituity-rule-builder.is-floating
  position: relative
  .rule-builder-wrapper
    background: white
    padding: 5px 10px 10px 5px
    border-radius: 4px
    box-shadow: 0px 8px 5px 1px #00000052
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: 5
</style>
