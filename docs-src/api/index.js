import axios from 'axios'
import store from '../store'

const api = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:29850/v1' : 'http://acts-api.mbsiapps.io/v1',
  // baseURL: 'http://localhost:29850/api',
  withCredentials: true
})

const calls = {}
const errorMesages = {
  duplicateRequest: 'Subsequent request made at same URL'
}

let requestsCounter = 0

const responseFunc = (response) => {
  requestsCounter -= 1
  if (requestsCounter <= 0) {
    store.commit('SET_FETCHING', false)
  }
  // console.dir(`Response from API: ${JSON.stringify(response)}`)
  return response
}

const errorFunc = (error) => {
  requestsCounter -= 1
  if (requestsCounter <= 0) {
    store.commit('SET_FETCHING', false)
  }
  console.dir(`Error from API: ${error.message}`)
  if (!error.message === errorMesages.duplicateRequest) {
    window.$toasted.error(error.message)
  }
  return Promise.reject(error)
}

api.interceptors.request.use(config => {
  requestsCounter++
  store.commit('SET_FETCHING', true)
  return config
})
api.interceptors.response.use(responseFunc, errorFunc)

const commands = {
  // async postComment(siteId, familyId, memoText) {
  //   let response = await api.post(`/account/comment`, { siteId, familyId, memoText })
  //   return response
  // }
}

// Show how to prevent duplicate requests...
// async getActiveActivities(queryFilter) {
//   let key = 'fetchActivities'
//   if (calls[key]) {
//     calls[key].cancel(errorMesages.duplicateRequest)
//   }
//   calls[key] = axios.CancelToken.source()
//   let response = await api.post(`/reports/activities/active`, queryFilter, { cancelToken: calls[key].token })
//   return response.data
// }

export default {
  commands
}
