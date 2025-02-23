const express = require('express');
const router = express.Router();
const StockController = require('../controllers/stockController');

router.get('/user/mon-compte', StockController.getAllProducts);
router.get('/user/mon-compte/recherche', StockController.getProduct);
router.post('/user/mon-compte/ajouter-produit', StockController.addProduct);
router.put('/user/mon-compte/modifier-produit', StockController.updateProduct);
router.delete('/user/mon-compte/supprimer-produit', StockController.deleteProduct);