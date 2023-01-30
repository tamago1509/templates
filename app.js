const express = require('express');
const app = express();
const mongoose = require("mongoose");
let ejs = require('ejs');
const path = require('path');
const Template1 = require('./models/template1');
const bodyParser = require('body-parser');


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));
app.use(express.static(__dirname + '/public'));



mongoose.connect("mongodb://localhost:27017/diary", {
    UseUnifiedTopology: true
}).then((res) => {
    console.log("MongoDB connected");
})


app.get('/template/new', (req, res) => {
    res.render('temp1')
})
app.post('/template/new', async (req, res) => {
    const content = req.body;
    const temp = new Template1(content);
    // await temp.save();
    console.log(temp)
    res.render('create', { content });
})
app.listen('3000', () => {
    console.log("Connection is ready")
})