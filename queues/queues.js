//queue data structure is a wy to hold data ..similar to stack but 
//..as stack is first in,last out ..queue is first in, first out, just like a real queue line
// stack --> stack of books, first book is under, last book is the first book you remove
//queue --> queue of people, first guy in, first guy out

//we can implement queues with arrays in JS 

function Queue() {
    let collection = []

    this.print = function() {
        console.log("Collection :", collection)
    }

    this.enqueue = function(element) {
        collection.push(element)
    }

    this.dequeue = function() {
        return collection.shift()  //remove the first element of the array
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length
    }

    this.isEmpty = function() {
        return (collection.length === 0)
    }
}


const q = new Queue();

q.enqueue('q')
q.enqueue('z')
q.enqueue('y')
q.enqueue('a')
q.print()

q.dequeue()
console.log("Front", q.front())
q.print()