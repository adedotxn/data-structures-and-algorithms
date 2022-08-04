# Linked Lists

A **linked list** is a **linear data structure** (like arrays) where each element is a separate object. This data structure **consists of a group of vertices (nodes)** which together represent a sequence.

A linked list is **made up of two items in each node** that are **data** and a **reference to the next node** in the sequence**.** A **reference to the next node** is given with the help of **pointers** and **data is the value of a node.**

Each node contains data and links to the other nodes.

It has an upper hand over the array as the number of nodes i.e. the **size of the linked list is not fixed and can grow and shrink as and when required**, unlike arrays.

**Types of Linked Lists**

- Singly Linked Lists — **every node stores address or reference of the next node in the list** and the **last node has the next address or reference as NULL**. ⑦→⑤→⑧→⑩→④→NULL

- Doubly Linked Lists — there are **two references associated with each node**, **one of the references point to the next node and the other to the previous node**. Advantage of this data structure is that **we can traverse in both directions — forward & backwards, previous & next.** NULL ⇔ ⑦ ⇔ ④ ⇔ ⑧ ⇔ ⑩ ⇔ ⑦ ⇔ ④ ⇔ ② ⇔  NULL

- Circular Linked Lists — all **nodes are connected to form a circle**. There is **no NULL at the end**. A circular linked list can be a singly circular linked list or a doubly circular linked list.  Any node can be made as starting node. This is useful in the implementation of the circular queues in the linked list.  ⑦→④→⑤→⑧→⑦  (The next **pointer of the last node is pointing to the first node**)

**Why Choose Linked Lists**

- **Size isn’t fixed** unlike arrays.
- **Insertion and Deletion aren’t as expensive** because in linked lists if we have the head node then we can traverse to any node through it and insert new node at the required position.

**Drawback(s) or Disadvantage(s)**

- Random access is not allowed unlike with arrays, here we have to access elements sequentially starting from the head node.
- Extra memory space for a pointer is required with each element of the list.

**Operations & Time Complexity**

- **Accessing** time of an element : O(n)
- **Search** time of an element : O(n)
- **Insertion** of an Element : O(1)  [ If we are at the position where we have to insert an element ]
- **Deletion** of an Element : O(1) [ If we know address of node previous to the node to be deleted ]

**Implementation**

- Bare-bones implementation of a Singly Linked List with JavaScript (code comments detail explanation) — Insertion, Search, Deletion, Deletion at a specific index, Insertion at a specific index.

[data-structures-and-algorithms/06 - Linked lists.js at main · adedotxn/data-structures-and-algorithms](https://github.com/adedotxn/data-structures-and-algorithms/blob/main/linked-lists/06%20-%20%20Linked%20lists_00.js)

Linked List and its variations are used as underlying data structure to implement List, Stack, Queue, and Deque ADTs