// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 6/29/21
// Time: O(n) | Space: O(1)
function removeKthNodeFromEnd(head, k) {
  let node = head;
  let totalNodes = 0;
  while (node !== null) {
    ++totalNodes;
    node = node.next;
  }

  let idxToRemove = totalNodes - k - 1;
  let n = head;
  let counter = 0;
  if (idxToRemove === -1) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (counter != idxToRemove) {
    ++counter;
    n = n.next;
  }
  n.next = n.next.next;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
