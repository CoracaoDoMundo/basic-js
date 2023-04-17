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
  }

  calculateDepth(arr) {
    let counter = 1;

    if (arr.some((el) => Array.isArray(el))) {
      arr = arr.flat();
      counter = counter + this.calculateDepth(arr);
    } 
      return counter;
  }
}

module.exports = {
  DepthCalculator,
};
