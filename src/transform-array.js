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

function transform(arr) {
  console.log(arr);
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let finalArr = [];

  for (let i = 0; i < arr.length; i++)
    if (typeof arr[i] === "number") {
      finalArr.push(arr[i]);
    } else if (arr[i] === "--double-next" && i !== arr.length - 1) {
      finalArr.push(arr[i + 1]);
    } else if (arr[i] === "--double-next" && i === arr.length - 1) {
    } else if (arr[i] === "--discard-prev" && i !== 0) {
      finalArr.pop(finalArr[i - 1]);
    } else if (arr[i] === "--discard-prev" && i === 0) {
    } else if (arr[i] === "--discard-next") {
      arr.splice(i + 1, 1);
      i++;
    } else if (arr[i] === "--double-prev" && typeof arr[i - 1] === "number") {
      finalArr.push(arr[i - 1]);
    } else if (arr[i] === "--double-prev" && i === 0) {
    } else if (
      typeof arr[i] === "string" ||
      typeof arr[i] === "object" ||
      typeof arr[i] === "boolean"
    ) {
      finalArr.push(arr[i]);
    }
  return finalArr;
}

module.exports = {
  transform,
};
