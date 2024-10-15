class Stack {
    constructor() {
      this.items = [];
      this.count = 0;
    }
  
    // add(element){
    //     this.items.push(element)
    // }
  
    //own push method
  
    push(element) {
      this.items[this.count] = element;
      console.log(`${element}, added to ${this.count}`);
      this.count += 1;
      return this.count - 1;
    }
  
    // remove(){
    //     this.items.pop()
    // }
  
    //own pop method
  
    pop() {
      if (this.count == 0) {
        return undefined;
      }
      let deleteItem = this.items[this.count - 1];
      this.count -= 1;
      console.log(`${deleteItem}, removed!`);
      return deleteItem;
    }
  
    size() {
      this.items.length;
    }
  
    isEmpty() {
      this.items.length === 0;
    }
  
    peek() {
      if (!this.isEmpty()) {
        console.log(`${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
      }
      return null;
    }
    print() {
      console.log(this.items.toString());
    }
  }
  
  const stack = new Stack();
  
  stack.push(20);
  stack.push(2);
  stack.push(21);
  stack.push(22);
  stack.push(23);
  stack.push(24);
  stack.peek();
  
  stack.print();
  