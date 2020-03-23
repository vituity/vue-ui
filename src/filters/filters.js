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
