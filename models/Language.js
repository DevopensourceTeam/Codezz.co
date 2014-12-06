var mongoose = require('mongoose');

var languageSchema = new mongoose.Schema({
  name: String,
  description: String,

  exercise: [{
    name: String,
    description: String,
    solution: String,
    options: [{
      answer: String,
      idelement: String 
    }]
  }]

});

module.exports = mongoose.model('Language', languageSchema);
