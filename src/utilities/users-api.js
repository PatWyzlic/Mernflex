import { getToken } from './users-service'

// This is the base path of the Express rout we'll defing
const BASE_URL = '/api/users'

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}
/*--- Helper Functions ---*/


export default async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method }
    if (payload) {
        options.headers = { 
            'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
    }
    console.log("payload:", payload)
    console.log(url)
    const token = getToken()
    // console.log("token in sendRequest:", token)
    if (token) {
        // Ensure the headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;
    }
    console.log("options:", options)
    const res = await fetch(url, options)
    console.log(res)
    // console.log("options:", options)
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json()
    throw new Error('Bad Request')
}

