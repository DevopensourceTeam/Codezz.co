/**
 * Module dependencies.
 */

var express = require('express');
var session = require('express-session');

var MongoStore = require('connect-mongo')(session);
var path = require('path');
var mongoose = require('mongoose');

/**
 * API keys and Passport configuration.
 */

var secrets = require('./config/secrets');


/**
 * Create Express server.
 */

var app = express();

/**
 * Connect to MongoDB.
 */

mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});



var Exercise = require('./models/Exercise');
var Language = require('./models/Language');

  var exercise1 = new Exercise({
    name: "Ejercicio1",
    level: 1,
    description: "Descripcion1",
    solution: "l1",
    opciones: [{
      answer: "answer1",
      idelement: "l1" 
    },{
      answer: "answer2",
      idelement: "l2" 
    }]
  });
  exercise1.save();

  var exercise2 = new Exercise({
    name: "Ejercicio2",
    level: 2,
    description: "Descripcion2",
    solution: "l2",
    opciones: [{
      answer: "answer2",
      idelement: "l2" 
    },{
      answer: "answer3",
      idelement: "l3" 
    }]
  });
  exercise2.save();

  var exercise3 = new Exercise({
    name: "Ejercicio3",
    level: 3,
    description: "Descripcion3",
    solution: "l2",
    opciones: [{
      answer: "answer2",
      idelement: "l2" 
    },{
      answer: "answer3",
      idelement: "l3" 
    }]
  });
  exercise3.save();

  var exercise4 = new Exercise({
    name: "Ejercicio4",
    level: 4,
    description: "Descripcion4",
    solution: "l2",
    opciones: [{
      answer: "answer2",
      idelement: "l2" 
    },{
      answer: "answer3",
      idelement: "l3" 
    }]
  });
  exercise4.save();


  var language = new Language({
      name: 'Basic Code',
      description: 'Are you a beginner programmer and wants to learn the basic knowledge? This is your course.',
      url: 'basic-code',
      exercise: [exercise1,exercise2,exercise3,exercise4] 
  });
  language.save();

    var language = new Language({
      name: 'HTML5',
      description: 'Learn the structure of a web page. Create your own website from the beginning.',
      url: 'html5',
      exercise: [] 
  });
  language.save();

  var language = new Language({
      name: 'CSS3',
      description: 'Do you want to give a better design of your website? Learn it with this CSS course.',
      url: 'css',
      exercise: [] 
  });
  language.save();

  var language = new Language({
      name: 'XML',
      description: 'Wants communicate multiple applications together or integrate information? Create your own XML file to transfer data between them.',
      url: 'xml',
      exercise: [] 
  });
  language.save();

    var language = new Language({
      name: 'PHP',
      description: 'Server-side scripting language. Learn how to use it.',
      url: 'php',
      exercise: [] 
  });
  language.save();

    var language = new Language({
      name: 'JSON',
      description: 'Do you want to create JSON objects to transfer data to APIs, backend or frontend? Check this course and create your own JSON object.',
      url: 'json',
      exercise: [] 
  });
  language.save();

