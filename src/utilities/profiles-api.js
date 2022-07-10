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

// Edit Profile
export function editProfile(req, id) {
    console.log("req in editProfile:", req)
    return sendRequest(`${BASE_URL}/manage/${id}`, "PUT", req
    )
}

// Delete Profile 
export function deleteProfile(id){
    console.log("req in deleteProfile:", id)
    return sendRequest(`${BASE_URL}/manage/${id}`, "DELETE", id)
}