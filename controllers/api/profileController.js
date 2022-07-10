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

async function editProfile(req, res){
    console.log("EditProfile hit")
    console.log(req.body)
    try{
        // const updatedProfile = await  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
        // res.json(updatedProfile)
        const profile = await Profile.findById(req.params.id)
        profile.ProfileName = req.body.name
        profile.save()
        res.json(profile)
    }catch{
        console.log(error)
    }
}

async function deleteProfile(req,res){
    try{
        await Profile.findByIdAndRemove(req.params.id)
        res.json({message: 'Profile Deleted'})
    } catch (error){
        console.log(error)
    }
}

function getUser(req,res){
    console.log('getUser hit')
    console.log(req.params.userid)
    User.findById(req.params.userid)
    .then(foundUser=>{
        console.log("foundUser", foundUser)
        console.log("foundUserprofiles", foundUser.Profiles)
        res.json(foundUser)
    })
}

// async function getUser(req,res){
//     console.log('getUserHit')
//     try{
//         const founduser = User.findById(req.params.userid)
//         res.json(founduser)
//     } catch(err){
//         console.log(err)
//     }
// }


module.exports = {
    createProfile,
    editProfile,
    deleteProfile,
    getUser
} 