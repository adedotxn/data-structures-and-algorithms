const Stack = function() {
    this.count = 0; //to keep track of how many items are in the stack 
    this.storage = {};

    //to add a value to the end of a stack 
    this.push = function(value) {
        this.storage[this.count] = value; //pu the value at the end of the stack
        this.count++ //increases the count, so the next entered value will be placed at the last position, avoiding collision (i guess)
    }

    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }

        this.count-- //reduces count number
        const result = this.storage[this.count]  //this.count is the last item in the stack
        delete this.storage[this.count]
        return result;
    }

    this.size = function() {
        return this.count;
    }

    //return the last value in the stack 
    this.peek = function() {
        return this.storage[this.count - 1]
    }
}

const myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)

console.log("last value :", myStack.peek())
console.log("popped:", myStack.pop())
console.log("last value after pop :", myStack.peek())



