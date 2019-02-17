const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipes");
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const Recipe = new Schema({
  title: String,
  description: String,
  ingredients: String,
  instructions: String,
  author: String
});

module.exports = mongoose.model("Recipe", Recipe);

/*
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var mySchema = new Schema({
    // my props
});
*/
