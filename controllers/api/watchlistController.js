const Profile = require("../../models/profileModel")
const CheckToken = require("../../controllers/api/users")
const User = require("../../models/user");

// Add an item to watchList
function createWatchListItem(req, res){
        console.log("Create Watchlist Item hit")
        console.log(req.body)
        try{
            // const updatedProfile = await  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
            // res.json(updatedProfile)
            //const profile = await Profile.findById(req.params.id)
            //profile.ProfileName = req.body.name
            //profile.save()
            //res.json(profile)
            console.log("Try")
        }
    catch{
        console.log(error)
    }
}

module.exports = {
    createWatchListItem
} 