const { param } = require('express-validator');

exports.validate = (method) => {
  switch (method) {
    case 'id': {
      return [
        param('id', 'User IC is required')
          .exists()
          .isNumeric()
          .withMessage('ID should be a valid ID'),
      ];
    }

    default:
      break;
  }
};
