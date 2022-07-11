const express = require("express")
const router = express.Router()
const watchlistCtrl = require("../../controllers/api/watchlistController")
const profileCtrl = require("../../controllers/api/profileController")


router.get("/watchlist/:id", profileCtrl.getUser)

// POST /API/watchlist CONTROLLER
router.post("/watchlist/:id", watchlistCtrl.createWatchListItem)

module.exports = router