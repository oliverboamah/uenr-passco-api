let mongoose = require('mongoose');

// create user schema
let userSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    programme: {
        type: String,
        required: true
    },
    "referral_email": String
})

// create model
module.exports = mongoose.model("user", userSchema);