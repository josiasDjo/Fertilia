const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.post('/admin/add-role', roleController.createRole);
router.get('/:id');
router.put('/:id');
router.delete('/!:id')

module.exports = router;