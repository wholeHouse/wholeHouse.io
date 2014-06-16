var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'wholeHouse' });
});

router.get('/who', function(req, res) {
  res.render('who', { title: 'Who is wholeHouse?' });
});
router.get('/what', function(req, res) {
  res.render('what', { title: 'What is wholeHouse?' });
});
router.get('/invest', function(req, res) {
  res.render('invest', { title: 'Like what you see?' });
});

module.exports = router;
