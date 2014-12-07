var Exercise = require('../models/Exercise');
var Language = require('../models/Language');


/**
 * GET /
 * Game page.
 */

exports.index = function(req, res) {
	var languages;
	Language.find({}, function(error, data){
		languages = data;
	});

	res.render('course', {
	title: 'Courses', courses: languages
	});
};

exports.viewCourse = function(req, res) {
	res.render('course', {
	title: req.params.course
	});
};

exports.playLevel = function(req, res) {
	req.params.course
	req.params.level
	res.render('course', {
	title: req.params.level
	});
};