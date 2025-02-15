const express = require('express');
const router = express.Router();
const champController = require('../controllers/champController');

router.post('/', champController.createChamp);
router.get('/', champController.getAllChamps);
router.get('/:id', champController.getChampById);
router.put('/:id', champController.updateChamp);
router.delete('/:id', champController.deleteChamp);

module.exports = router;
