class Queue {
    constructor() {
        this.collection = []
    }

    enqueue(element) {
        this.collection.push(element)
    }

    // 0(n)
    dequeue() {
        return this.collection.shift() //removes first elemnt in the collection -> first in queue
    }

    isEmpty() {
        return this.collection.length === 0;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.collection[0]
        }
        return null
    }

    size() {
        return this.collection.length
    }

    log() {
        console.log(this.collection.toString())
    }
}

const queue = new Queue();
queue.enqueue("person_1");
queue.enqueue("person_2");
queue.enqueue("person_3")
queue.enqueue("person_4")
queue.enqueue("person_5")
queue.log()

console.log(`first on the queue: ${queue.peek()}`)

console.log(`\n\tdequeue fn runs - ${queue.dequeue()}`)
queue.log()

