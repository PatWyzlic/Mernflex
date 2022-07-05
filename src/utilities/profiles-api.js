import sendRequest from "./users-api"
const BASE_URL = "/"

// CREATE A PROFILE
export function createProfile() {
    console.log("createProfile")
    return sendRequest (BASE_URL
    )
}