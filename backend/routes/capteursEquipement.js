const express = require('express')
const router = express.Router()
const CapteurEquipement = require('../controllers/capteursEquipementController')

router.post('/add', CapteurEquipement.addCapteur)
router.get('/', CapteurEquipement.getCapteur)
router.get('/all-senors', CapteurEquipement.getCapteursChamps)
router.put('/modifier', CapteurEquipement.updateCapteur)
router.delete('delete', CapteurEquipement.deleteCapteur)

module.exports = router