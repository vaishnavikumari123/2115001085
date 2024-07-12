const NumberService = require('../services/numberService');
const timeout = require('../utils/timeout');

class AverageController {
  async getAverage(req, res) {
    const type = req.params.type;
    const windowSize = 10;
    const numberService = new NumberService();

    try {
      const numbers = await numberService.fetchNumbers(type);
      const numberModel = await numberService.storeNumbers(numbers);

      if (numberModel.getNumbers().length < windowSize) {
        const average = numberModel.getAverage();
        res.json({
          windowPrevState: [],
          windowCurrState: numberModel.getNumbers(),
          numbers,
          avg: average.toFixed(2),
        });
      } else {
        const oldestNumber = numberModel.getNumbers().shift();
        numberModel.addNumber(numbers[0]);
        const average = numberModel.getAverage();
        res.json({
          windowPrevState: [oldestNumber],
          windowCurrState: numberModel.getNumbers(),
          numbers,
          avg: average.toFixed(2),
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error calculating average' });
    }
  }
}

module.exports = AverageController;