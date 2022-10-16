// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

let arr = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];

function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let finalArr = [];

  for (let i = 0; i < finalArr.length; i++)
    if (typeof arr[i] === Number) {
      finalArr.push(arr[i])
      console.log(finalArr);
    } else {
      if (arr[i] === "--double-next" && i !== arr.length - 1) {
        finalArr.push(arr[i + 1])
      } else if (arr[i] === "--discard-prev" && i !== 0) {
        finalArr.pop(finalArr[i - 1]);
      } else if (arr[i] === "--discard-next" && i !== arr.length - 1) {
        finalArr.pop(finalArr[i + 1]);
      } else if (arr[i] === "--double-prev" && i !== 0) {
        finalArr.push(arr[i - 1]);
      }
      return finalArr;
      }
    }


console.log(transform(arr));

// module.exports = {
//   transform,
// };
