const Profile = require("../../models/profileModel")

async function createProfile(req, res) {
   await Profile.create(req.body)
   console.log(req.body)
} 


module.export = createProfile