/* Given a number 'n', find the nth element of the Fibonacci Sequence */
// Use Visualgo.net to visualize

//F(n) = F(n - 1) + F(n - 2)
function fibonnaci(n) {
    if ( n < 2 ) {
        return n
    }
    return fibonnaci(n - 1) + fibonnaci(n - 2)
} // 0(2 ^n) -- not a good solution
console.log(fibonnaci(8))


function factorial(n) {
    if(n < 1) {
        return 1
    }
    
    return (n * factorial(n - 1))
} // 0(n)
// a function only returns once which means the lone n in return fn is always constant 
// but the recursive function keeps changing till base case
// as we know 4! = 4 * 3!
// soo factorial(4)
// 4! = 4 * [(4 - 1) * (3 - 1) * (2 - 1) * (1)]
//   =  4 * 3 * 2 * 1 * 1 
console.log(factorial(4))
