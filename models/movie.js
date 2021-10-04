const mongoose = require("mongoose")
const Schema = mongooose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    genre: {
        type: String 
    }
})
module.exports = mongoose.model("Movie", movieSchema)