let mongoose = require('mongoose');

// create account schema
let transactionSchema = new mongoose.Schema({
    user_id: {
        unique: true,
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    last_updated_datetime: {
        type: Date,
        required: true
    }
})

// create model
module.exports = mongoose.model("transaction", transactionSchema);