const { db } = require('../../config/db');
const queries = require('../queries');

const { BaseUrlQuery } = queries;

const getExpensesPerMonth = async (id) => {
  try {
    const expense = await db.any(BaseUrlQuery.getUserExpensesPerMonth, [id]);
    return expense;
  } catch (error) {
    console.error(error.message);
  }
};

const getTopExpensesPerMonth = async (id) => {
  try {
    const topTrend = await db.any(BaseUrlQuery.getUserExpenseTopTrends, [id]);
    return topTrend;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getExpensesPerMonth,
  getTopExpensesPerMonth,
};
