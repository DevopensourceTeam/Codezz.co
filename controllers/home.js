/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
  	site: 'Home',
    title: 'Codezz',
    slogan: 'platform for beginners programmers'
  });
};
