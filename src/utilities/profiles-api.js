import sendRequest from "./users-api"
// import sendRequestGet from "./sendRequest"

const BASE_URL = "/profiles"


//Show Profile
export function getProfiles(){
    return sendRequest(BASE_URL)
}

// CREATE A PROFILE
export function createProfile(req) {
    console.log("createProfile")
    return sendRequest (BASE_URL, "POST", req
    )
}