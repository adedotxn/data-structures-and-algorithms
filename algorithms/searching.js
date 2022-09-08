/*      CONTENT : 
    Linear Search
    Binary Search - with loop & with recursion  */

/* 
    LINEAR SEARCH
Given an array of 'n' elements and a target 't'. Find the index of 't' 
in the array, Return -1 if target is not found 

arr = [5 ,2 ,4 , 10, 7 ,9], t = 10. Should return 3
*/

function linearSearch(array, target) {
    for(let i = 0 ; i < array.length ; i ++) {
        if(array[i] === target) {
            return i
        }
    }
    return - 1
} //BIG-O = 0(n)
const array = [5 ,2 ,4 , 10, 7 ,9]
console.log(linearSearch(array, 10))


/*
    BINARY SEARCH
Given a sorted array of 'n' elements and a target element 't'.
Find the index of 't' in the array. Return -1 if target element is not found

arr = [-5, 2, 4, 6, 10], t = 4. Should return 4
*/

/* ITERATIVE Solution */
function binarySearch(array, target) {
    if (array.length === 0 ) {
        return -1 
    }

    let leftIndex = 0
    let rightIndex = array.length - 1
    console.log(array)
    console.log(rightIndex)
    
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if(target === array[middleIndex]) {
            return middleIndex
        }

        if(target < array[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
} // BIG-O : 0(log n) 

// so middle index will bw (0 + 6) / 2 = 3
// so we check array[3] and 12 is > array[3] so we ditch the left part of our array by
// ..by changing the leftIndex to index 3 + 1 == index 4
// so now we're only dealing with [10, 11 , 12]
// new middle index is (4 + 6) / 2  = 5 
// so we check array[5] and that's 11 ..and voila! target === array[index]

const array2 = [-5, 2, 4, 6, 10, 11, 12]
console.log(binarySearch(array2, 11))

/* RECURSIVE SOLUTION */

function recursiveBinarySearch(array, target) {
    return search(array, target, 0, array.length - 1)
}

function search(array, target, leftIndex, rightIndex) {
    if(leftIndex > rightIndex | array.length === 0) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if(target === array[middleIndex]) {
        return middleIndex
    }

    if(target < array[middleIndex]) {
        return search(array, target, leftIndex, middleIndex - 1)
    } else {
        return search(array, target, middleIndex + 1, rightIndex )
    }
} // BIG-0: 0(log n)
console.log(recursiveBinarySearch(array2, 11))

/*
SIDENOTES
 - Binary Search only works on sorted arrays, if the array is not sorted
   use linear search or sort the array first
*/