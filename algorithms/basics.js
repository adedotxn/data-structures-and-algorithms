/*
    CONTAINS : 
    - Fibonnaci
    - Factorial
    - Prime Number check
    - Power of Two
    - Recursion 
 */

function fibonnaci(n) {
    let seq = [0, 1]
    for(let i = 2 ; i < n ; i++) {
        seq[i] = seq[i - 1] + seq[i - 2] 
        //when n = 3, loop runs with i == 2
        //seq[2] = seq[1] + seq[0] = 1 + 0 = 1 so seq = [0, 1, 1]
        //when n = 4, loop runs till i = 3 cause i < n
        //seq[3] = seq[2] + seq[1] = 1 + 1 = 2 so seq = [0, 1, 1, 2]
        //when n = 5,
        //seq[4] = seq[3] + seq[2] = 2 + 1 = 3 so seq = [0, 1, 1, 2, 3]
    }
    return seq
} /* BIG- 0 : 0(n) */
console.log(fibonnaci(5))



function factorial(n) {
    let res = 1
    for(let i = 2; i <= n ; i++) {
        res = res * i
    }
    return res
} /* BIG- 0 : 0(n) */
console.log(factorial(5))



function primeNumber(n) {
    if (n < 2 ) {
        return false 
    }

    for(let i = 2 ; i < n ; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return true
} /* BIG- 0 : 0(n) */
console.log(primeNumber(5))
console.log(primeNumber(4))



function powerOfTwo(n) {
    for(let i = 0; i < n ;i++) {
        if(2**i === n ){
            return true
        }
    }
    return false
} // 0(n) 

function powerOfTwoII(n) {
    if(n < 1) {
        return false
    } 
    while(n > 1) {
        if( n % 2 !== 0 ) {
            return false
        }
        n = n/2
    }
    return true
} //0(log(n))

/* [ WITH A PINCH OF SALT ] */
function powerOfTwoIII(n) {
    if(n < 1) {
        return false
    } 

    //checking through bitwise operator
    return (n & (n - 1)) === 0 
} // 0(1) - constant time

console.log(powerOfTwo(0))
console.log(powerOfTwoII(0))
console.log(powerOfTwoIII(0))



