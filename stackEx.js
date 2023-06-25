const _arr = Symbol();
const _count = Symbol();

class Stack {
  constructor() {
    this[_arr] = [];
    this[_count] = 0;
  }

  get count() {
    return this[_count];
  }

  push(item) {
    this[_arr].push(item);
    this[_count]++;
  }

  pop() {
    if (this[_count] > 0) {
      this[_count]--;
      this[_arr].pop();
    } else throw new console.error("empty stack");
  }

  peek() {
    if (this[_count] > 0) {
      return this[_arr][Number(this[_count]) - 1];
    }
    throw new Error("empty stack");
  }
}
///
const s = new Stack();
