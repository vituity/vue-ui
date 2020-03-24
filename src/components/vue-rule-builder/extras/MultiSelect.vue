<template lang="pug">
  div
    multiselect(
      v-model="values"
      :placeholder="placeholder"
      :label="label"
      :track-by="trackBy"
      :options="options"
      :multiple="multiple"
      :closeOnSelect="closeOnSelect"
      :hideSelected="hideSelected"
      :max="max"
      :selectLabel="selectLabel"
       openDirection="below"
      :loading="!options || options.length == 0"
    )
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  props: {
    value: [Object, Array, String, Number],
    options: Array,
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
    trackBy: {
      type: String,
      default: 'id'
    },
    label: {
      type: String,
      default: 'name'
    }
  },
  components: {
    Multiselect
  },
  data() {
    return {}
  },
  computed: {
    values: {
      get() {
        if (this.multiple) {
          if (!this.value) return []
          const vals = []
          this.value.forEach(x => {
            const val = this.options.find(a => a.id === x)
            if (val) { vals.push(val) }
          })
          return vals
        } else {
          if (!this.value) return null
          return this.options.find(a => a.id === this.value)
        }
      },
      set(v) {
        if (this.multiple) {
          const ids = v.map(x => x.id)
          this.$emit('input', ids)
        } else {
          if (v === null) {
            this.$emit('input', v)
          } else {
            this.$emit('input', v.id)
          }
        }
      }
    }
  },
  methods: {
  }
}
</script>
