const  LinkedList = require("../linked-lists/linked list with tail_02");

//Queue -- FIFO --> First In, First Out

class LinkedListQueue  {
    constructor() {
        this.list = new LinkedList()
    }

    //always inserts new values at rear end, so it inserts in order of entry
    enqueue(value) {
        this.list.append(value)
    }

    //removes from head
    dequeue() {
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

const queue = new LinkedListQueue()
queue.log() //Expected output : The list is empty
queue.enqueue(10)
queue.enqueue(30)
queue.enqueue(50)
queue.log() //Expected output : List:  10 30 50 
console.log(`Queue length is = ${queue.getSize()}`)

console.log(`Fn 'queue.dequeue()' removed '${queue.dequeue()}'`) //Removed 10 (First in, First Out)
console.log(`First in queue is now : '${queue.peek()}'`)  //Expected output : List: 30
queue.log() //Expected output : List: 30 10

console.log(`Queue length is now = ${queue.getSize()}`)