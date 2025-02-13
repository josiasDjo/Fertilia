var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API de gestion agricole en ligne 🚀');
});

module.exports = router;
