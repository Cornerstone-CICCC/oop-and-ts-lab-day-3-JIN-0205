// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners (one runner moves one node at a time, the other one moves two nodes at a time)

const SLL = require("../lib/SLL");

function findMiddle(list) {
  // your code here
  let runner1 = list.head;
  let runner2 = list.head;
  while (runner2.next) {
    runner1 = runner1.next;
    runner2 = runner2.next.next;
  }
  const middle = runner1.data;
  return middle;
}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

console.log(findMiddle(list)); // Output: 3
