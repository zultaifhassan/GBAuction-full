const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
  
})

module.exports = mongoose.model("emails", emailSchema)