export const currency = (state) => state.toFixed(2)

export const uppercase = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
}

export const capitalize = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const pluralize = (value, word, options) => {
  const globalOptions = (this && this.pluralize) ? this.pluralize : {}
  options = options || globalOptions
  var output = ''
  var includeNumber = options.includeNumber != null ? options.includeNumber : false
  if (includeNumber === true) output += value + ' '
  // eslint-disable-next-line no-mixed-operators
  if (!value && value !== 0 || !word) return output
  if (Array.isArray(word)) {
    output += word[value - 1] || word[word.length - 1]
  } else {
    output += word + (value === 1 ? '' : 's')
  }

  return output
}
