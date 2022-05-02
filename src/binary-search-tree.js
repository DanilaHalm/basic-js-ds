const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  result = [];

  root() {
    return this.result.length ? { data: this.result[0] } : null;
  }

  add(data) {
    this.result.push(data);
  }

  has(data) {
    return this.result.includes(data);
  }

  find(data) {
    return this.result.find((a) => a === data) ? { data: this.result.find((a) => a === data) } : null;
  }

  remove(data) {
    this.result = this.result.filter((a) => a !== data);
  }

  min() {
    return Math.min(...this.result);
  }

  max() {
    return Math.max(...this.result);
  }
}

module.exports = {
  BinarySearchTree,
};
