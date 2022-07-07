import sendRequest from "./users-api"

const BASE_URL = "/watchlist"

// CREATE A PROFILE
export function createWatchListItem(req) {
    return sendRequest (`${BASE_URL}/add`, "POST", req
    )
}