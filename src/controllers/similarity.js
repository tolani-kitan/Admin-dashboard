const similarityService = require('../services/similarity');
const AsynHandler = require('../helpers/AsyncHandler');

const getSimilarTrends = AsynHandler(async (req, res) => {
  const { id } = req.params;
  const expense = await similarityService.getSimilarTrends(id);

  res.status(200).json({ message: 'Similar User fetched Successfully', expense });
});

module.exports = {
  getSimilarTrends,
};
