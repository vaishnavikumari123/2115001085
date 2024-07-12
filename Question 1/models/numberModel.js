const NumberModel = require('../../models/numberModel');


class NumberModel {
    constructor(numbers) {
      this.numbers = numbers;
    }
  
    addNumber(number) {
      this.numbers.push(number);
    }
  
    getNumbers() {
      return this.numbers;
    }
  
    getAverage() {
      return this.numbers.reduce((acc, current) => acc + current, 0) / this.numbers.length;
    }
  }
  
  module.exports = NumberModel;