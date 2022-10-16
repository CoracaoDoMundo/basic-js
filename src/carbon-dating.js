const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === undefined || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15 || isNaN(sampleActivity) ) {
    return false;
  }

  let result = Math.ceil((Math.log(15 / sampleActivity )) / (0.693 / 5730));

  return result;

}

// t = ln(N0/N) * t(1/2) / k
// t1/2 - HALF_LIFE_PERIOD - 5730
// N - MODERN_ACTIVITY - 15
// N0 - sampleActivity
// k = 0.693

module.exports = {
  dateSample
};
