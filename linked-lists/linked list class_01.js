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
    // 0(1) - constant time complexity ..since we already know the position is always going ot be at the start
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

    /* Since we have to traverse from the very beginning to get hold of the last element
     0(n) - linear time complexity ..(there is another way to append with an 0(1) time complexity though)*/
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

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return false
        }

        if(index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let prev = this.head
            //say we want to insert at index 4
            // so i < 3, then
            // loop runs at 0, so prev = Index 0's next (i.e whatever is at index 1)
            // loop then runs at 1, so prev = Index 1's next (i.e whatever is at index 2)
            // loop then runs at 2, so prev = Index 2's next (i.e whatever is at index 3 (thats what our pointer points to))
            
            // so we then assign our new node's next to whatever is the next of what is at index 3 (i.e index 4)
            // so our new node's next is now index 4 (or what will later become the previous index 4)
            // then we replace/assign the next of index 3(index 4) that we got earlier to our new node, 
            // replacing the value at index 4 with our new one and we've taken care of the previos index 4 by assigning it to our new node's next earlier (right on top)
            // so we've now inserted at index 4, and we're now pointing to the previous index 4
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return console.log(`No value to remove at index ${index}`)
        }
        let removedNode
        if(index === 0) {
            removedNode = this.head;
            this.head = this.head.next
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next;
            prev.next = removedNode.next
        }
        this.size--
        console.log(`Fn "removeFrom" removed '${removedNode.value}'`)
    }

    //removing head node --> 0(1)
    //removing at middle --> 0(n)
    remove(value) {
        if(list.isEmpty())  {
            return console.log(`Linked list is empty`)
        }

        if(this.head.value === value) {
            this.head = this.head.next
        } else {

            //say we have 1 -> 2 -> 3 -> 4 -> 5 -> 6 and i'm trying to remove 4
            //initial prev is 1
            //while loop checks if the next of prev (i.e 2) isn't null
            //and if the next of 1 is not equal to 3
            //loop reaches 3 and since the value of the next of 3 is 4, we break out of the loop..
            //..making our prev = 3 (since next of 3 is 4 and the loop won't run because of that)

            //we then check if the next of 3 is null (i.e if we're at the end of the Linked list)
            //if it isn't, we set removed node (i.e node to remove) to the next node of 3 (which is 4 [our target])
            //and then we replace 4 with 5 by assigning prev to next to the next of our removed node;
            // so 1 -> 2 -> 3 -> 5 -> 6

            let prev = this.head;

            //stops at the node right before the node that has the value we want to remove
            while(prev.next && prev.next.value !== value) {  
                prev = prev.next
            }

            if(prev.next) {
                let removedNode = prev.next;
                prev.next =  removedNode.next;
                this.size--
                return console.log(`Fn "remove" removed ${value}`)
            } else {
                return null
            }
        }
        this.size--
        console.log("Removed :", value)
    }

    search(value) {
        if(this.isEmpty()) {
            return -1
        }

        let i = 0;
        let curr = this.head
        while(curr) {
            if(curr.value === value) {
                console.log(`'${value}' is at index '${i}'`)
                return i
            }
            curr = curr.next;
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev;
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

console.log("\n\t Prepend - Append - Insert")
list.prepend(2)
list.log() //Expected output: 'List : 2'

list.prepend(4)
list.log() //Expected output: 'List : 4 2'

list.append(10)
list.log() //Expected output: 'List : 4 2 10'

list.append(12)
list.append(16)
list.log() //Expected output: 'List : 4 2 10 12 16'

list.insert(0,2) // 'List : 4 2 0 10 12 16'
list.insert("|",3)
list.log() //Expected output: 'List : 4 2 0 | 10 12 16'

list.insert(6,0)
list.insert(14,7)
list.log() //Expected output: 'List : 6 4 2 0 | 10 12 14 16'

console.log("\n\t Removing")
list.removeFrom(4)
list.log()

list.removeFrom(20)
list.remove(14)
list.log()
console.log(`Expected list length 7 and got ${list.getSize()}`)

console.log("\n\t Searching")
list.search(16)
console.log(list.search(75)) 

console.log("\n\t Reversing")
list.log()
list.reverse()
list.log()
