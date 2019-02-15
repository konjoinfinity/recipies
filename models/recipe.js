const mongoose = require("..index.js");

const Schema = mongoose.Schema;

const Recipe = new Schema({
  name: String,
  author: String,
  ingredients: String
});

module.exports = mongoose.model("Recipe", Recipe);
