const Profile = require("../../models/profileModel")
async function createProfile(req, res) {
    console.log('inprofilecontroller', req.body)
   await Profile.create(req.body)
} 


module.exports = {createProfile}