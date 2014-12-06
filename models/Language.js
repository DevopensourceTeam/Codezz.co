var mongoose = require('mongoose');

var languageSchema = new mongoose.Schema({
  name: String,
  description: String,
  exercise: [{
    name: String,
    description: String,
    solution: String,
    opciones: [{
      answer: String,
      idelement: String 
    }]
  }]
});

module.exports = mongoose.model('Language', languageSchema);
