// 6/29/21
// Time: O(n) | Space: O(n)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let sum = (getSum(linkedListOne, "") + getSum(linkedListTwo, "")).toString().split("");
  let linkedListSum = new LinkedList(parseInt(sum[sum.length - 1]));
  let head = linkedListSum;
  for (let i = sum.length - 2; i >= 0; --i) {
    let node = new LinkedList(parseInt(sum[i]));
    head.next = node;
    head = node;
  }
  return linkedListSum;
}

function getSum(node, val) {
  while (node !== null) {
    val += node.value;
    node = node.next;
  }
  return parseInt(reverseString(val));
}

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; --i) {
    reversedString += str[i];
  }
  return reversedString;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
