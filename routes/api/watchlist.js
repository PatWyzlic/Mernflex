const express = require("express")
const router = express.Router()
const watchlistCtrl = require("../../controllers/api/watchlistController")


// POST /API/watchlist CONTROLLER
router.post("/add/:id", watchlistCtrl.createWatchListItem)

module.exports = router