// Binary Search Tree

/* for representing each node in the tree */
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    //it basically adds a node to a tree recursively starting from the root node till it meets the conditions necessary/appropriate to add data
    add(data) {
        const node = this.root; //reference to the root node
        if(node == null) {
            this.root = new Node(data)
            return;
        } else {
            const searchTree = function(node) {
                if(data  < node.data) { //remember .data, .left, .right are part of the properties of our Node class on top
                    if(node.left ===  null ) {
                        node.left = new Node(data)
                        return
                    } else if (node.left !== null) {
                        return searchTree(node.left) //this is a recursive function, as it sets the function, goes back up and run it again
                    }
                } else if( data > node.data) {
                    if(node.right === null ) {
                        node.right = new Node(data)
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                } else { //this means they're equal data is not > or < node.data
                    return null;
                }
            }
            return searchTree(node)
        }
    }


    findMin() {
        let current = this.root;

        //if the left node isn't null, it keeps going till the next left node is null,
        // then it stops at the current node that has it's next node to be null (doesn't go to the null node o)
        // then assigns it as our current node and return the data
        //it's going to return the minimum data because the left node is always smaller than it's parent node
        while(current.left !== null) {
            current = current.left
        }
        return current.data
    }

    findMax() {
        let current = this.root;

        //if the right node isn't null, it keeps going till the next right node is null,
        // then it stops at the current node that has it's next node to be null (doesn't go to the null node o)
        // then assigns it as our current node and return the data
        //it's going to return the minimum data because the right node is always bigger than it's parent node in a binary search tree
        while(current.right !== null) { 
            current = current.right
        }
        return current.data
    }

    find(data) {
        let current = this.root;
        while(current.data !== data) {
            //as per if the data we're looking for is smaller than the current node data in the loop, keep going left, you'll find it there
            if(data < current.data) {
                current = current.left
            } else {
                current = current.right
            }

            if(current === null) {
                return null
            }
        }
        return current //this will keep going back into the loop as current node till we find what we're looking for
    }

    isPresent(data) {
        let current = this.root;
        while(current) {
            //loop keeps running till data == current node's data das why it's first
            //so if it's not equal, conditions run, search goes in left/right direction relative to the data we're looking for
            //current is reset and the function below chavks again
            if(data === current.data) {
                return true; //found it!
            } 
            if(data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false //it's not in the tree
    }

    remove(data) {
        const removeNode = function(node, data) {
            if(node === null) {
                return null;
            } 

            if(data === node.data) {
                //SO we've found the node butttt...
                //...if the node has no children at all
                if(node.left === null && node.right === null) {
                    return null; //setting the reference to the node to null
                }
                //...if the node has no left child 
                if(node.left === null) {
                    return node.right;
                }
                //...if the node has no right side 
                if(node.right === null) {
                    return node.left
                }

                //...if the node has two children
                let tempNode = node.right

                //we're going to the most left subnode so that we use it to replace the node we're trying to remove that has two children
                //this makes sense because, that would be a value that when it replaces the node with children, it will be greater than the left node it inherits and less than the right node it inherits
                while(tempNode.left !== null) {
                    tempNode = tempNode.left
                }
                //so we then replace the node we're tring to remove with the sufficient data we found above
                node.data = tempNode.data
                //so we recursiverky call the reomveNode and pass in that node ????????
                //we call the recursive function again and the process runs again, till we're straight
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if(data < node.data) {
                node.left = removeNode(node.left, data)
                return node;
            } else {
                node.right = removeNode(node.right, data)
                return node;
            }
        }
        this.root = removeNode(this.root, data)
    }

    //BST TRAVERSAL & HEIGHT FUNCTIONS below

    isBalanced() {
        return(this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(node = this.root) {
        if(node == null) {
            return -1
        };

        let left = this.findMinHeight(node.left)
        let right = this.findMinHeight(node.right)

        if(left < right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    findMaxHeight(node = this.root) {
        if(node == null) {
            return -1
        };

        let left = this.findMaxHeight(node.left)
        let right = this.findMaxHeight(node.right)

        if(left > right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    inOrder() {
        if(this.root == null) {
            return null
        } else {
            let result = []
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data)
                node.right && traverseInOrder(node.right)
            }
            traverseInOrder(this.root); 
            return result;
        }
        //basically calls traverseInOrder with root of this node
        //gets the left node from the root it inputed earlier
        // then pushes the data of the left node into the array ..(the data is the child of the node)
        //then gets the right node after ????????????????????????????? IDKKKK (this is doing my head in, i'm hungry)
        
    }
    preOrder() {
        if(this.root == null) {
            return null
        } else {
            let result = []
            function traversePreOrder(node) {
                result.push(node.data)
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right)
            }
            traversePreOrder(this.root); 
            return result;
        }
    }

    postOrder() {
        if(this.root == null) {
            return null
        } else {
            let result = []
            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right)
                result.push(node.data)
            }
            traversePostOrder(this.root); 
            return result;
        }
    }

    levelOrder() {
        let result = [];
        let Q = [];
        if(this.root !== null) {
            Q.push(this.root)
            while ( Q.length > 0) {
                let node = Q.shift() //get first elemnt of the array
                result.push(node.data)

                if(node.left !== null) {
                    Q.push(node.left)
                };

                if(node.right !== null) {
                    Q.push(node.right)
                }
            }
            return result;
        } else {
            return null
        }
    }
}



const bst = new BinarySearchTree()

bst.add(1)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
bst.remove(7)
bst.add(10)

console.log("Min of bst", bst.findMin())
console.log("Max of bst", bst.findMax())
console.log("is 4 in the tree at all?",bst.isPresent(4))










const bstTH = new BinarySearchTree()
/*
9 --> ROOT, with children 4 & 17
    4 ---> left ROOT/PARENT NODE, with children 3 & 6
        3 ---> LEAF, zero branches
        6 ---> Sub Parent, with (LEAF) children 5 & 7
            5 --- >left LEAF, zero children/branches
            7 --- > rightLEAF, zero children/branches
    17 ---> right ROOT/PARENT NODE, with children 10 & 22
        10 ---> left LEAF, zero branches
        22 ---> right Sub Parent, with (left LEAF) child 20
            --> 20 --> left leaf, zero children/brances
*/



bstTH.add(9)
bstTH.add(4)
bstTH.add(17)
bstTH.add(3)
bstTH.add(6)
bstTH.add(22)
bstTH.add(5)
bstTH.add(7)
bstTH.add(20)
console.log("\n", "min height", bstTH.findMinHeight())
console.log("max height", bstTH.findMaxHeight())
console.log("balanced?", bstTH.isBalanced())

bstTH.add(10) //greater than root(9) so it goes to the right, less tham 17 so it goes to 17's left
console.log("new min height", bstTH.findMinHeight())
console.log("new max height", bstTH.findMaxHeight())
console.log("balanced this time?", bstTH.isBalanced())

console.log("inOrder", bstTH.inOrder())
console.log("preOrder", bstTH.preOrder())
console.log("postOrder", bstTH.postOrder())

console.log("levelOrder", bstTH.levelOrder())







