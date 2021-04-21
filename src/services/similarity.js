/* eslint-disable array-callback-return */
const { db } = require('../../config/db');
const queries = require('../queries');
const expenseService = require('./expense');

const { BaseUrlQuery } = queries;

const getSimilarTrends = async (id) => {
  try {
    const expense = await expenseService.getTopExpensesPerMonth(id);
    const similar = await db.any(BaseUrlQuery.getSimilarTrends, [id]);

    const arr = [];
    const newArray = [];
    similar.map((e) => {
      expense.map((r) => {
        if (e.category === r.category) {
          arr.push(e.user_id);
        }
      });
    });

    arr.forEach((c) => {
      if (!newArray.includes(c)) {
        newArray.push(c);
      }
    });

    return newArray;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getSimilarTrends,
};
