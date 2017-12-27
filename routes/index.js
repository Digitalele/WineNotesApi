var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tests' });
});

/* GET form page. */
router.get('/manage', function(req, res, next) {
  res.render('form', { title: 'Add' });
});

module.exports = router;
