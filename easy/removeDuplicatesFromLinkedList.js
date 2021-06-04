// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 5/25/21
// Time: O(n) | Space: O(1)
function removeDuplicatesFromLinkedList(linkedList) {
  var curr = linkedList;
  var afterCurr = curr.next;
  while (afterCurr !== null) {
    while (curr.value === afterCurr.value) {
      if (afterCurr.next === null) {
        curr.next = null;
        return linkedList;
      }
      afterCurr = afterCurr.next;
    }
    curr.next = afterCurr;
    curr = afterCurr;
    afterCurr = curr.next;
  }
  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
