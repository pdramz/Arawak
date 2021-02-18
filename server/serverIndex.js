const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express()
const {VendorModel, VolunteerModel} = require ('./database')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=> {
    console.log(req.body)
    res.send('It has worked!')})

app.post("/vendor-pg", (req, res) => {
    console.log(req.body)
    const vendor = new VendorModel({...req.body, a_date: new Date()})
    //VendorModel.create(req.body, function (err, vendor) {
       // if (err) return handleError(err);
        // saved!
      //});


    volunteer.save(function (err) {
        if (err) return handleError(err);
        console.log("saved")
    });

    res.send('It has worked!')

})
app.post("/volunteer-pg", (req,res) => {
    console.log(req.body)
    const volunteer = new VolunteerModel({...req.body, a_date: new Date()})


   volunteer.save(function (err) {
   if (err) return handleError(err);
    console.log("saved!")
   });
});
app.use (express.static("./"))

const server = app.listen(PORT, function () {
 console.log(`Node server is running... on port: ${PORT}`);
});