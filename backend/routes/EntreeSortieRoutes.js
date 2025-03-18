const express = require('express');
const router = express.Router();
const EntreeSortieController = require('../controllers/EntreeSortieController');

router.post('/ajouter_action', EntreeSortieController.ajouterEntreeSortie);
// router.get('/', EntreeSortieController.getEntreeSortie);
// router.put('', EntreeSortieController);
// router.delete('', EntreeSortieController);

module.exports = router;