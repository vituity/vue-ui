import Cleave from 'cleave.js'

export default {
  name: 'cleave',
  render(el) {
    return el('input', {
      attrs: {
        type: 'text',
        placeholder: this.options.placeholder,
        value: this.value// Cleave.js will set this as initial value
      },
      on: {
        blur: this.onBlur
      }
    })
  },
  props: {
    value: {
      default: null,
      required: true
    },
    // https://github.com/nosir/cleave.js/blob/master/doc/options.md
    options: {
      type: Object,
      default: () => ({})
    },
    // Set this prop to false to emit masked value
    raw: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // cleave.js instance
      cleave: null,
      // callback backup
      onValueChangedFn: null
    }
  },
  mounted() {
    // if (this.cleave) return
    // this.cleave = new Cleave(this.$el, this.getOptions(this.options))
    this.cleave = new Cleave(this.$el, this.getOptions(this.options))
  },
  methods: {
    getOptions(options) {
      // Preserve original callback
      this.onValueChangedFn = options.onValueChanged
      const newOptions = Object.assign({}, options, {
        onValueChanged: this.onValueChanged
      })
      return newOptions
    },
    onValueChanged(event) {
      const value = this.raw ? event.target.rawValue : event.target.value
      this.$emit('input', value)

      // Call original callback method
      if (typeof this.onValueChangedFn === 'function') {
        // eslint-disable-next-line no-useless-call
        this.onValueChangedFn.call(this, event)
      }
    },
    onBlur(event) {
      this.$emit('blur', this.value)
    }
  },
  watch: {
    /**
     * Watch for any changes in options and redraw
     *
     * @param newOptions Object
     */
    options: {
      deep: true,
      handler(newOptions) {
        this.cleave.destroy()
        this.cleave = new Cleave(this.$el, this.getOptions(newOptions))
        this.cleave.setRawValue(this.value)
      }
    },

    /**
     * Watch for changes from parent component and notify cleave instance
     *
     * @param newValue
     */
    value(newValue) {
      /* istanbul ignore if */
      if (!this.cleave) return

      // when v-model is not masked (raw)
      if (this.raw && newValue === this.cleave.getRawValue()) return
      //  when v-model is masked (NOT raw)
      if (!this.raw && newValue === this.$el.value) return
      // Lastly set newValue
      this.cleave.setRawValue(newValue)
    }
  },
  /**
   * Free up memory
   */
  beforeDestroy() {
    if (!this.cleave) return

    this.cleave.destroy()
    this.cleave = null
    this.onValueChangedFn = null
  }
}
