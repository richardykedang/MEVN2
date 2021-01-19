import store from '../store'
import { http } from './HttpService'
// 3
export function IsLogin () {
  const token = localStorage.getItem('token')
  return token != null
}
// 1
export function Login (user) {
  return http().post('/auth', user)
    .then(res => {
      if (res) {
        const fakeToken = {
          token: 'my-token'
        }
        setToken(fakeToken)
      }
    })
}
// 2
function setToken (token) {
  localStorage.setItem('token', JSON.stringify(token))
  store.dispatch('authenticate')
}

export function GetUsername () {
  return 'david'
}

export function GetuserId () {
  return 1
}

export function registerUser (user) {
  return http().post('/register', user)
}
