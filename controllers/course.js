/**
 * GET /
 * Game page.
 */

exports.index = function(req, res) {
	
	res.render('course', {
	title: 'Courses'
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