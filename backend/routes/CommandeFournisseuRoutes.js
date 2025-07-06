const express = require('express');
const router = express.Router();
const CommandeFournisseurController = require('../controllers/commandeFournisseurController');

router.post('/ajouter_commande', CommandeFournisseurController.ajouterCommande);
router.get('/', CommandeFournisseurController.getCommandes);
router.put('/modifier_commande', CommandeFournisseurController.modifierCommande);
router.delete('supprimer_command', CommandeFournisseurController.supprimerCommande);

module.exports = router;