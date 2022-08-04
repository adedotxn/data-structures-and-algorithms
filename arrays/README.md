# Arrays

**Definitions & Properties**

An array is a collection of items stored at contiguous memory locations. The idea is to store a fixed number of multiple items of the same type together.

Element − Each item stored in an array is called an element.
Index or Subscript − Location of an element in an array. Each element can be uniquely identified by their index in the array 

Most arrays use zero based indexing, i.e. the first element of the array is at position 0, but there are also other types of indexing — one-based indexing (first element is indexed by subscript 1) and n-based indexing (base index is freely chosen, programming languages that allow this usually allow some data types to be used as index).

Array is a linear data structure —  it’s elements are arranged in a sequential manner and each member element is connected to the previous and next element and can be traversed in a single run. Makes arrays easy to implement because a computer’s memory is also sequential.

Arrays are ordered.

Array elements are stored in memory. The memory address of the first element of an array is called base address.

Arrays allow random access to elements. This makes accessing elements by position faster. Hence operation like searching, insertion, and access become really efficient.

---

**Array Operations** 

**Traversal**

```jsx
const array = ["One", "Two", "Three", "Four"]
for(let i = 0;i < array.length; i++){
  console.log(array[i])
}
//should list out all elements in that array
```

**Insertion** 

```jsx
const array= []
array[0] = "One"
array[1] = "Two"
console.log(array) 
//expected output ["One", "Two"]
```

Time Complexity of Insertion: 
 • O(1) to insert a single element

 • O(N) to insert all the array elements [where N is the size of the array]

**Accessing elements in an array** 

```jsx
const array = ["One", "Two"]
const firstElement = array [0]
console.log(firstElement)
//expected output "One"
```

Time Complexity: O(1)

**Searching for an element in an array** 

```jsx
//searching for the string "Two"
const array = ["One", "Two"]
let isPresent
for(let i = 0;i < array.length; i++){
 array[i] === "Two" ?
    isPresent = true : 
   isPresent = false }
console.log(isPresent)
//expected output: true
```

```jsx
const array = ["One", "Two", "Three"]
const index = array.indexOf("Three");
console.log(index)
//returns 2 if present and -1 if false

const isPresent = array.includes("Two")
console.log(isPresent)
//expected output is "true" if present and "false" if not
```

Time Complexity:  O(N), where N is the size of the array.

**Deletion**

**Sorting** 

**Extensive Overview of JS Array Methods** 

[Array methods](https://javascript.info/array-methods)

---

**Types of Arrays**

- Linear/One Dimensional (1-D) arrays

   

```jsx
const array = [1,2,3,4,5]
```

- Matrices/Two Dimensional (2D) arrays

       Think about matrices, and their rows and columns, that's how 2D (& multidimensional) arrays work, to access elements you use rows and column indexes — array[ i ][ j ]

```jsx
const array = [[1,5][2,6][3,7][4,8]]
```

- Multidimensional arrays

       basically 3D, 4D ..arrays etc. 

---

**Advantages of using arrays:**

Arrays allow random access to elements — makes accessing elements by position faster.

Arrays have better cache locality which makes a pretty big difference in performance.

Arrays represent multiple data items of the same type using a single name.

Sorting and Searching is easier with arrays.

**Applications of arrays**

Arrays are used to implement other data structures — lists, heaps, hash tables, queues, stacks and strings

[Applications, Advantages and Disadvantages of Array - GeeksforGeeks](https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-array-data-structure/)

---

**Side notes**

The array data structure can be/has been used to implement many other data structures, such as lists and strings.

 Usually, an array of characters is called a ‘string’, whereas an array of integers or floats is simply called an array.

Arrays are usually meant to be initialized with size for memory but what happens when they aren't? 🤔

Arrays are said to contain elements of the same type but they usually do contain elements of different types especially with dynamically typed language 🤔

**Untraditional behavior of arrays in JS?**

From the definition of the array data structure, it's implied that arrays are fixed, only contain elements of same data types and can only be accessed by index but that may not look true when coding 🤔

[Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description)

In JavaScript, arrays aren't primitives  but are instead Array objects.

This basically explains why JS arrays are resizable, can contain multiple data types and can be accessed by strings as indexes — in JS an array is not a data structure but rather an array object, hence why it can contain multiple data types

So it's cool to know those differences between traditional array data structures and the array implementations in different languages — some languages implement their arrays data types with hash tables, linked lists, search trees or other data structures.

---

**Array Rotation (JS)**

Example : Given an array of integers **arr[]** of size **N** and an integer, the task is to rotate the array elements to the **left** by **d** positions.

My Solution

```jsx
//basically when you rotate to the left, the elements rearrange to now start from the 
//position of 'd' and elements that were before 'd' intially now move to it's back
//like a circle

function Rotate(array, d) {
  let position = array.indexOf(d)

  // Store the elements from "d" index to the last.
  let tempArray = array.slice(position + 1)

	//loop through to look for elements that were before "d" index 
	//push those elements to the back of the "d" index
  for(let i = 0; i < array.length ; i++) {
    if(!tempArray.includes(array[i])) {
      tempArray.push(array[i])
    }
  }
  console.log(tempArray)
}

Rotate(array, 4)
//Rotate([1, 2, 3, 4, 5, 6, 7], 2) will give us [3, 4, 5, 6, 7, 1, 2]
//Rotate([1, 2, 3, 4, 5, 6, 7], 3) will give us [4, 5, 6, 7, 1, 2, 3]
```