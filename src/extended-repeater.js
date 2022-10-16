// const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(
  str = "STRING_OR_DEFAULT",
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) {
  if (typeof addition !== "string") {
    addition = String(addition);
  }

  let string = String(str);

  let addElem = new Array(additionRepeatTimes);
  for (let i = 0; i < addElem.length; i++) {
    addElem[i] = addition;
  }

  let addElemStr = addElem.join(additionSeparator);

  let strArr = new Array(repeatTimes);

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = string + addElemStr;
  }

  return strArr.join(separator);
}

module.exports = {
  repeater,
};
