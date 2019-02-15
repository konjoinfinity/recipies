const mongoose = require("..index.js");

const Schema = mongoose.Schema;

const Recipe = new Schema({
  title: String,
  description: String,
  instructions: String,
  ingredients: String,
  author: String
});

module.exports = mongoose.model("Recipe", Recipe);
