const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

router.post('/signup', utilisateurController.createUtilisateur);
router.get('/:email', utilisateurController.getUtilisateur);
router.put('/:id', utilisateurController.updateUtilisateur);
router.delete('/:id', utilisateurController.deleteUtilisateur);

module.exports = router;