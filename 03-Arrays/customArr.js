class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    // access first element

    const firstItem = this.data[0];

    // re-index [1,2,3]->[0,1,2]

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  unshift(item) {
    this.data[this.length] = item;

    this.length++;

    for (let i = 0; i < this.length; i++) {}
  }
  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("banana");
myNewArray.push("grapes");
console.log(myNewArray);
// console.log(myNewArray.pop());
// console.log(myNewArray.shift());

// console.log(myNewArray.deleteByIndex(3));
console.log(myNewArray.unshift("popmogranate"));
console.log(myNewArray);
