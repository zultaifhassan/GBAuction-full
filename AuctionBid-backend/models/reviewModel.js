const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
  
    message:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Reviews", reviewSchema)