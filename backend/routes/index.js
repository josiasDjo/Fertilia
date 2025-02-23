var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../../views/index.ejs');
});

router.get('/users/mon-profile', (req, res) => {
  console.log('Mon profile');
  res.render('dashboard');
});

module.exports = router;
