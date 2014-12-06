/**
 * GET /
 * Game page.
 */

exports.index = function(req, res) {
  res.render('game', {
    title: 'Game'
  });
};