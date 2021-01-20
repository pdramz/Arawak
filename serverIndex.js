const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const app = express()

app.use(express.json())
app.post("/vendor-pg", (req, res) => { 
    console.log(req.body)
    res.send('It has worked!')})
app.use (express.static("./"))

const server = app.listen(3000, function () {
 console.log(`Node server is running... <serverurl>`);
});