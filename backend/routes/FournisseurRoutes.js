const express = require('express');
const router = express.Router();
const FournisseurRoutes = require('../controllers/fournisseursControlleur');

router.post('/ajouter-fournisseur');
router.get('/');
router.put('/modifier-fournisseur');
router.delete('/supprimer-fournisseur');

module.exports = router;