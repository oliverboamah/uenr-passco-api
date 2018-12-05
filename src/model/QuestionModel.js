let mongoose = require('mongoose');

// create account schema
let questionSchema = new mongoose.Schema({
    programme: {
        type: String,
        required: true
    },
    course_code: {
        type: String,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    lecturer: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    num_credit: {
        type: Number,
        required: true
    },
    num_pages: {
        type: Number,
        required: true
    },
    total_files_size: {
        type: String,
        required: true
    },
    url: {
        type: Array,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    }
})

// create model
module.exports = mongoose.model("question", questionSchema);