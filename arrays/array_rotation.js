const array = [1,2,3,4,5,6,7]

//Reversal Algorithm Method
const Reverse = (array, d) => {
    //get the elements before d and reverse the array
    const toShift = array.slice(0,d).reverse()
    //get the elements after d and reverse the array
    const afterD = array.slice(d).reverse()
    //merge the two reversed array together and then reverse again
    return toShift.concat(afterD).reverse();
}

console.log(Reverse(array,3))