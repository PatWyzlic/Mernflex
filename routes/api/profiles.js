const express = require("express")
const router = express.Router()
const profileCtrl = require("../../controllers/api/profileController")
// // GET /API/Profile Controller
// router.get("/", profileCtrl.showProfiles)
// POST /API/PROFILE CONTROLLER
router.post("/",profileCtrl.createProfile)

router.get("/:userid", profileCtrl.getUser)

router.put("/manage/:id",profileCtrl.editProfile)

router.delete("/manage/:id",profileCtrl.deleteProfile)

module.exports = router 