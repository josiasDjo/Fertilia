var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../../views/index.ejs');
});

router.get('/users/mon-profile', (req, res, next) => {
  console.log(`Mon profile, ID: ${id_user}, Prénom: ${prenom}`);
  try {
    res.render('dashboard', {
      id_user: req.session.users.id_user,
      nom: req.session.users.nom,
      prenom: req.session.users.prenom,
      email: req.session.users.email,
      role_id: req.session.users.role_id,
    });
  } catch(err) {
    console.log('Une erreur s\'est produite lors de la rédirection : ', err);
  }

});

module.exports = router;
