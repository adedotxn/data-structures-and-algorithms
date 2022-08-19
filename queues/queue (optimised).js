class Queue {
    constructor() {
        this.collection = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.collection[this.rear] = element;
        this.rear++
    }

    //since it's an object, it is not indexed so front is just the index of the first key-value pair
    //when we dequeue the first value, the first element is now the element with key 1
    //so we advance our front pointer to automarically point to the new front
    // O(1)
    dequeue() {
        const item = this.collection[this.front];
        delete this.collection[this.front];
        this.front++
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.collection[this.front]
    }

    size() {
        return this.rear - this.front;
    }

    log() {
        console.log(this.collection)
        //console.log(Object.values(this.collection)) --> for just the values

    }
}


const queue = new Queue();
queue.enqueue("0_person_1");
queue.enqueue("0_person_2");
queue.enqueue("0_person_3")
queue.enqueue("0_person_4")
queue.enqueue("0_person_5")
queue.log()
console.log(`Size: ${queue.size()}`)


console.log(`\nfirst on the queue is: ${queue.peek()}`)

console.log(`\ndequeue fn runs - ${queue.dequeue()}`)
console.log("\nnew queue after dequeue operation: ")
queue.log()
console.log(`Size: ${queue.size()}`)
