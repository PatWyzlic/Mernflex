const Profile = require("../../models/profileModel")
const CheckToken = require("../../controllers/api/users")
const User = require("../../models/user");

// function showProfiles(req,res){
//     console.log("This is show profile route")
//     let user;
//     CheckToken.checkToken(req,res)
//     try{
//         user = req.user._id
//         console.log("User:", user)
//         User.findById(user)
//         .populate("Profiles")
//         .then(foundUser=>{
//             console.log("foundUser", foundUser)
//             console.log("foundUserprofiles", foundUser.Profiles)
//             // res.json(foundUser)
//             return foundUser
//         })
//     } catch(error){
//         console.log(error)
//     }
// }
// //Get Profile try 2
// async function showProfiles(req,res){
//     let user;
//     try{
//         CheckToken.checkToken(req,res)
//         try{
//             user = req.user._id
//             console.log("User:", user)
//         } catch(error){
//             console.log(error)
//         }
//         const profileList = await (await User.findById(user)).populate("profiles")
//         res.json(profileList)
//     } catch(error){
//         res.status(400).json("Bad Serverside")
//     }
// }
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

function editProfile(req, id){
    console.log("EditProfile hit")
    try{
        Profile.findByIdAndUpdate(req.params._id, req.body, {new: true})
        console.log(req.params.id)
        .then((data) => {
            res.json(data)
        })
        return Profile.save();
    }catch{
        console.log(error)
    }
}


module.exports = {
    createProfile,
    editProfile
} 