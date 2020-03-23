const padZeros = (input, maxLength = 0) => `0000${input}`.slice(-maxLength)

const defaultConfig = {
  dayOfWeekNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'
  ],
  dayOfWeekNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
  ],
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
}

const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
  return typeof obj
} : function (obj) {
  return obj && typeof Symbol === 'function' && obj.constructor === Symbol ? 'symbol' : typeof obj
}

export const dateFormat = (input, format = 'MM-dd-yyyy (hh:mm tt)', config = {}) => {
  if (!input) return ''
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
    input = new Date(input)
  }
  config = { ...defaultConfig, ...config }

  const year = input.getFullYear()
  const month = input.getMonth() + 1
  const date = input.getDate()
  const hours24 = input.getHours()
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12
  const minutes = input.getMinutes()
  const seconds = input.getSeconds()
  const weekday = input.getDay()

  return format
    // Normalize tokens
    .replace('YYYY', '%01%')
    .replace('yyyy', '%01%')
    .replace('YY', '%02%')
    .replace('yy', '%02%')
    .replace('MMMM', '%03%')
    .replace('MMM', '%04%')
    .replace('MM', '%05%')
    .replace('M', '%06%')
    .replace('dd', '%07%')
    .replace('d', '%08%')
    .replace('HH', '%09%')
    .replace('H', '%10%')
    .replace('hh', '%11%')
    .replace('h', '%12%')
    .replace('mm', '%13%')
    .replace('m', '%14%')
    .replace('ss', '%15%')
    .replace('s', '%16%')
    .replace('A', '%17%')
    .replace('a', '%18%')
    .replace('ddd', '%19%')
    .replace('DD', '%20%')
    .replace('D', '%21%')
    .replace('tt', '%22%')
    // Insert values
    .replace('%01%', padZeros(year, 4))
    .replace('%02%', padZeros(year % 100, 2))
    .replace('%03%', config.monthNames[month - 1])
    .replace('%04%', config.monthNamesShort[month - 1])
    .replace('%05%', padZeros(month, 2))
    .replace('%06%', `${month}`)
    .replace('%07%', padZeros(date, 2))
    .replace('%08%', `${date}`)
    .replace('%09%', padZeros(hours24, 2))
    .replace('%10%', `${hours24}`)
    .replace('%11%', padZeros(hours12, 2))
    .replace('%12%', `${hours12}`)
    .replace('%13%', padZeros(minutes, 2))
    .replace('%14%', `${minutes}`)
    .replace('%15%', padZeros(seconds, 2))
    .replace('%16%', `${seconds}`)
    .replace('%17%', hours24 < 12 ? 'AM' : 'PM')
    .replace('%18%', hours24 < 12 ? 'am' : 'pm')
    .replace('%19%', config.dayOfWeekNames[weekday])
    .replace('%20%', config.dayOfWeekNamesShort[weekday])
    .replace('%21%', `${weekday}`)
    .replace('%22%', hours24 < 12 ? 'AM' : 'PM')
}
