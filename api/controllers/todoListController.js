'use strict';

var mongoose = require('mongoose'),
  Place = mongoose.model('Places');



exports.list_all_places = function(req, res) {

  Place.find({}, function(err, place) {
    if (err)
      res.send(err);
    res.json(place);
  });
};
/*
exports.search_places = function(req, res) {
  //console.log(req.body.service)
  Place.find({'service':req.body.service,'service_id':req.body.service_id}, function(err, place) {
    if (err)
      res.send(err);
    //res.json(place);
    var Objeto = {};
    Objeto["excelente"]= place.filter(function(item){return (item.score==5)}).length;
    Objeto["bueno"]= place.filter(function(item){return (item.score==4)}).length;
    Objeto["medio"]= place.filter(function(item){return (item.score==3)}).length;
    Objeto["regular"]= place.filter(function(item){return (item.score==2)}).length;
    Objeto["malo"]= place.filter(function(item){return (item.score==1)}).length;
    res.json(Objeto);
    //console.log(place.filter(function(item){return (item.score==5)}).length)
    //console.log(place.filter(function(item){return (item.score==4)}).length)
    //console.log(place.filter(function(item){return (item.score==3)}).length)
    //console.log(place.filter(function(item){return (item.score==2)}).length)
    //console.log(place.filter(function(item){return (item.score==1)}).length)
  });
};
*/


exports.create_a_place = function(req, res) {
  var new_place = new Place(req.body);
  new_place.save(function(err, place) {
    if (err)
      res.send(err);
    res.json(place);
  });
};

exports.read_a_place = function(req, res) {
  Place.findById(req.params.placeId, function(err, place) {
    if (err)
      res.send(err);
    res.json(place);
  });
};

exports.update_a_place = function(req, res) {
  Place.findOneAndUpdate({_id:req.params.placeId}, req.body, {new: true}, function(err, place) {
    if (err)
      res.send(err);
    res.json(place);
  });
};
// Place.remove({}).exec(function(){});
exports.delete_a_place = function(req, res) {

  Place.remove({
    _id: req.params.placeId
  }, function(err, place) {
    if (err)
      res.send(err);
    res.json({ message: 'Place successfully deleted' });
  });
};
