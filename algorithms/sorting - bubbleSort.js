/*
 - Bubble Sort
 - Insertion Sort
 - Quick Sort
 - Merge Sort
*/

/* BUBBLE SORT
Algorithm : Compares adjacent ekements in the array and swaps their position if not in intended order
            Repeat as you step through the array
            Once you step through the array with no swaps, the array is sorted

Problem Statement - given an array of integers, sort the array
    const arr = [-6, 20, 8, -2, 4]. Should return [-6, -2, 4, 8, 20]
        NB: bubble sort is a poor sorting algorithm mostly only used for intro  to sorting

*/

function bubbbleSort(array) {
    let swapped

    do {
        swapped = false
        for(let i = 0; i < array.length ; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
            }
        }
    }  while(swapped)
} // BIG-0 : (0 n^2) -> quadratic time complexity

const arr = [-6, 20, 8, -2, 4]
bubbbleSort(arr)
console.log(arr)


