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
    name: "IF",
    level: 1,
    description: "Basic structure if - ",
    solution: "l1l5l4l3",
    opciones: [{
      answer: "if (CONDITION) {",
      idelement: "l1" 
    },{
      answer: "OPERATION",
      idelement: "l5" 
    },{
      answer: "}",
      idelement: "l4" 
    },{
      answer: "if (OPERATION) {",
      idelement: "l3" 
    },{
      answer: "CONDITION",
      idelement: "l2" 
    }]
  });
  exercise1.save();

  var exercise2 = new Exercise({
    name: "IF - ELSE",
    level: 2,
    description: "Descripcion2",
    solution: "l8l1l3l7l5",
    opciones: [{
      answer: "if (Has less legs than 4) {",
      idelement: "l2" 
    },{
      answer: "Is a human",
      idelement: "l8" 
    },{
      answer: "}",
      idelement: "l1" 
    },{
      answer: "else {",
      idelement: "l3" 
    },{
      answer: "Is an animal",
      idelement: "l7" 
    },{
      answer: "}",
      idelement: "l5" 
    },{
      answer: "else (",
      idelement: "l4" 
    },{
      answer: ")",
      idelement: "l6" 
    }]
  });
  exercise2.save();

  var exercise3 = new Exercise({
    name: "WHILE",
    level: 3,
    description: "Descripcion3",
    solution: "l5l2l1",
    opciones: [{
      answer: "while (Number less than 10)",
      idelement: "l5" 
    },{
      answer: "Increment number",
      idelement: "l2" 
    },{
      answer: "}",
      idelement: "l1" 
    },{
      answer: "while (Number greater than 10) {",
      idelement: "l4" 
    },{
      answer: "Decrement number",
      idelement: "l3" 
    }]
  });
  exercise3.save();

  var exercise4 = new Exercise({
    name: "SWITCH - CASE",
    level: 4,
    description: "Descripcion4",
    solution: "l5l2l4l9l1l8l7l3l6",
    opciones: [{
      answer: "switch (OPERATOR) {",
      idelement: "l5" 
    },{
      answer: "case OPERATOR is +",
      idelement: "l2" 
    },{
      answer: "Sum the numbers",
      idelement: "l4" 
    },{
      answer: "case OPERATOR is -",
      idelement: "l9" 
    },{
      answer: "Subtract the numbers",
      idelement: "l1" 
    },{
      answer: "case OPERATOR is *",
      idelement: "l8" 
    },{
      answer: "Multiply the numbers",
      idelement: "l7" 
    },{
      answer: "case OPERATOR is /",
      idelement: "l3" 
    },{
      answer: "Divide the numbers",
      idelement: "l6" 
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



  var exercise1 = new Exercise({
    name: "Basic Structure",
    level: 1,
    description: "Description ",
    solution: "l2l1l8l5l4l7l6l3",
    opciones: [{
      answer: "<html>",
      idelement: "l2" 
    },{
      answer: "<head>",
      idelement: "l1" 
    },{
      answer: "Head content",
      idelement: "l8" 
    },{
      answer: "</head>",
      idelement: "l5" 
    },{
      answer: "<body>",
      idelement: "l4" 
    },{
      answer: "Body content",
      idelement: "l7" 
    },{
      answer: "</body>",
      idelement: "l6" 
    },{
      answer: "</html>",
      idelement: "l3" 
    }]
  });
  exercise1.save();

  var exercise2 = new Exercise({
    name: "Content",
    level: 2,
    description: "Descripcion2",
    solution: "l10l4l8l2l7l6l9l1",
    opciones: [{
      answer: "<html>",
      idelement: "l10" 
    },{
      answer: "<head>",
      idelement: "l4" 
    },{
      answer: "<title> Website title </title>",
      idelement: "l8" 
    },{
      answer: "</head>",
      idelement: "l2" 
    },{
      answer: "<body>",
      idelement: "l7" 
    },{
      answer: "<h1> Hello World </h1>",
      idelement: "l6" 
    },{
      answer: "</body>",
      idelement: "l9" 
    },{
      answer: "</html>",
      idelement: "l1" 
    },{
      answer: "<head-title> Website title </head-title>",
      idelement: "l5" 
    },{
      answer: "<body-h1> Hello World </body-h1>",
      idelement: "l3" 
    }]
  });
  exercise2.save();

  var exercise3 = new Exercise({
    name: "HTML5 Tags",
    level: 3,
    description: "Descripcion3",
    solution: "l13l2l6l4l1l9l8l5l3l15l7l14l10",
    opciones: [{
      answer: "<html>",
      idelement: "l13" 
    },{
      answer: "<head>",
      idelement: "l2" 
    },{
      answer: "<title> Website title </title>",
      idelement: "l6" 
    },{
      answer: "</head>",
      idelement: "l4" 
    },{
      answer: "<body>",
      idelement: "l1" 
    },{
      answer: "<header>",
      idelement: "l9" 
    },{
      answer: "<h1> Header title </h1>",
      idelement: "l8" 
    },{
      answer: "</header>",
      idelement: "l5" 
    },{
      answer: "<footer>",
      idelement: "l3" 
    },{
      answer: "Footer content",
      idelement: "l15" 
    },{
      answer: "</footer>",
      idelement: "l7" 
    },{
      answer: "</body>",
      idelement: "l14" 
    },{
      answer: "</html>",
      idelement: "l10" 
    },{
      answer: "<foot>",
      idelement: "l6" 
    },{
      answer: "</foot>",
      idelement: "l11" 
    }]
  });
  exercise3.save();

  var exercise4 = new Exercise({
    name: "Additional elements",
    level: 4,
    description: "Descripcion4",
    solution: "l5l1l4l7l6l3",
    opciones: [{
      answer: "<table>",
      idelement: "l5" 
    },{
      answer: "<tr>",
      idelement: "l1" 
    },{
      answer: "<td> Hello </td>",
      idelement: "l4" 
    },{
      answer: "<td> World </td>",
      idelement: "l7" 
    },{
      answer: "</tr>",
      idelement: "l6" 
    },{
      answer: "</table>",
      idelement: "l3" 
    },{
      answer: "<td>",
      idelement: "l2" 
    },{
      answer: "</td>",
      idelement: "l10" 
    },{
      answer: "<tr> Hello </tr>",
      idelement: "l9" 
    },{
      answer: "<tr> World </tr>",
      idelement: "l8" 
    }]
  });
  exercise4.save();

  var language = new Language({
      name: 'HTML5',
      description: 'Learn the structure of a web page. Create your own website from the beginning.',
      url: 'html5',
      exercise: [exercise1,exercise2,exercise3,exercise4] 
  });
  language.save();


  var exercise1 = new Exercise({
    name: "Basic Structure",
    level: 1,
    description: "Description ",
    solution: "l1l5l2",
    opciones: [{
      answer: "tag {",
      idelement: "l1" 
    },{
      answer: "Content",
      idelement: "l5" 
    },{
      answer: "}",
      idelement: "l2" 
    },{
      answer: "tag (",
      idelement: "l4" 
    },{
      answer: ")",
      idelement: "l3" 
    }]
  });
  exercise1.save();

  var exercise2 = new Exercise({
    name: "Content",
    level: 2,
    description: "Descripcion2",
    solution: "l5l1l2",
   opciones: [{
      answer: "color: #000",
      idelement: "l5" 
    },{
      answer: "text-align: center",
      idelement: "l1" 
    },{
      answer: "padding-left: 20px",
      idelement: "l2" 
    },{
      answer: "color= #000",
      idelement: "l4" 
    },{
      answer: "text-align= center",
      idelement: "l3" 
    },{
      answer: "padding-left= 20px",
      idelement: "l6" 
    }]
  });
  exercise2.save();

  var exercise3 = new Exercise({
    name: "Strucutre + Content",
    level: 3,
    description: "Now let's merge level 1 and level 2 into a same exercise",
    solution: "l1l4l2l5l3",
    opciones: [{
      answer: "h1 {",
      idelement: "l1" 
    },{
      answer: "color: #000",
      idelement: "l4" 
    },{
      answer: "text-align: center",
      idelement: "l2" 
    },{
      answer: "padding-left: 20px",
      idelement: "l5" 
    },{
      answer: "}",
      idelement: "l3" 
    }]
  });
  exercise3.save();

  var exercise4 = new Exercise({
    name: "Custom CSS",
    level: 4,
    description: "Ok. Now you know how to add a style to HTML tags, but what happens if you want to give a different style item to the rest?",
    solution: "l3l2l1l7l5",
    opciones: [{
      answer: ".custom {",
      idelement: "l3" 
    },{
      answer: "color: #FFF",
      idelement: "l2" 
    },{
      answer: "font-weith: 20px",
      idelement: "l1" 
    },{
      answer: "text-align",
      idelement: "l7" 
    },{
      answer: "}",
      idelement: "l5" 
    },{
      answer: "-custom {",
      idelement: "l6" 
    },{
      answer: "weith-font: 20px",
      idelement: "l4" 
    }]
  });
  exercise4.save();

  var language = new Language({
      name: 'CSS3',
      description: 'Do you want to give a better design of your website? Learn it with this CSS course.',
      url: 'css',
      exercise: [exercise1,exercise2,exercise3,exercise4] 
  });
  language.save();


  var exercise1 = new Exercise({
    name: "Basic Structure",
    level: 1,
    description: "Description ",
    solution: "l8l2l5l4l3l7l1",
    opciones: [{
      answer: "<?xml version=\"1.0\" encoding=\"utf-8\"?>",
      idelement: "l8" 
    },{
      answer: "<tag1>",
      idelement: "l2" 
    },{
      answer: "Content tag 1",
      idelement: "l5" 
    },{
      answer: "</tag1>",
      idelement: "l4" 
    },{
      answer: "<tag2>",
      idelement: "l3" 
    },{
      answer: "Content tag 2",
      idelement: "l7" 
    },{
      answer: "</tag2>",
      idelement: "l1" 
    },{
      answer: "</xml>",
      idelement: "l6" 
    }]
  });
  exercise1.save();

  var exercise2 = new Exercise({
    name: "Content",
    level: 2,
    description: "XML es \"case sensitive\", trata a las mayúsculas y las minúsculas como caracteres diferentes. Si un elemento de XML está definido como \"Elemento\", no podemos usar \"elemento\" para referirnos a él.",
    solution: "l5l3l4l1l2l8l9",
    opciones: [{
      answer: "<?xml version=\"1.0\" encoding=\"utf-8\"?>",
      idelement: "l5" 
    },{
      answer: "<calendar>",
      idelement: "l3" 
    },{
      answer: "<Month> January </Month>",
      idelement: "l4" 
    },{
      answer: "<days> 31 </days>",
      idelement: "l1" 
    },{
      answer: "<month> April </month>",
      idelement: "l2" 
    },{
      answer: "<days> 30 </days>",
      idelement: "l8" 
    },{
      answer: "</calendar>",
      idelement: "l9" 
    },{
      answer: "</Calendar>",
      idelement: "l6" 
    },{
      answer: "<month> 30 </Month>",
      idelement: "l7" 
    }]
  });
  exercise2.save();


  var language = new Language({
      name: 'XML',
      description: 'Wants communicate multiple applications together or integrate information? Create your own XML file to transfer data between them.',
      url: 'xml',
      exercise: [exercise1,exercise2] 
  });
  language.save();


  var exercise1 = new Exercise({
    name: "Basic Structure",
    level: 1,
    description: "Description ",
    solution: "l3l1l4",
    opciones: [{
      answer: "<?php",
      idelement: "l3" 
    },{
      answer: "Functions",
      idelement: "l1" 
    },{
      answer: "?>",
      idelement: "l4" 
    },{
      answer: "<?php>",
      idelement: "l2" 
    },{
      answer: "</?>",
      idelement: "l5" 
    }]
  });
  exercise1.save();

  var exercise2 = new Exercise({
    name: "PHP inside HTML",
    level: 2,
    description: "PHP can also be introduced into an HTML file. In this exercise you can learn how is the structure organization",
    solution: "l3l4l5l7l1l8l2",
    opciones: [{
      answer: "<html>",
      idelement: "l3" 
    },{
      answer: "<head>",
      idelement: "l6" 
    },{
      answer: "<title> HTML Title </title>",
      idelement: "l4" 
    },{
      answer: "</head>",
      idelement: "l5" 
    },{
      answer: "<body>",
      idelement: "l7" 
    },{
      answer: "<?php print \"Hello World\" ?> ",
      idelement: "l1" 
    },{
      answer: "</body>",
      idelement: "l8" 
    },{
      answer: "</html>",
      idelement: "l2" 
    }]
  });
  exercise2.save();

  var language = new Language({
      name: 'PHP',
      description: 'Server-side scripting language. Learn how to use it.',
      url: 'php',
      exercise: [exercise1,exercise2] 
  });
  language.save();


  var exercise1 = new Exercise({
    name: "Key - Value",
    level: 1,
    description: "JSON is a format for data exchange. To start learning JSON, first we have to know JSON syntax. In this first exercise, choose the correct format.",
    solution: "l1",
    opciones: [{
      answer: " \"key\" : \"value\" ",
      idelement: "l1" 
    },{
      answer: " \"key\" = \"value\" ",
      idelement: "l2" 
    }]
  });
  exercise1.save();

  var exercise2 = new Exercise({
    name: "JSON Object",
    level: 2,
    description: "Now you know how to create a pair key-value data. Select the correct answer to create a JSON Object",
    solution: "l3",
    opciones: [{
      answer: " { \"Name\" : \"Apple\" , \"Amount\" : \"10\" } ",
      idelement: "l3" 
    },{
      answer: " ( \"Name\" : \"Apple\" , \"Amount\" : \"10\" ) ",
      idelement: "l2" 
    },{
      answer: " { \"Name\" : \"Apple\" ; \"Amount\" : \"10\" } ",
      idelement: "l4" 
    },{
      answer: " ( \"Name\" : \"Apple\" ; \"Amount\" : \"10\" ) ",
      idelement: "l1" 
    }]
  });
  exercise2.save();

  var exercise3 = new Exercise({
    name: "JSON Arrays",
    level: 3,
    description: "Cool!. In Json you can include arrays of JSON objects. Practice it creating one",
    solution: "l4l3l6l1",
    opciones: [{
      answer: " \"Fruit\" : [ ",
      idelement: "l4" 
    },{
      answer: " { \"Name\" : \"Apple\" , \"Amount\" : \"10\" }, ",
      idelement: "l3" 
    },{
      answer: " { \"Name\" : \"Pear\" , \"Amount\" : \"5\" } ",
      idelement: "l6" 
    },{
      answer: "]",
      idelement: "l1" 
    },{
      answer: " \"Fruit\" : ( ",
      idelement: "l2" 
    },{
      answer: " ) ",
      idelement: "l5" 
    }]
  });
  exercise3.save();

  var exercise4 = new Exercise({
    name: "Arrays of Arrays",
    level: 4,
    description: "Last exercice. Are you able to create an array containing arrays?",
    solution: "l5l4l8l7l12l9l1l3l2l10l6l11",
    opciones: [{
      answer: " \"Food\" : [ ",
      idelement: "l5" 
    },{
      answer: " { \"Fruit\" : [ ",
      idelement: "l4" 
    },{
      answer: " { \"Name\" : \"Apple\" , \"Amount\" : \"10\" }, ",
      idelement: "l8" 
    },{
      answer: " { \"Name\" : \"Pear\" , \"Amount\" : \"5\" } ",
      idelement: "l7" 
    },{
      answer: "]",
      idelement: "l12" 
    },{
      answer: "}",
      idelement: "l9" 
    },{
      answer: " { \"Verdure\" : [ ",
      idelement: "l1" 
    },{
      answer: " { \"Name\" : \"Tomato\" , \"Amount\" : \"6\" }, ",
      idelement: "l3" 
    },{
      answer: " { \"Name\" : \"Salad\" , \"Amount\" : \"2\" } ",
      idelement: "l2" 
    },{
      answer: "]",
      idelement: "l10" 
    },{
      answer: "}",
      idelement: "l6" 
    },{
      answer: "]",
      idelement: "l11" 
    }]
  });
  exercise4.save();

  var language = new Language({
      name: 'JSON',
      description: 'Do you want to create JSON objects to transfer data to APIs, backend or frontend? Check this course and create your own JSON object.',
      url: 'json',
      exercise: [exercise1,exercise2,exercise3,exercise4] 
  });
  language.save();
