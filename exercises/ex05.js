// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 4 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function mixQueue(queue) {
  // your code here
  const tempQueue1 = new Queue();
  const tempQueue2 = new Queue();
  const tempQueue3 = new Queue();

  while (!queue.isEmpty()) {
    let curr1 = queue.dequeue();
    let curr2 = queue.dequeue();
    let curr3 = queue.dequeue();
    tempQueue1.enqueue(curr1);
    tempQueue2.enqueue(curr2);
    tempQueue3.enqueue(curr3);
  }
  while (!tempQueue1.isEmpty()) {
    queue.enqueue(tempQueue1.dequeue());
  }
  while (!tempQueue2.isEmpty()) {
    queue.enqueue(tempQueue2.dequeue());
  }
  while (!tempQueue3.isEmpty()) {
    queue.enqueue(tempQueue3.dequeue());
  }
  return queue;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6
