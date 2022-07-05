const expresss = require(express)
const router = express.Router()
const profileCtrl = require("../../controllers/api/profileController")

// POST /API/PROFILE CONTROLLER
router.post("/",profileCtrl.createProfile)


module.exports = router