// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function insertAfterTarget(target, newElement) {
  // your code here
  let tempStack = new Stack();
  while (!stack.isEmpty()) {
    let curr = stack.pop();
    if (curr === target) {
      tempStack.push(newElement);
    }
    tempStack.push(curr);
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return stack;
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // A B X C D
