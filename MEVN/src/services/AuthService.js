import store from '../store'
// 3
export function IsLogin () {
  const token = localStorage.getItem('token')
  return token != null
}
// 1
export function Login () {
  const token = {
    username: 'david'
  }
  setToken(token)
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
