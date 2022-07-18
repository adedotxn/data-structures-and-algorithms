//in a linked list, each node points to the next node

function LinkedList() {
    let length = 0;
    let head = null 

    //the head is the first node in a linked list 

    //think of the node as a box, it stores both the element and (a pointer to) the next node
    //so the .next refers to the node coming next  
    const Node = function(element) {
        this.element = element; //the  info
        this.next = null; //the link to the next node (the pointer?)
    }

    this.size = function(){
        return length;
    }

    this.head = function() {
        return head;
    }

    this.add = function(element) {
        //the Node itself contains the element and the next pointer to the next node
        const node = new Node(element);

        //if the LL is empty the head will be null, so we assign the head to this node
        //and since there's no next node yet since this is the first node in the LL, next is then set to null
        if(head === null) {
            head = node
        } else {
            // so there's more than one element in the Linked List;
            //we start from the head node (first node) 
            let currentNode = head;


            //get the next node of the currentNode
            //so if the next node to the head is not null, i.e the currentNode.next is equal to the next node 
            //set currentNode to be the next node till we get to a node that has it's next node to be null
            while(currentNode.next) {
                currentNode = currentNode.next
            }

            //so, when/if the next node of the currentNode is null (i.e : we're at the end of the LinkedList)
            // we then assign the next node of the currentNode to the new node we set on top (replace the next node with the node we want to add)
            // thereby having this new one's next node to be null :)
            currentNode.next = node
        }

        length++;
    }

    this.remove = function(element) {
        let currentNode = head;
        let previousNode;

        //since at first our current node is the head and if it's the head we want to remove
        //then we set the new head to the next node, capeesh;
        if(currentNode.element === element) {
            head = currentNode.next
        } else {
            //so if the current node does not have the elemt we're looking for
            //store the currentNode we're at as previous node
            //get the next node and run the loop again, till we find the element
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            //so, we found the element;
            //therefore, the previous node to the current node that we stored in the while loop while searching...
            //...it's next node is pointing the the currentNode we're trying to remove...
            //... so we assign it's next node it's next node to the next node of the currentNode, thereby eliminating the currentNode from their middle
            previousNode.next = currentNode.next
        }
        length --;
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.indexOf = function(element) {
        let currentNode = head;
        let index = -1;

        while(currentNode) {
            //i.e we start from head, so if head is not null, index increases to 0
            index++

            //so, if the element of the current node is what we're looking for
            //we return the index count of where we found it --> (we see the index count increases per loop iteration above)
            if(currentNode.element === element) {
                return index;
            }
            //if that's not the element, then we reset the currentNode to the next node of the currentNode...
            //...and the while loop runs again --> incrementing, checking and returning
            currentNode = currentNode.next
        }

        //if the element is not present, return -1
        return -1
    }

    this.elementAt = function(index) {
        let currentNode = head;
        let count = 0;

        // say, we're looking for the element at index 2
        // on the first run of the loop, count increases to 1, as 1 is still less than 2, 
        //the loop runs again, increasing count to 2
        // ..and setting the currentNode to it's next node
        // since count is now 2 and 2 is not less the 2 (i.e count is not less than index we're looking for), we break out of the loop
        while(count < index) {
            count++
            currentNode = currentNode.next;
        }
        //and return the element where we found count to not be less than index 
        return currentNode.element
    }


    //this.Add always adds to the end of the linked list but ...
    //.. this.addAt can add to the middle of the list
    this.addAt = function(index, element) {
        //assign a new node with node.element = the element passes in and node.next = null 
        let node = new Node(element)

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        //index we want to add at can't be higher than the length of the whole damn list;
        if(index > length) {
            return false
        }

        if(index === 0) {
            //means,we want to replace the head;
            //so, set the new node's next node to the currentNode (current head), making it not null
            //and make the new node the new head;
            node.next = currentNode;
            head = node
        } else {
            //we don't want to add at the head

            ///loop keeps running and reassigning the currentNode till currentIndex is no more less than the index we're looking for
            while(currentIndex < index) {
                currentIndex++ //increases till it equals the index
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            //the next node of the new node we're adding will now be the assigned to the
            //... node occupying the (current) index we want to add at 
            node.next = currentNode
            //then the node before our current node will now have it's .next pointing to the new node we're adding
            previousNode.next = node

            //so it's basically like we plug it in the middle of those two nodes, 
            //reassigning the next node of the previous node to this new node...
            //...and assigning the next node of the new node to the node occupying where we want to add at, thereby shifting it
        }
        length++;
    }

    this.removeAt = function(index) {
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if(index < 0 || index >= length) {
            return null 
            //this is because if the index is at the last there's no next node to point to or take care of, so we just set it to null
        }

        if(index === 0) {
            //assing the new head to the next node of the currentNode (our now previous head)
            head = currentNode.next;
        } else {
            while(currentIndex < index) {
                //standard procedure
                //increment the index we're at, store the previous node as the node we're at 
                //then set a new currentNode as the next node of the node we're at so that the loop runs again with another currentNode and process is repeated till condition is met;
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next
            }
            //self explanatory
            previousNode.next = currentNode.next
        }
        length--;
        return currentNode.element; //return the node we're removing
    }
}

const LL = new LinkedList();

LL.add("Zher0")
LL.add("Whone")
LL.add("Tewww")
LL.add("Fhreee")
LL.add("Phorr")


console.log(`Linked list initial size : ${LL.size()}`);

console.log(`Removed at the 3rd index: ${LL.removeAt(3)}`)
console.log(`\tNew size after these removals : ${LL.size()}`)

console.log(`New element at the new 3rd index: ${LL.elementAt(3)}`)

console.log(`New size after these removals : ${LL.size()}`)

console.log(`\t Phorr is at index ${LL.indexOf("Phorr")}`)

