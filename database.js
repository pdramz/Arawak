const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Arawak', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});
//Define a schema
var Schema = mongoose.Schema;

var VendorModelSchema = new Schema({
    name: String,
    surname: String,
    age: String,
    aioSecurity: Boolean,
    aioGames: Boolean,
    aioSupport: Boolean,
    aioInformation: Boolean,
    aioSetup: Boolean,
    aioPost: Boolean,
    nameofbusiness: String,
    stalltype: String,
    stalldetails: String,
    StallSize1: Boolean,
    StallSize2: Boolean,
    StallSize3: Boolean,
    car: Boolean,
    van: Boolean,
    contactnumber: String,
    emailaddress: String,
    interestyes: Boolean,
    interestno: Boolean,
    a_date: Date
});

// Compile model from schema
var VendorModel = mongoose.model('VendorModel', VendorModelSchema );

var VolunteerModelSchema = new Schema({
    name: String,
    surname: String,
    age: String,
    aioSecurity: Boolean,
    aioGames: Boolean,
    aioSupport: Boolean,
    aioInformation: Boolean,
    aioSetup: Boolean,
    aioPost: Boolean,
    nameofbusiness: String,
    stalltype: String,
    stalldetails: String,
    StallSize1: Boolean,
    StallSize2: Boolean,
    StallSize3: Boolean,
    car: Boolean,
    van: Boolean,
    contactnumber: String,
    emailaddress: String,
    interestyes: Boolean,
    interestno: Boolean,
    a_date: Date
  });
  
  // Compile model from schema
  var VolunteerModel = mongoose.model('VolunteerModel', VolunteerModelSchema );
module.exports= {VendorModel, VolunteerModel}