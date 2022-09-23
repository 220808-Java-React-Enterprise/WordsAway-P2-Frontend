import axios, { AxiosRequestConfig } from 'axios'

const WORDS_API = axios.create({
  baseURL: 'http://localhost:8080/wordsaway',
  headers: {
    'Content-type': 'application/json'
  }
})

WORDS_API.interceptors.request.use(
  function (request: AxiosRequestConfig) {
    if (request !== undefined && request.headers !== undefined) {
      let token = sessionStorage.getItem('token')
      if (token !== null) request.headers['Authorization'] = token
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default WORDS_API
