/* MERGE SORT :

Use this visualiser to understand the algorithm : https://www.google.com/url?sa=t&source=web&rct=j&url=https://opendsa-server.cs.vt.edu/embed/mergesortAV&ved=2ahUKEwii4__t4KL6AhUogf0HHXczD-IQFnoECA4QAQ&usg=AOvVaw0lz8l6w6Y34wsMN-13-pe8

Problem Statement - given an array of integers, sort the array
    const arr = [-6, 20, 8, -2, 4]. Should return [-6, -2, 4, 8, 20]

*/

function mergeSort(array) {
    if(array.length < 2 ) {
        return array
    }

    const arrayMiddle = Math.floor(array.length / 2)

    const leftArray = array.slice(0, arrayMiddle)
    const rightArray = array.slice(arrayMiddle)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
} // here we divide thw arrays until they have just a 

function merge(leftArray, rightArray) {
    const sortedArray = []

    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift()) //removing and adding by pushing shifted value
        } else {
            sortedArray.push(rightArray.shift())
        }
    }
    console.log([...sortedArray, "l->", ...leftArray, "r->", ...rightArray])
    return [...sortedArray, ...leftArray, ...rightArray]
}

const array = [-6, 20, 8, -2, 4]
console.log(mergeSort(array))

/*
    mergeSort([-6, 20, 8, -2, 4])
        leftArray(LA) = [-6, 20] 
        rightArray = [8, -2, 4]

            hits recursion
            runs mergeSort([-6, 20])
                leftArray = [-6]
                rightArray = [-20]
                hits recursion but array is < 2 for each
                    so merge([-6], [20])
                    -6 < 20
                    so sortedArray = [-6]
                    hits while loop again but leftArray returns falso so loop breaks
                    then [...[6], [], [20]]
                    so [-6, 20]

            done with first half so 
            hits mergeSort([8, -2, 4])
                runs mergeSort, LA = [-8], RA = [-2, 4]
                [8] (LA) can't run mergeSort again as length < 2
                    moves on to [-2, 4]
                    mergeSort([-2, 4])
                       LA = [-2], RA = [4]

                       now we have hit the base case and can now run merge -- we always move recursively down each thread till we hit our base case
                       
                       runs merge(LA,  RA)
                       lA < RA 
                       soo sortedArray = [-2]
                       return [...[-2], [], ...[4]]
                       [-2, 4]

                merge([8], [-2,4])
                    LA[0] > RA[0]
                        sortedArray = [-2]
                    hits while loop with new loop [8], [-4]
                    LA[0] > RA[0]
                        sortedArray = [-2, 4]
                    hits while loop but now rightarray sis empty so loop breaks
                so [...[-2, 4], ...[], ..[8]]
                [-2, 4, 8]
            one step down again with our new array
            but remeber the new left has also been walked through, hence sorted sooo
        merge([-6, 20], [-2, 4, 8])
        LA[0] < RA[0]
            sortedArray = [-6]
        hits while loop with [20] , [-2, 4, 8]
        LA[0] > RA[0]
            sortedArray = [-6, -2]
        hits while loop again with [20], [4, 8]
        LA[0] > RA[0]
            sortedArray = [-6, -2 , 4]
        hits while loop again with [20], [8]
        LA[0] > RA[0]
            sortedArray = [-6, -2, 4, 8]
        hits while loop again with [20], []
        one loop is empty consition fails
        [...[-6, 2, 4, 8], ...[20], ...[]]
    [-6, 2, 4, 8, 20]
    
*/


