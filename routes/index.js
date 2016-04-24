var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET index2 page Green Side */
router.get('/index2', function(req, res, next) {
  res.render('index2', { title: 'Express' });
});

/* GET index2 page Blue Side */
router.get('/index3', function(req, res, next) {
  res.render('index3', { title: 'Express' });
});


module.exports = router;
