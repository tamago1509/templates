const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template1Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content1: String,
    content2: String,
    image1: String,
    image2: String,
    gif: String
})

module.exports = mongoose.model('Template1', template1Schema);