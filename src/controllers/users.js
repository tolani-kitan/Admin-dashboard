const userService = require('../services/user');
const AsynHandler = require('../helpers/AsyncHandler');

const getUsers = AsynHandler(async (req, res) => {
  const users = await userService.getUsers();

  res.status(200).json({ message: 'Users fetched Successfully', users });
});

const getUsersInfo = AsynHandler(async (req, res) => {
  const { id } = req.params;
  const user = await userService.userInfo(id);

  res.status(200).json({ message: 'User fetched Successfully', user });
});

module.exports = {
  getUsers,
  getUsersInfo,
};
