import sendRequest from "./users-api"
const BASE_URL = "/"

// CREATE A PROFILE
export function createProfile(req, res) {
    console.log("createProfile")
    return sendRequest (BASE_URL, "POST", req.body
    )
}