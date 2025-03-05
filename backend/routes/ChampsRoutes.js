const express = require('express');
const router = express.Router();
const champController = require('../controllers/champController');

router.post('/nouveau-champ', champController.createChamp);
router.get('/', champController.getAllChamps);
router.get('terrain/:id', champController.getChampById);
router.put('/modifier/:id', champController.updateChamp);
router.delete('/delete/:id', champController.deleteChamp);

module.exports = router;
