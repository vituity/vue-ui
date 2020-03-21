import Vue from 'vue'

var padStart = function padStart(value, length, char) {
  value = value + ''
  var len = length - value.length

  if (len <= 0) {
    return value
  } else {
    return Array(len + 1).join(char) + value
  }
}

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
  return typeof obj
} : function (obj) {
  return obj && typeof Symbol === 'function' && obj.constructor === Symbol ? 'symbol' : typeof obj
}

Vue.filter('date', function (date, format) {
  if (!date) return ''
  format = format || 'MM-dd-yyyy (hh:mm tt)'

  var _date = date
  var splitArr = format.split(/(yyyy|MM|dd|hh|mm|ss|tt)+/)

  if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) !== 'object') {
    _date = new Date(date)
  }

  return splitArr.map(function (item) {
    if (item === 'yyyy') {
      return _date.getFullYear()
    }

    if (item === 'MM') {
      return padStart(_date.getMonth() + 1, 2, 0)
    }

    if (item === 'dd') {
      return padStart(_date.getDate(), 2, 0)
    }

    if (item === 'hh') {
      return _date.getHours() % 12 || 12
    }
    if (item === 'mm') {
      return padStart(_date.getMinutes(), 2, 0)
    }
    if (item === 'ss') {
      return padStart(_date.getSeconds(), 2, 0)
    }
    if (item === 'tt') {
      return padStart(_date.getHours() > 12 ? 'PM' : 'AM', 2, 0)
    }

    return item
  }).join('')
})
