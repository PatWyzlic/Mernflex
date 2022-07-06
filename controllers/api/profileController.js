
const Profile = require("../../models/profileModel")
const CheckToken = require("../../controllers/api/users")
const User = require("../../models/user");


//Get Profile
function showProfiles(req,res){
    console.log("This is show profile route")
    let user;
    CheckToken.checkToken(req,res)
    try{
        user = req.user._id
        console.log("User:", user)
        User.findById(user)
        .populate("Profiles")
        .then(foundUser=>{
            console.log(foundUser)
            return foundUser
        })
    } catch(error){
        console.log(error)
    }
}

// Create Profile
function createProfile(req, res){
    let user;
    CheckToken.checkToken(req,res)
    try{
        user = req.user._id
        console.log("Req: ", req.body)
        Profile.create(req.body)
        .then((data) => {
            console.log("The data:", data)
            console.log("user id", user)
            User.updateOne({_id: user}, {$push: {Profiles: data}})
        .then((x) =>{
            console.log(x)
        })
    })
    }catch{
        console.log(error)
    }
}


module.exports = {
    createProfile,
    showProfiles
}