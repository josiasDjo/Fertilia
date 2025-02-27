var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../../views/index.ejs');
});

// Vérifier si l'utilisateur est bien authentifier
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.users) {
    return next();
  }
  req.flash('error_msg', 'Vous avez été déconnecter');
  return res.redirect("/");
}
router.get('/users/mon-profile', isAuthenticated, (req, res, next) => {
  try {
    req.flash('success_msg', 'Connexion réussie');
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
