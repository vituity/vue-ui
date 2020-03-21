
// import VueIcons from './icons'
// import VTooltip from 'v-tooltip'
// import VueResize from 'vue-resize'
import Logger from './utils/logger'
import './filters/filters'

// import 'focus-visible'

// import 'vue-resize/dist/vue-resize.css'
// import 'v-tooltip/dist/v-tooltip.css'

// Exported mixins
// export { default as CoupledChild } from './mixins/CoupledChild'
// export { default as CoupledParent } from './mixins/CoupledParent'
export { default as DisabledChild } from './mixins/DisabledChild'
// export { default as DisableScroll } from './mixins/DisableScroll'

// Exported utils
// export { generateHtmlIcon } from './icons'

// Require all the components that start with 'BaseXXX.vue'
const requireComponent = require.context('./components', true, /[a-z0-9]+\.(jsx?|vue)$/i)

export function install(Vue, options = {}) {
  Vue.use(Logger)

  // For each matching file name...
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName
      .substr(fileName.lastIndexOf('/') + 1)
      // Remove the file extension from the end
      .replace(/\.\w+$/, '')
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

const plugin = {
  // eslint-disable-next-line no-undef
  // version: VERSION,
  install
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
