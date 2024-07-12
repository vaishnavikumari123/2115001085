const axios = require('axios');
const NumberModel = require('./numberModel');

class NumberService {
  async fetchNumbers(type) {
    const url = `http://20.244.56.144/test/${type}`;
    const response = await axios.get(url);
    return response.data.numbers;
  }

  async storeNumbers(numbers) {
    const numberModel = new NumberModel([]);
    numbers.forEach((number) => numberModel.addNumber(number));
    return numberModel;
  }
}

module.exports = NumberService;