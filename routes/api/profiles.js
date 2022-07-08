const express = require("express")
const router = express.Router()
const profileCtrl = require("../../controllers/api/profileController")


// GET /API/Profile Controller
router.get("/", profileCtrl.showProfiles)
// POST /API/PROFILE CONTROLLER
router.post("/", profileCtrl.createProfile)

router.put("/manage/:id", profileCtrl.editProfile)

module.exports = router