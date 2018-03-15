import Cookies from 'js-cookie'

const Tokenkey = 'user-Token'
// get token
export function getToken () {
  return Cookies.get(Tokenkey)
}
//set token
export function setToken (token) {
  return Cookies.set(Tokenkey, token)
}
//remove token
export function removeToken () {
  return Cookies.remove(Tokenkey)
}
