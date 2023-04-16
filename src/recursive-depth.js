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
    this.result = 1;
  }

  calculateDepth(arr) {
    let flatArr;
    let solution = (arr) => {
      for (let el of arr) {
        if (Array.isArray(el)) {
          flatArr = el.flat();
          this.result++;
          solution(flatArr);
        }
      }
    };
    solution(arr);
    return this.result;
  }
}

// console.log();

module.exports = {
  DepthCalculator,
};
