/* INSERTION SORT : Wtch wes bos to understand the visualisation better
Algorithm : 

Problem Statement - given an array of integers, sort the array
    const arr = [-6, 20, 8, -2, 4]. Should return [-6, -2, 4, 8, 20]

*/

function insertionSort(array) {
    for(let i = 1; i < array.length ; i++) {
        let current = array[i]
        let sortedIndex = i - 1

        //i = 1
        // since the sorted index starts at 0, standard procedore
        // also sortedIndex represents the index of the last sorted element
        // assume [8,2,4,1,3] ..sortedIndex is 0 & current may be 2 for this condition to hold
        while(sortedIndex>=0 && array[sortedIndex] > current ) {
            //so, we swap, shifting the sortedIndex a step backward backward
            array[sortedIndex + 1] = array[sortedIndex] // so [8,8,4,1,3] 
            sortedIndex = sortedIndex - 1
            //so we shift our sorted index backwards so that we can iterate till 
            //..we reach where loop conditions fail so we can step out the loop 
        }
        //after this loop runs and sortedIndex is not > 0, as it's now -1 
        // we place the current value at the position it should be
        array[sortedIndex + 1] = current //so [2, 8, 4, 1, 3]
    }
} //BIG - 0 : O(N ^ 2) 

const arr23 = [8,2,4,1,3]
insertionSort(arr23)
console.log(arr23)

/* after sorting the first one, we move to index 2 let's go 
    we now have [2,8,4,1,3], i = 2, current = 4, sortedIndex = 1
        1 > 0 && 8 > 4 so, ...conditions met
            array[2] = array[1] -- > [2,8,8,1,3]
                then we decrement sortedIndex to 0
        run the while loop again (it's a loop till it breaks)
        but this time 0 >= 0 but 2 !> 4, so loop breaks (conditions unmet), then
            array[0 + 1] = 4 --> [2,4,8,1,3]

then we move to i = 3 ..having current = 1, sortedIndex = 2
        2 >= 0 && 8 > 1
            array[2 + 1] = array[2] -- > [2,4,8,8,3]
                nu sortedIndex = 2 - 1 = 1
    now, rerun the loop
        1 >= 0 && 4 > 1 ..conditions met
            array[1 + 1] = array[1] == array[2] = 4 // [2,4,4,8,3]
                    nu sortedIndex = 1 - 1 = 0
    now loop reruns 
        0 >= 0 && 2 > 1 ..conditions met (loop keeps going till conditions are unmet)
            array[0 + 1] = array[0] == array[1] = 2 // [2,2,4,8,3]
                nu sortedIndex = 0 - 1 = -1 
    rerun loop
        -1 !>= 0 , conditions unmet
    loop breaks, then we now go outside the loop
        array[sortedIndex + 1] = current --> current is still 1, we never stepped out of the loop
        array[-1 + 1] = 1 == array[0] = 1 // [1,2,4,8,3]

*/


