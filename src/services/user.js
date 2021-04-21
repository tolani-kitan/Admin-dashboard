const { db } = require('../../config/db');
const queries = require('../queries');

const { BaseUrlQuery } = queries;

const getUsers = async () => {
  try {
    const users = await db.any(BaseUrlQuery.getUsers);
    return users;
  } catch (error) {
    console.error(error.message);
  }
};

const userInfo = async (id) => {
  try {
    const user = await db.any(BaseUrlQuery.getDetails, [id]);
    return user;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  userInfo,
  getUsers,
};
