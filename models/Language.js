var mongoose = require('mongoose');

var languageSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  exercise: [ {type : mongoose.Schema.ObjectId, ref : 'Exercise'} ]
});

module.exports = mongoose.model('Language', languageSchema);
