// 6/30/21
// Time: O(1) | Space: O(1)
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minStack.pop();
    this.maxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    this.stack.push(number);

    if (this.minStack.length === 0 || this.maxStack.length === 0) {
      this.minStack.push(number);
      this.maxStack.push(number);
      return;
    }

    if (this.minStack[this.minStack.length - 1] > number) {
      this.minStack.push(number);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }

    if (this.maxStack[this.maxStack.length - 1] < number) {
      this.maxStack.push(number);
    } else {
      this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
    }
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  getMax() {
    return this.maxStack[this.maxStack.length - 1];
  }
}

let m = new MinMaxStack();
m.push(5);
m.push(7);
m.push(2);
console.log(m.getMin());
