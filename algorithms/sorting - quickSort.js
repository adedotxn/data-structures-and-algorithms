/* QUICK SORT :

Problem Statement - given an array of integers, sort the array
    const arr = [-6, 20, 8, -2, 4]. Should return [-6, -2, 4, 8, 20]

*/

function quickSort(array) {
    if (array.length < 2) {
        return array
    }
    
    let pivot = array[array.length - 1]
    let leftArray = []
    let rightArray = []

    for (let i = 0; i < array.length - 1 ; i++) {
        if(array[i] < pivot) {
            leftArray = [array[i], ...leftArray ]
            // leftArray.push(array[i])
            console.log(leftArray)
        } else {
            rightArray = [array[i], ...rightArray]
            console.log(rightArray)
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
} /* BIG-O  Worst case : 0(n^2) (this the case 'cause worst case scenario, ypu're sorting an already sorted array)
            Average case : 0(nLogn)  
    */

const array = [8,2,4,1,3]
console.log(quickSort(array))
console.log(array.length)


/* 
1st round - 
    pivot = array[4] = 3
    hits loop
        i = 0 ; 8 > 3, so
            rightArray = [8]
        i = 1 ; 2 < 3, so
            leftArray = [2]
        i = 2 ; 4 > 3, so 
            rightArray = [8, 4]
        i = 3 ; 1 < 3, so  
            leftArray = [2, 1]
    loop breaks cuz of condition i < array.length which is i < 4 here

    [ ...quickSort( [2, 1] ), 3, ...quickSort( [8, 4] ) ]
            quicksort([2, 1])              
            nu pivot for that is 1
                i = 0 ; 2 > 1
                    right = [2]
            loop breaks 
            return [...quickSort([]), 1, 2]  ..quicksort cannot run again cuz it's < 2
        [1, 2]
        
            sooo [...[1,2], 3, ...quickSort([8, 4])]
                quicksort([8, 4])              
                nu pivot for that is 4
                i = 0 ; 8 > 4
                    right = [8]
            loop breaks
            return [...quickSort([]), 4, 8]
        [4,8]
    Joining then ==> [1, 2, 3, 4, 8]


*/
