function reverse(array) {
    let tail = array.length - 1
    let head = 0
    let newArr = []

    for(let i = 0 ; i < array.length ; i++) {
        newArr[head] = array[tail]
        head++
        tail--
    }
    return newArr
}

let  r = [1,2,3,4,5]
console.log('array: ', r)
console.log("reversl: ", reverse(r) )

// so i basically created a pointer for the head and tail of both arrays 
// and kept replacing them into a new array while decrementing the tail and incrementing the head


function reverseWhile(array) {
    let len = array.length

    let tail = array.length - 1
    let head = 0

    let newArr = []

    while(len > 0) {
        newArr[head] = array[tail]
        head++
        tail--
        len--
    }  

    return newArr
}

console.log("reversal while: ", reverseWhile(r) )

// trying to see if i can pull it off on the same array without new array
// lmao, it keeps failing, i know why anyways
function reverse_constatntArray(array) {
    let len = array.length

    let tail = array.length - 1
    let head = 0
    let mid = array.length / 2
    while(len > 0 ) {
        array[head] = array[tail]
        
        
        console.log(`head --- tail : ${head} -- ${tail} `)
        head++
        tail--
        len--        
    }  

    return array
}

console.log("reversal w constant: ", reverse_constatntArray(r) )
