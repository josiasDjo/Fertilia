const express = require('express');
const router = express.Router();
const champController = require('../controllers/champController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const authenticateToken = require('../middlewares/authenticateToken')

router.post('/nouveau-champ', isAuthenticated, authenticateToken, champController.createChamp);
router.get('/terrain/getAll',authenticateToken, champController.getAllChamps);
// router.get('terrain/:id', isAuthenticated, champController.getChampById);
router.put('/modifier/:id', isAuthenticated, authenticateToken, champController.updateChamp);
router.delete('/delete/:id', isAuthenticated, authenticateToken, champController.deleteChamp);

module.exports = router;
