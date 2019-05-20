'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  //service: String,
  //service_id: Number,
  //score: Number,
  //user_id: String,
  name: String,
  description: String,
  adress: String,
  grade: Number,
  visit: Number
});


module.exports = mongoose.model('Places', PlaceSchema);
