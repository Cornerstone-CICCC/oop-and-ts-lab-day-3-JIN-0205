// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

// function removeBetween(a, b) {
//   // your code here
// }
function removeBetween(a, b) {
  const tempStack = new Stack();
  let flag = false;
  let firstElement = null;

  while (!fruits.isEmpty()) {
    const curr = fruits.pop();

    if (!flag) {
      tempStack.push(curr);

      if (curr === b) {
        flag = true;
        firstElement = curr;
      }
    } else {
      if (curr === a) {
        tempStack.push(curr);
        break;
      }
    }
  }
  while (!tempStack.isEmpty()) {
    fruits.push(tempStack.pop());
  }
}
const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
