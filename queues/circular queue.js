class CircularQueue {
    constructor(capacity) {
        this.collection = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1
        this.front = -1
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.collection[this.rear] = element;
            this.currentLength++

            if(this.front === -1) {
                this.front = this.rear
            }
        } else {
            return console.log(`Cannot enqueue "${element}". Queue is already full`)
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return null
        } 
        const toRemove = this.collection[this.front];
        this.collection[this.front] = null;
        //changing the front to the next elemnt since the previoud front is now null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1

        if(this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }

        return toRemove;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.collection[this.front];
        }
    }

    log() {
        if(this.isEmpty()) {
            console.log("Queue is empty")
        } else {
            let i
            let str = ''

            for(i = this.front; i !== this.rear ; i = (i + 1) % this.capacity){
                str += this.collection[i] + ' '
            }

            str += this.collection[i]
            console.log(str)
        }
    }
}


const queue = new CircularQueue(4);
queue.enqueue("C_person_1");
queue.enqueue("C_person_2");

queue.log()
console.log(`Is the queue full? - ${queue.isFull()}`)

console.log('\n\tEnqueuing more')
queue.enqueue("C_person_3");
queue.enqueue("C_person_4");
queue.log()
console.log(`Is the queue full? - ${queue.isFull()}`)

console.log('\n\tEnqueuing more than capacity')
queue.enqueue("C_person_5"); //Expected: Cannot enqueue C_person_5. Queue is already full
queue.enqueue("C_person_6"); //Expected: Cannot enqueue C_person_6. Queue is already full

console.log(`\nFirst on the queue is ${queue.peek()}`)

console.log('\n\tDequeue Fn')
console.log(`Dequeueing "${queue.dequeue()}"`);
queue.log()
console.log(`Is the queue still full? - ${queue.isFull()}`)

console.log(`First on the queue is now "${queue.peek()}"`)


