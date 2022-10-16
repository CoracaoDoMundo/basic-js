const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === "undefined") {
      this.chain.push("()");
      return this;
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !(isNaN(position)) &&
      position > 0 &&
      position <= this.chain.length &&
      (position ^ 0) === position
    ) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let arr = this.chain;
    arr.map(el => el = ( el ));
    let result = arr.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
