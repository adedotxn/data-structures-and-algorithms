class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    log() {
        if(this.isEmpty()) {
            console.log("The list is empty")
        } else {
            let currentNode = this.head;
            let listValues = ''

            while(currentNode) {
                listValues += `${currentNode.value} `
                currentNode = currentNode.next
            }
            console.log("List:", listValues)
        }
    }

    // 0(1) - time complexity
    prepend(value) {
        const node = new Node(value)

        //since we're always adding to the front and the first node inserted will bw the last
        // tail will have already been set at the beginning to point to the first node inserted 
        //..which will always be the last node in the linked list when using the prepend method
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    // 0(1) - time complexity unlike LL without tail pointer
    append(value) {
        const node = new Node(value)

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.size++
    }

    // 0(1) - time complexity
    removeFromFront() {
        if(this.isEmpty()) {
            return null
        }
        const value = this.head.value;
        //replace current head with it's next node.
        this.head = this.head.next;
        this.size--

        return value
    }

    //0(n) - time complexity
    removeFromEnd() {
        if(this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if(this.size === 1) {
            this.head = null;
            this.tail = null
        } else {
            let prev = this.head;

            while(prev.next !== this.tail) {
                prev = prev.next
            }

            //when the next of our current node is the tail node
            //assign the next node of our current node to null to remove the node from the end;
            //and set our new tail to our current node (which became the last)
            prev.next = null;
            this.tail = prev;
        }
        this.size--
        return value
    }
}

const list = new LinkedList();
console.log('List is empty?', list.isEmpty())
console.log('List size', list.getSize())
list.log() //Expected output: 'The list is empty'

console.log("\n\t Prepend")
list.prepend(2)
list.prepend(4)
list.prepend(6)

list.log() //Expected output: 'List :6 4 2'

console.log("\n\tAppend")
list.append(10)
list.append(8)
list.append(6)

list.log() //Expected output: 'List :6 4 2 10 8 6'

console.log("\n\tRemove from Front")
list.removeFromFront()
list.log() //Expected output: 'List :4 2 10 8 6'

console.log("\n\tRemove from Emd")
list.removeFromEnd()
list.log() //Expected output: 'List :4 2 10 8 '



