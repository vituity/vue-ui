<template lang="pug">
.select-one
  .input-group(:class="{'input-group--focused':focused}")
    .input-group__input
      v-input
        input.input(v-model='keyword',
                      type='search',
                      ref='autocomplete',
                      :placeholder='placeholder',
                      @click='isOpen = true',
                      @input='onInput($event.target.value)',
                      @keyup.esc='isOpen = false',
                      @focus='isOpen = true; focused = true',
                      @blur='isOpen = false; focused = false',
                      @keydown.enter='keyEnter')
    .input-group__details
      .input-group__error.error--text
        | {{ error }}
  .v-dropdown(v-show='isOpen')
    div(v-show='Object.keys(collection).length === 0')
      span No Matches Found
    div(v-for='group in collection', :key='group.name')
      span.v-dropdown-group-header {{group.name}}
      .v-dropdown-option(v-for='(item, ix) in group.items', :key='item[optionKey]', @mousedown='select(item)')
        slot(v-bind:item="item")
          span ({{item[optionKey]}}) {{item.description}}
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: 'placeholder' },
    error: {},
    groupBy: {
      type: String,
      default: '',
      required: false
    },
    optionKey: {
      type: String,
      default: 'id',
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    matchExact: Boolean,
    value: null
  },
  data() {
    return {
      isOpen: true,
      keyword: '',
      focused: false
    }
  },
  created() {
    this.selectWithoutFocus()
  },
  computed: {
    collection() {
      const map = {}
      const group = this.groupBy

      if (this.matchExact) {
        this.options
          .filter(x => !this.keyword || x[this.optionKey].toString().toLowerCase() === this.keyword.toLowerCase()).forEach(x => {
            map[x[group]] = map[x[group]] || { name: x[group], items: [] }
            map[x[group]].items.push(x)
          })
      } else {
        this.options
          .filter(x => !this.keyword || x[this.optionKey].toString().toLowerCase().includes(this.keyword.toLowerCase())).forEach(x => {
            map[x[group]] = map[x[group]] || { name: x[group], items: [] }
            map[x[group]].items.push(x)
          })
      }
      return map
    },
    selected() {
      return this.options.find(x => x[this.optionKey].toString().toLowerCase() === this.keyword.toLowerCase())
    }
  },
  methods: {
    onInput(value) {
      this.isOpen = true
      this.select(null, 'inputChange')
      this.$emit('change', this.keyword)
    },
    selectWithoutFocus() {
      setTimeout(() => {
        this.$refs.autocomplete.focus()
        this.isOpen = false // Set this back to false by default!
      }, 0)
    },
    keyEnter(e) {
      if (this.isOpen && this.selected) {
        this.select(this.selected)
        e.preventDefault()
      }
    },
    select(item) {
      if (item) {
        this.keyword = item[this.optionKey].toString()
        this.$emit('item-selected', item)
        this.selectWithoutFocus()
      }
      this.$emit('input', item)
    }
  },
  watch: {
    value(newValue) {
      if (newValue === '') this.keyword = ''
      if (this.selected !== newValue) {
        this.select(newValue)
      }
    }
  }
}
</script>

<style scoped lang="sass">
// input
//   display: inline
//   text-transform: uppercase
.select-one
  position: relative

.v-dropdown
  border: 1px solid #d5d5d5
  padding: 5px
  max-height: 300px
  overflow: auto
  position: absolute
  background-color: white
  color: black
  z-index: 99999
  width: 100%

.application--dark .v-dropdown
  background-color: #424242
  color: white

.v-dropdown-group-header
  font-weight: bold

.v-dropdown-option
  padding: 5px
  font-size: 12px
  text-decoration: none
  list-style-type: none
  &:hover
    background-color: #1976d2
    color: white
    cursor: pointer
</style>
