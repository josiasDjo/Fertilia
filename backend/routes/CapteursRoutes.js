const express = require('express')
const router = express.Router()
const capteurController = require('../controllers/capteurController')

router.post('/add', capteurController.addCapteur)
router.get('/detail', capteurController.getCapteur)
router.get('/', capteurController.getAllCapteurOfAfield)
router.put('/update', capteurController.updateCapteur)
router.delete('delete', capteurController.deleteCapteur)

module.exports = router