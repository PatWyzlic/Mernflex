const mongoose = require('mongoose')
const Schema = mongoose.Schema


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