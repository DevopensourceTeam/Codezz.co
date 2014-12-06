var mongoose = require('mongoose');

var progressSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
  user: Array 
});

module.exports = mongoose.model('Language', languageSchema);
