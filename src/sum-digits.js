const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */


function getSumOfDigits(n) {
  let nStr = n.toString();
  let nArr = nStr.split("");

  let sum = nArr.reduce((a, b) => +a + +b);

  if (sum >= 10) {
    return getSumOfDigits(sum);
  } else {
    return sum;
  }
}

module.exports = {
  getSumOfDigits
};
