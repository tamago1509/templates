if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const mongoose = require("mongoose");
let ejs = require('ejs');
const path = require('path');
const Template1 = require('./models/template1');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { storage } = require('./cloudinary/cloudconfig')
const upload = multer({ storage })

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
app.post('/template/new', upload.any(), async (req, res) => {
    const temp = req.body;
    const pics = await req.files.map(f => ({ src: f.path, filename: f.filename }));
    const content = new Template1(temp);
    content.pic1 = pics[0].src;
    content.pic2 = pics[1].src;
    await content.save();
    console.log(content);
    res.render('show', { content });
})
app.get("/template/show/:id", async (req, res) => {
    const id = req.params;
    const content = await Template1.findById(id);
    res.render('show', { content });
})
app.listen('3000', () => {
    console.log("Connection is ready")
})