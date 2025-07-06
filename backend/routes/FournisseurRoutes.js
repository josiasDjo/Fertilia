const express = require('express');
const router = express.Router();
const FournisseurRoutes = require('../controllers/fournisseursControlleur');

router.post('/ajouter-fournisseur', FournisseurRoutes.createFournisseur);
router.get('/', FournisseurRoutes.getAllFournisseur);
router.get('/fournisseur', FournisseurRoutes.getFournisseur)
router.put('/modifier-fournisseur', FournisseurRoutes.modifyFournisseur);
router.delete('/supprimer-fournisseur', FournisseurRoutes.deleteFournisseur);

module.exports = router;