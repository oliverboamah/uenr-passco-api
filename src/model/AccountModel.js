let mongoose = require('mongoose');

// create account schema
let accountSchema = new mongoose.Schema({
    user_id: {
        unique: true,
        type: String,
        required: true
    },
    num_remaining_downloads: {
        type: Number,
        required: true
    },
    last_updated_datetime: {
        type: Date,
        required: true
    }
})

// create model
module.exports = mongoose.model("account", accountSchema);