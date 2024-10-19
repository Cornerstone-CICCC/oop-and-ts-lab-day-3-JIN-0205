// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require("../lib/Stack");

function calcDistance(a, b) {
  // your code here
  let tempStack = new Stack();
  let count = 1;
  let aFlag = 0;
  let bFlag = 0;
  while (!students.isEmpty()) {
    let curr = students.pop();
    if (curr === a) {
      aFlag = count;
    }
    if (curr === b) {
      bFlag = count;
    }
    tempStack.push(curr);
    count++;
    if (aFlag !== 0 && bFlag !== 0) {
      break;
    }
  }
  while (!tempStack.isEmpty()) {
    students.push(tempStack.pop());
  }
  return aFlag - bFlag;
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance("Joe", "Jim");
console.log(distance); // 3
const distance2 = calcDistance("Joe", "Jill");
console.log(distance2); // 2
