import sendRequest from "./users-api"

const BASE_URL = "/watchlist"

// CREATE A PROFILE
export function createWatchListItem(req, id) {
    return sendRequest(`${BASE_URL}/${id}`, "POST", req, id
    )
}