const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.post('/admin/add-role', roleController.createRole);
router.get('/:id', roleController.getRole);
router.put('/:id', roleController.updateRole);
router.delete('/!:id', roleController.deleteRole)

module.exports = router;