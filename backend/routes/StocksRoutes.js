const express = require('express');
const router = express.Router();
const StockController = require('../controllers/stockController');

router.get('/', StockController.getAllProducts);
router.get('/recherche', StockController.getProduct);
router.post('/ajouter-produit', StockController.addProduct);
router.put('/modifier-produit', StockController.updateProduct);
router.delete('/supprimer-produit', StockController.deleteProduct);

module.exports = router;