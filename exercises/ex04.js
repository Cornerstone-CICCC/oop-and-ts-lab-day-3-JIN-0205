// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function isPalindrome(queue) {
  // your code here
  let tempQueue = new Queue();
  let stack = [];
  let result = true;
  while (!queue.isEmpty()) {
    let curr = queue.dequeue();
    stack.push(curr);
    tempQueue.enqueue(curr);
  }
  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue());
  }
  let size = queue.size();
  for (let i = 0; i < size; i++) {
    let curr = queue.dequeue();
    let stackElement = stack.pop();

    if (curr !== stackElement) {
      result = false;
    }

    queue.enqueue(curr); // キューを元の順序に戻す
  }
  return result;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true
