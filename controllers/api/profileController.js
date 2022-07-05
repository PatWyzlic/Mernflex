
const Profile = require("../../models/profileModel")
const CheckToken = require("../../controllers/api/users")
const User = require("../../models/user");

/* async function createProfile(req, res) {
    console.log('inprofilecontroller', req.body)
   await Profile.create(req.body)
   CheckToken.checkToken(req,res)
   try{
    user = req.user._id
   }catch{
    console.log(error)
   }
   Profile.findOneAndUpdate({_id: user}, {$push: {Profile}})
} */

function createProfile(req, res){
    let user;
    CheckToken.checkToken(req,res)
    try{
        user = req.user._id
    }catch{
        console.log(error)
    }
    console.log("Req: ", req.body)
    Profile.create(req.body)
    .then((data) => {
        console.log("The data:", data)
        User.findOneAndUpdate({_id: user}, {$push: {Profiles: {data}}})
    })
}


module.exports = {createProfile}