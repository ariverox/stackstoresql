import axios from 'axios'
import {FETCH_ITEMS, FETCH_ITEM, REGISTER, LOGIN, SESSION,FETCH_USER,LOGOUT} from '../constants';

const ROOT_URL = 'http://localhost:4000/api'
// const token = localStorage.getItem('token')

function getToken(){
  var token = localStorage.getItem('token')
  return token
}

function saveToken(token){
  console.log('saving token', token)
  localStorage.setItem('token', token)
}

const get = (path, token) => {
  if(token){
    let token = getToken()
    if(!token) return 'Please Login to continue'
    return axios.get(`${ROOT_URL}/${path}?token=${token}`)
  }
  return axios.get(`${ROOT_URL}/${path}`)


}
const post = (path, props, token) => {
  if(token){
    let token = getToken()
    if(!token) return 'Please Login to continue'
    return axios.get(`${ROOT_URL}/${path}?token=${token}`, props)
  }
  return axios.post(`${ROOT_URL}/${path}`,props)
}

export function fetchItems() {
  let request = get('items')

  return {type: FETCH_ITEMS, payload: request}
}


export function fetchItem(id) {
  let request = get('item')
  if(id)request = get('items/' + id)

  return {
    type: FETCH_ITEM,
    payload:request
  }
}

export function logout(){
  let request = get('users/logout')
  return{
    type:LOGOUT,
    payload:request

  }
}


export function fetchUser(id) {
  let request = get('users')
  if(id) request = get('users/' + id)
  return {
    type: FETCH_USER,
    payload:request
  }
}

export function logIn({username, password}) {
  const request = post('auth/login', {username, password})

  let action = request.then((response)=>{
    let token = response.data
    saveToken(token)

  }).then(()=>{
    return 'success!'
  })

  return {type: LOGIN, payload: action}

}

export function register({username, password}) {

  let request = post('auth/register', {username, password})

  let action =  request.then((response)=>{
    let token = response.data
    console.log('saving token', token)
    saveToken(token)
  }).then(()=>{
    return 'success!'
  })

  return {type: REGISTER, payload: action}

}

export function getSession() {
  var request = get('auth/session', true)


  return {
    type: SESSION,
    payload: request
  }

}
