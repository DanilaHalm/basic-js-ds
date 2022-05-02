const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(l, k ) {
  // throw new NotImplementedError('Not implemented');
//   class ListNode {
//     constructor(){
//       this.value = l.filter(a=>a!=k);
//       this.next = null;
//       return this.value
//     }
//   }
//   const a = new ListNode()
// }


function removeKFromList(l, k) {
  let arr = listToArray(l);
  let filArr = arr.filter((a) => a !== k);

  return arrayToList(filArr);
}

function listToArray(list) {
  let arr = [];
  if (!list) return arr;
  let elem = list;
  while (elem.next) {
    arr.push(elem.value);
    elem = elem.next;
  }
  arr.push(elem.value);
  return arr;
}

function arrayToList(arr) {
  return arr.map((x) => new ListNode(x)).reduceRight((result, i) => {
      if (!result) return i;
      i.next = result;
      return i;
    }, null);
}

module.exports = {
  removeKFromList,
};