# Tree

**DEFINITION** 

Tree is an abstract data type that represents a hierarchical tree structure with a set of connected nodes

A tree is a **hierarchical data structure**  that **consists of nodes connected by edges** . **It as a non linear data structure** compared to arrays, linked lists, stacks and queues which are linear data structures

Each node in the tree can be connected to many children (depending on the type of tree), but must be connected to exactly one parent, except for the root node, which has no parent.

- **Tree DS Illustration**
    
    Think of it like an organisation’s hierarchy, a CEO/Founder being the root node (i.e Start of the tree), roles branch out from under the CEO to left and right, right branch of the tree has the CTO and left side has the CFO, now the CEO and CFO branches are children nodes to the CEO root node/parent node and are leaf nodes because they currently have no children. Then the tree expands again, the CTO now gets 2/3 branches (i.e children nodes) under it — Say, Engineering Manager, Design Lead, Product Lead — now the CTO branch is now a Parent node to the EM, DL & PL nodes and no longer a leaf node. So, in summary, the Founder/CEO is the root node, CTO & CFO are it's children nodes. CTO is a parent node to it's own children nodes EM, DL & PL. CFO has no children so it's just a child node to CEO node and a leaf node, just like EM, DL & PL because they have no children nodes.
    

---

**TERMINOLOGIES**

- **Root node** — topmost node of the tree.
- **Height of a Node** — the height of a node is the **number of edges from the node to the deepest leaf** (i.e the longest path from the node to a leaf node).
- **Depth of a node** — the **number of edges from the root to the node**.
- **Height of a Tree** — **height of the root node** or the **depth of the deepest node**.
- **Degree of a Node** — the **total number of branches of that node.**
- **Minimum Height** — **distance** from the **root node to the first leaf node without two children**
- **Maximum Height** — distance from the **root node to the bottommost node**

(ref : [https://www.programiz.com/dsa/trees](https://www.programiz.com/dsa/trees))

---

**Application/Usage**

- DOM
- File systems for directory structure
- Chatbots

---

**BINARY TREE**

BT is a tree whose elements have at most 2 children. Since each element in a binary tree can have only 2 children, we typically name them the left and right child/nodes.

**Binary Search Tree**

A binary search tree is a binary tree that maintains that 

- The value of each left node must be smaller than the value of it's parent node.
- The value of each right node must be greater than the value of it's parent node.
- Each node must have at most 2 children.

**Binary Search Tree Operations**

- **Insertion** : to add a node to the tree.
- **Search** : to find a node given it's value.
- **Depth First Search** and **Breadth First Search** : to visit/traverse all nodes in the tree.
- **Deletion** : to remove a node given it's value.

**Binary Search Tree Applications/Usage**

- Searching, Sorting.
- Implement ADT (abstract data types) such as lookup tables and priority queues.

---

**BINARY TREE TRAVERSAL**

**Depth First Search**

- **In-Order Traversal** — Search begins at the left most node to the right most node.
- **Pre-Order Traversal** — It's basically going to explore the root node/parent of each node before it's children nodes or leaf node  ..basically focuses on the root node first and then it's children then moves the next root node
- **Post-Order Traversal** — basically explores the leaf nodes before the root/parent node ..leaf nodes of the right before leaf nodes of the left, then lastly the root node.

**Breadth First Search**

- **Level-Order Traversal —** explores a level of the tree first before moving to the next starting from the root …so it essentially moves horizontally from up-to-down the tree.

![BST -- Traversal.png](Tree%202e17e2198ab5453ebc2fa57328e9aa3b/BST_--_Traversal.png)

![BST -- Traversal.svg](Tree%202e17e2198ab5453ebc2fa57328e9aa3b/BST_--_Traversal.svg)

---

**Side notes**

- When  a tree is balanced, it makes searching efficient.