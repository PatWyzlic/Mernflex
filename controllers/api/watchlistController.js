const Profile = require("../../models/profileModel")
const CheckToken = require("../../controllers/api/users")

// Add an item to watchList
function createWatchListItem(req, id){
        console.log("Create Watchlist Item hit")
        console.log("Create list item params:", req.params.id)
        console.log("Create list item body:", req.body)
        try{
            const newWatchListItem = Profile.findByIdAndUpdate(id, {$push: {WatchList: req.body}}, {new: true})
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