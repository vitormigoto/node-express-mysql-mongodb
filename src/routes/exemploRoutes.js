const express = require('express');
const router = express.Router();

const exemploController = require('../controllers/ExemploController');

router.get('/', exemploController.getExemplo);
router.get('/:id', exemploController.getExemploById);

module.exports = router;