class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    //NB : root node is also a parent node
    insertNode(parent, newNode) {
        //if the new node we want to insert is less than the parent node of wherever it's at
        //..we put it on the left side of the parent node
        // if there's already sth in the root node's left
        // ...we run the function again (recursively) with whatever is at the left of the parent(i.e root, in this case) node
        // now if there's sth here again, run the function again but now with what's on the left
        //...of this parent node ...this goes on till we find a parent node with an empty left then voila!, we insert

        if(newNode.value < parent.value) {
            if(parent.left === null) {
                parent.left = newNode
            } else {
                this.insertNode(parent.left, newNode)
            }
        } else {
            if(parent.right === null) {
                parent.right = newNode
            } else {
                this.insertNode(parent.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false;
        } else {
            if(value === root.value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    searchWithLoop(value) {
        let current = this.root;

        while(current) {
            if(value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    //Traversal -> DFS

    preOrder(root) {
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        } 
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    //Traversal -> BFS

    levelOrder() {
        //**try the optimised queue implementation in the queue folder?
        const Queue = [];
        Queue.push(this.root)//enqueue
        while(Queue.length) {
            let curr = Queue.shift() //removes first elemnt of the array --> dequeue
            console.log(curr.value)

            if(curr.left) {
                Queue.push(curr.left)
            }

            if(curr.right) {
                Queue.push(curr.right)
            }
        } 
    }


    min(root) {
        //Fn just keeps going to the left till there's no more left value 
        //...then we return the value of that node since it's the leftmost
        if(!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if(!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if(root === null) {
            return root
        }

        // 'if' and 'else if' methods are used to find the value from the tree recursively
        //when it's found that value === root.value, Fn is 'else' block runs
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            //node is a leaf node
            if(!root.left && !root.right) {
                return null
            }

            //'if' & 'else if' --> when node has only one child node
            // 'else' block --> when node has both children.
            if(!root.left) {
                return root.right
            } else if(!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.left)
        }
        return root
    }
}

const bst = new BinarySearchTree()
console.log(`Is the BST empty? ${bst.isEmpty()}`)  //Expected output : true

console.log("\n\t BST Insertion")
bst.insert(10) 
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(17)
bst.insert(11)
bst.insert(2)
bst.insert(4)
bst.insert(6)
bst.insert(9)

console.log(`Is the BST still empty? ${bst.isEmpty()}`) //Expected ouput : false

/*
    // SEARCH
console.log("\n\t BST Search_with root")
console.log(`is "5" in the binary tree? ${bst.search(bst.root,5)}`) //Expected output : true
console.log(`is "3" in the binary tree? ${bst.search(bst.root,3)}`) //Expected output : true
console.log(`is "50" in the binary tree? ${bst.search(bst.root,50)}`) //Expected output : false

console.log("\n\t BST Search_with loop")
console.log(`is "5" in the binary tree? ${bst.searchWithLoop(5)}`) //Expected output : true
console.log(`is "3" in the binary tree? ${bst.searchWithLoop(3)}`) //Expected output : true
console.log(`is "50" in the binary tree? ${bst.searchWithLoop(50)}`) //Expected output : false

*/


    // DEPTH FIRST SEARCH
console.log("\n Depth First Search")
console.log("\t PreOrder")
bst.preOrder(bst.root)

console.log("\t inOrder")
bst.inOrder(bst.root)

console.log("\t postOrder")
bst.postOrder(bst.root)

    // BREADTH FIRST SEARCH
console.log("\t levelOrder")
bst.levelOrder(bst.root)

/*
    // MIN & MAX
console.log("\n Min & Max")
console.log(`Min value of the tree is ${bst.min(bst.root)}`)
console.log(`Max value in the tree is ${bst.max(bst.root)}`)

    //DELETION
console.log("\n Delete")
let toDelete = 3
console.log(`\t Before deleting ${toDelete}`)
bst.levelOrder(bst.root)
bst.delete(toDelete)
console.log(`\n\t Removed ${toDelete}`)
bst.levelOrder(bst.root)
*/






