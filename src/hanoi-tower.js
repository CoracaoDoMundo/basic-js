const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

let disksNumber = 5;
let turnsSpeed = 4074;

function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  result.turns = Math.pow(2, disksNumber) - 1;

  let secondsSpeed = turnsSpeed / 60 / 60;

  result.seconds = Math.floor(result.turns / secondsSpeed);

  return result;
}

module.exports = {
  calculateHanoi,
};
