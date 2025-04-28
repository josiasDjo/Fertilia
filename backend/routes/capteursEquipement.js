const express = require('express')
const router = express.Router()
const CapteurEquipement = require('../controllers/capteursEquipementController')

router.post('', CapteurEquipement.addCapteur)
router.get('', CapteurEquipement.getCapteur)
router.get('', CapteurEquipement.getCapteursChamps)
router.put('', CapteurEquipement.updateCapteur)
router.delete('', CapteurEquipement.deleteCapteur)

module.exports = router