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

console.log(`Is the BST still empty? ${bst.isEmpty()}`) //Expected ouput : false

console.log("\n\t BST Search_with root")
console.log(`is "5" in the binary tree? ${bst.search(bst.root,5)}`) //Expected output : true
console.log(`is "3" in the binary tree? ${bst.search(bst.root,3)}`) //Expected output : true
console.log(`is "50" in the binary tree? ${bst.search(bst.root,50)}`) //Expected output : false

console.log("\n\t BST Search_with loop")
console.log(`is "5" in the binary tree? ${bst.searchWithLoop(5)}`) //Expected output : true
console.log(`is "3" in the binary tree? ${bst.searchWithLoop(3)}`) //Expected output : true
console.log(`is "50" in the binary tree? ${bst.searchWithLoop(50)}`) //Expected output : false

console.log("\n Depth First Search")
console.log("\t PreOrder")
bst.preOrder(bst.root)

console.log("\t inOrder")
bst.inOrder(bst.root)

console.log("\t postOrder")
bst.postOrder(bst.root)



