// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import * as usersAPI from './users-api'
import jwt_decode from 'jwt-decode';

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData)
    // Persist the "token"
    localStorage.setItem('token', token)
    return getUser()
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    // console.log("logintoken:", token)
    localStorage.setItem('token', token)
    return getUser()
}

export function getToken() {
    // console.log("getToken Ran")
    // getItem return null if there's no string
    const token = localStorage.getItem('token')
    // console.log("getTokenTOken:", token)
    if (!token) return null
    // Obtain the payload of the token
    // console.log("token did not return null")
    // const payload = JSON.parse(atob(token.split('.')[1]))
    const payload = jwt_decode(token)
    // console.log("getTokenPayload:", payload)
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
        // console.log("token expires:", Date.now() / 1000)
        // Token has expired - remove it from localStorage
        localStorage.removeItem('token')
        return null
    }
    return token
}

export function getUser() {
    const token = getToken()
    
    // If there's a token, return the user in the payload, otherwise return null
    // return token ? JSON.parse(atob(token.split('.')[1])).user : null
    return token ? jwt_decode(token)
    : null
}

export function logOut() {
    localStorage.removeItem('token')
}

export function checkToken() {
    // Just so that you don't forget how to use .then
    // console.log("check Token Ran")
    return usersAPI.checkToken()
    // checkToken returns a string, but let's 
    // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr));
    console.log("this is after the 48 token")
}
