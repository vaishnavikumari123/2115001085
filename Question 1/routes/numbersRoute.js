const express = require('express');
const AverageController = require('../controllers/averageController');

const router = express.Router();

router.get('/:type', AverageController.getAverage);

module.exports = router;