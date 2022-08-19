class Stack {
    constructor() {
        this.items = []
    }

    // O(1)
    push(element) {
        this.items.push(element)
    }

    // O(1)
    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1] //element on top of the stack
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    log() {
        console.log(this.items.toString())
    }
}

const stack = new Stack()

stack.push("book_1 ")
stack.push("book_2 ")
stack.push("book_3 ")
stack.push("book_4 ")
stack.push("book_5")

stack.log()
console.log(`\nMost recent book in the stack is: ${stack.peek()}`)
console.log(`\nSize of the stack is: ${stack.size()}`)

console.log(`\nRemoving most recent book in the stack "${stack.pop()}"`)
stack.log()