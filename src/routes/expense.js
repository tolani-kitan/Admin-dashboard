const express = require('express');
const expenseController = require('../controllers/expense');
const { validate } = require('../validations/valid');

const router = express.Router();

router.get('/:id', validate('id'), expenseController.getExpensesPerMonth);
router.get('/top/:id', validate('id'), expenseController.getTopExpensesPerMonth);

module.exports = router;
