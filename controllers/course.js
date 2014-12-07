var md5 = require('MD5');
var Exercise = require('../models/Exercise');
var Language = require('../models/Language');
var User = require('../models/User');

/**
 * GET /
 * Game page.
 */
exports.index = function(req, res) {
	Language.find({}, function(error, language){
		res.render('course', {
			title: 'Courses', 
			courses: language
		});
	});
};

exports.viewCourse = function(req, res) {
	Language.findOne({'url': req.params.course}, function(error, language){

		if(!language){
			return res.redirect("/course");
		}

		Exercise.find({ '_id': { $in : language['exercise']}}, function(error, exercise){
			res.render('course/view', {
				title: req.params.course,
				courses: language,
				exercises: exercise
			});
		});
	});
};

exports.playLevel = function(req, res) {

	Language.findOne({'url': req.params.course}, function(error, language){

		if(!language){
			return res.redirect("/course");
		}

		Exercise.findOne({ '_id': { $in : language['exercise']}, 'level': req.params.level}, function(error, exercise){

			if(!exercise){
				return res.redirect("/course/"+req.params.course);
			}

			if(req.params.level>1){
				Exercise.findOne({ '_id': { $in : language['exercise']}, 'level': req.params.level-1}, function(error, lastexercise){
					User.findOne({'_id': req.user.id, 'progress':lastexercise['_id']}, function(err, user) {
						console.log(user);
						if (user) {
							res.render('course/level', {
								title: "Course",
								course_id: req.params.course,
								course: language,
								level_id: req.params.level,
								level: 	exercise
							});
						}else{
							return res.redirect("/course/"+req.params.course);
						}
					});
				});
			}else{
				res.render('course/level', {
					title: "Course",
					course_id: req.params.course,
					course: language,
					level_id: req.params.level,
					level: 	exercise
				});
			}
		});
	});
};

exports.validateLevel = function(userid, course, level, respuestas) {
	
	Language.findOne({'url': course}, function(error, data){
		language = data;
		Exercise.findOne({ '_id': { $in : data['exercise']}, 'level': level}, function(error, data){
			exercise = data;

				if(md5(exercise['solution'])==md5(respuestas)){
					User.findById(userid, function(err, user) {

					    if (err) return next(err);

					    if(user.progress.indexOf(exercise)>1){
					    	user.progress.push(exercise);
					    }

					    user.save(function(err) {
					      if (err) return next(err);
      					  console.log("Correct!!");
					    });
					});
				}else{
					console.log("wrong!!");
				}
		});
	});
};

exports.testDebug = function(course, level, data) {
	console.log("Prueba desde controller course");
	console.log(level);
	console.log(level);
	console.log(data);
};














