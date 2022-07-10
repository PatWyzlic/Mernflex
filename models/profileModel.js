const mongoose = require('mongoose')
const {Schema,model} = mongoose

//Watchlist Schema
const WatchListSchema = new Schema({
    Title: String,
    Description: String, 
    MovieDbId: Number,
    PosterPath: String,
    Genres: String,
    ReleaseDate: String,
    Popularity: Number,
    Current_Profile: String
})

//Make Profile Schema
const ProfileSchema = new Schema ({
    ProfileName: String,
    ProfileImg: Number,
    Maturity: {
        type:Boolean, 
        default: true,
    },
    AutoPlay: {
        type: Boolean,
        default: true,
    },
    WatchList: [WatchListSchema]
})

const Profile = model("Profile", ProfileSchema);



module.exports = Profile