const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/diary", {
    UseUnifiedTopology: true
}).then((res) => {
    console.log("MongoDB connected");
})

app.get('/', (req, res) => {
    res.send('Welcome!!')
})

app.listen('3000', () => {
    console.log("Connection is ready")
})