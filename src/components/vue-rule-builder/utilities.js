/**
 * Returns a depply cloned object without reference.
 * Copied from Vue MultiSelect and Vuex.
 * @type {Object}
 */
export const deepClone = function (obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  } else if (obj && typeof obj === 'object') {
    var cloned = {}
    var keys = Object.keys(obj)
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]
      cloned[key] = deepClone(obj[key])
    }
    return cloned
  } else {
    return obj
  }
}

/*!
 * Deep merge two or more objects together.
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param   {Object}   objects  The objects to merge together
 * @returns {Object}            Merged values of defaults and options
 */
export const deepMerge = function () {
  // Setup merged object
  var newObj = {}

  // Merge the object into the newObj object
  var merge = function (obj) {
    for (var prop in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(prop)) {
        // If property is an object, merge properties
        if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          newObj[prop] = deepMerge(newObj[prop], obj[prop])
        } else {
          newObj[prop] = obj[prop]
        }
      }
    }
  }

  // Loop through each object and conduct a merge
  for (var i = 0; i < arguments.length; i++) {
    merge(arguments[i])
  }

  return newObj
}

export const validator = {
  canBeNumber(value) {
    return !isNaN(value)
  },
  canBeInteger(value) {
    return /^-?[0-9]+$/.test(value)
  },
  canBeCurrency(value) {
    return /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/.test(value)
  },
  convertToNumber(value, precision) {
    return Number(value)
  },
  convertToInteger(value) {
    return parseInt(value)
  }
}
