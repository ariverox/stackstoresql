import axios from 'axios'

import { changeErrorMessage } from '../actions/utilities'

import axiosDefaults from 'axios/lib/defaults';

const url = {
	local: 'http://localhost:8080/api',
	api: 'http://52.36.13.24:8080',
}

export const API_SERVER_URL = url.local
export var JWT_AUTH = localStorage.getItem('token')

axiosDefaults.baseURL = API_SERVER_URL


export function changeToken(token){
	JWT_AUTH = token
	localStorage.setItem('token', token)
	// axiosDefaults.headers = {
	// 	'Authorization': `Bearer ${JWT_AUTH}`,
	// 	'Content-Type': 'application/json'
	// }
}

// axiosDefaults.headers = {
// 	'Authorization': `Bearer ${JWT_AUTH}`,
// 	'Content-Type': 'application/json'
// }
