const express = require('express');
const similarController = require('../controllers/similarity');
const { validate } = require('../validations/valid');

const router = express.Router();

router.get('/:id', validate('id'), similarController.getSimilarTrends);

module.exports = router;
