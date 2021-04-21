const expenseService = require('../services/expense');
const AsynHandler = require('../helpers/AsyncHandler');

const getExpensesPerMonth = AsynHandler(async (req, res) => {
  const { id } = req.params;
  const expense = await expenseService.getExpensesPerMonth(id);

  res.status(200).json({ message: 'Expense fetched Successfully', expense });
});

const getTopExpensesPerMonth = AsynHandler(async (req, res) => {
  const { id } = req.params;
  const expense = await expenseService.getTopExpensesPerMonth(id);

  res.status(200).json({ message: 'Top Expense Trend Fetched Successfully', expense });
});

module.exports = {
  getExpensesPerMonth,
  getTopExpensesPerMonth,
};
