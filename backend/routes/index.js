var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../../views/index.ejs');
});

router.get('/users/mon-profile', (res, req) => {
  console.log('Mon profile');
  return res.render('../../views/agriculteurs/dashboard.ejs');
  // res.render('dashboard', {
  //     id_user: id_user.req.session.users,
  //     nom: nom.req.session.users,
  //     prenom: nom.req.session.users,
  //     email: email.req.session.users,
  //     role_id: role_id.req.session.users
  // });
});

module.exports = router;
