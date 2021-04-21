const express = require('express');
const userController = require('../controllers/users');
const { validate } = require('../validations/valid');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', validate('id'), userController.getUsersInfo);

module.exports = router;
