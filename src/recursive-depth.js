const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

// let arr = [1, 2, 3, [4, 5]];

class DepthCalculator {

  constructor() {
    this.result = 0
  }

  calculateDepth(arr) {

    if (arr.length === 0) {
      return 0;
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) === true) {
        result++;
        calculateDepth(arr[i]);
      }
      return this.result;
    }
  }
}

// console.log();

module.exports = {
  DepthCalculator,
};
