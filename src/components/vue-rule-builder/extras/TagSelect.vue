<template lang="pug">
  div.tag-select
    multiselect(
      v-model="values"
      :placeholder="placeholder"
      :options="tags"
      :multiple="multiple"
      :taggable="true"
      :closeOnSelect="closeOnSelect"
      :hideSelected="hideSelected"
      :max="max"
      :selectLabel="selectLabel"
      :showLabels="true"
      openDirection="below"
      @tag="addTag",
      @remove="removeTag"
      tagPlaceholder=""
      ref="multiselect"
    )
      template(slot="noResult" slot-scope="props")
        span Duplicate value entered: {{ props.search }}
      template(slot="noOptions", slot-scope="props")
        span Type a value then press Enter.
      //- template(slot="option", slot-scope="props")
      //-   span {{props.option.isTag ? cleaveInput.getFormattedValue() : props.option }}
</template>

<script>
import Multiselect from 'vue-multiselect'
import { validator } from '../utilities'
import Cleave from 'cleave.js'

export default {
  props: {
    value: [Object, Array, String, Number],
    options: {
      type: Array,
      default: () => []
    },
    max: Number,
    closeOnSelect: {
      type: Boolean,
      default: false
    },
    selectLabel: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: true
    },
    hideSelected: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'string'
    },
    useCleave: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Multiselect
  },
  data() {
    return {
      addedTags: [],
      isInvalidTag: false,
      cleaveInput: null
    }
  },
  computed: {
    values: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    },
    tags: {
      get() {
        return [...this.options, ...this.addedTags]
      }
    },
    cleaveSettings() {
      return this.$attrs || {}
    }
  },
  mounted() {
    const element = this.$el.querySelector('.multiselect__input')
    if (this.useCleave) {
      this.cleaveInput = new Cleave(element, this.cleaveSettings)
    }
  },
  methods: {
    addTag(newTag) {
      const raw = this.cleaveInput ? this.cleaveInput.getRawValue() : newTag
      if (raw.trim() === '') return
      const vals = this.value || []
      this.addedTags.push(raw)
      vals.push(raw)
      this.$emit('input', vals)
    },
    removeTag(tag) {
      this.addedTags = this.addedTags.filter(x => x !== tag)
    }
  }
}
</script>
<style lang="sass">
.is-invalid-tag
  .multiselect__option--highlight
    background: #da5e5e
  // .multiselect__content-wrapper
  //   display: none !important
</style>
