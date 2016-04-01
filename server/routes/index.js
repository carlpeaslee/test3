var express = require("express");
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/carl_test3');
mongoose.model('hero', new Schema ({'alias' : String, 'first_name' : String, 'last_name' : String, 'city' : String, 'power_name' : String}));
var Hero = mongoose.model('hero');

router.get('/hero', function (req, res) {
    Hero.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        res.send(data);
    });
});

router.post("/hero", function (req, res) {
    console.log(req.body);
    var newHero = new Hero ({'alias' : req.body.alias, 'first_name' : req.body.first_name, 'last_name' : req.body.last_name, 'city' : req.body.city, 'power_name' : req.body.power_name});
    newHero.save(function(err, data){
        if(err){
          console.log(err);
        }
        res.send(data);
    });
});

router.delete("/hero/:id", function (req, res) {
    console.log(req.params.id);
    Hero.find({ _id: req.params.id }).remove( function(err, data) {
        if(err){
          console.log(err);
        }

        res.send(data);
    });
});

router.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
