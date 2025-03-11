const express = require('express');
const router = express.Router();
const champController = require('../controllers/champController');
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
router.get('/users/mon-profile/flash', isAuthenticated, (req, res, next) => {
  req.flash('success_msg', 'Connexion réussie');
  return res.redirect('/users/mon-profile');
});
router.get('/users/mon-profile', isAuthenticated, (req, res, next) => {
  let champs = [];
  const users_id = req.session.users.id_user;
  console.log('User ID : ', users_id);
  const getChamps = async () => {
    const users_id = req.session.users.id_user;
    console.log('User ID : ', users_id);
    champs = await champController.getAllChamps(users_id);
    console.log('Champs : ', champs);
  }

  getChamps();
  try {
    res.render('dashboard', {
      id_user: req.session.users.id_user,
      nom: req.session.users.nom,
      prenom: req.session.users.prenom,
      email: req.session.users.email,
      role_id: req.session.users.role_id,
      MesChamps: champs,
    });
  } catch(err) {
    console.log('Une erreur s\'est produite lors de la rédirection : ', err);
  }

});

router.post('/logout', isAuthenticated, (req, res, next) => {
  const { element } = req.body;

  req.session.destroy((err) => {
    if (err) {
      console.Log("Erreur lors de la déconnexion", err);
      res.json({success: false, message: "Erreur lors de la déconnexion"});
    } 
    res.clearCookie('connect.sid');
    res.json({ success: true, message: "Déconnexion réussie"});
  })
});
module.exports = router;
