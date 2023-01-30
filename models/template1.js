const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template1Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    graph1: {
        type: String
    },
    graph2: {
        type: String
    },
    pic1: String,
    pic2: String,
    gif_link: String
})

module.exports = mongoose.model('Template1', template1Schema);