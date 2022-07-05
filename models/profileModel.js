const mongoose = require('mongoose')
const {Schema,model} = mongoose

//Watchlist Schema
const WatchListSchema = new Schema({
    Title: String,
    Description: String, 
    MovieDbId: Number,
    Cast: Number,
    PosterPath: String,
    Genres: Array,
    ReleaseDate: String,
    Popularity: Number
})

//Make Profile Schema
const ProfileSchema = new Schema ({
    ProfileName: String,
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