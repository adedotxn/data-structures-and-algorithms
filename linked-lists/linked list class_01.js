class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    // Adding elements at the beginning 
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            /* assign the new node's next to the current head to give our new node a next value
            then swap the current head for this new node 
            now the new head's next points to the previous head */
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)

        if(this.isEmpty()) {
            this.head = node
        } else {
            let currentNode = this.head 
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.size++
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

}

const list = new LinkedList();
console.log('List is empty?', list.isEmpty())
console.log('List size', list.getSize())
list.log() //Expected output: 'The list is empty'

list.prepend(10)
list.log() //Expected output: 'List : 10'

list.prepend(40)
list.prepend(70)
list.log() //Expected output: 'List : 70 40 10'

list.append(20)
list.log() //Expected output: 'List : 70 40 10 20'

list.append(12)
list.append(100)
list.prepend(0)
list.log() //Expected output: 'List :0 70 40 10 20 12 400'