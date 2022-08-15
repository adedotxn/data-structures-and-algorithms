const  LinkedList = require("../linked-lists/linked list with tail_02");

//Stack -- LIFO --> Last In, First Out

class LinkedListStack  {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        return this.list.removeFromFront()
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    log() {
        return this.list.log()
    }
}

const stack = new LinkedListStack()
stack.log() //Expected output : The list is empty
stack.push(10)
stack.push(30)
stack.push(50)
stack.log() //Expected output : List: 50 30 10 

console.log(`Fn 'stack.pop()' removed '${stack.pop()}'`) //Removed 50 (Last in, First Out)
console.log(`First list value is '${stack.peek()}'`)  //Expected output : List: 30
stack.log() //Expected output : List: 30 10

