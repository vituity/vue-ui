import Vue from 'vue'
import './dateFilter'

Vue.filter('currency', function (state) {
  return state.toFixed(2)
})

Vue.filter('uppercase', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.directive('uppercase', (el, binding) => {
  const processedValue = el.value.toUpperCase()
  el.value = processedValue
  binding.value = el.value
})
