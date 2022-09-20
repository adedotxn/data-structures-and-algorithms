/* Given a number 'n', find the nth element of the Fibonacci Sequence */
// Use Visualgo.net to visualize

//F(n) = F(n - 1) + F(n - 2)
function fibonnaci(n) {
    if ( n < 2 ) {
        return n
    }
    console.log(n-1)
    console.log(n-2)
    return fibonnaci(n - 1) + fibonnaci(n - 2)
} // 0(2 ^n) -- not a good solution
console.log(fibonnaci(5))




function factorial(n) {
    if(n < 1) {
        return 1
    }

    
    return (n * factorial(n - 1))
} // 0(n)

/*  4 x factorial(3)
        3 x factorial(2)
            2 x factorial(1)
                1 
                ***
                1
            2 x 1 = 2
        3 x 2 = 6
    4 x 6 = 24

    at *** we hit return so we resolve the function like a stack, 
    LIFO (last in,first out) style using the returned value of each as the function result of thee next

*/

console.log(factorial(4)) // returns 24
