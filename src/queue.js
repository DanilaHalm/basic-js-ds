const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class Queue {
//   constructor() {
//     this.value = []
//     this.next = this.value[0]
//   }

//   getUnderlyingList() {
//     throw new NotImplementedError('Not implemented');
//     return {value: this.value.join('.'), next: this.value[0]}
//   }

//   enqueue( value ) {
//     throw new NotImplementedError('Not implemented');
//     this.value.push(value)
//   }

//   dequeue() {
//     // throw new NotImplementedError('Not implemented');
//     let x = this.value[0]
//     this.value = this.value.slice(1)
//     return x
//   }
// }

class Queue {
  result = [];

  getUnderlyingList() {
    return this.result.reduceRight((result, i) => {
      if (!result) return i;
      i.next = result;
      return i;
    }, null);
  }

  enqueue(value) {
    this.result.push(new ListNode(value));
  }

  dequeue() {
    return this.result.shift().value;
  }
}

module.exports = {
  Queue,
};
