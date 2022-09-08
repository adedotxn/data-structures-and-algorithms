/* Approach 1 
    Start from the first value in the array and add other values in the array
excluding the current index ? , then keep progressing like this

This was tedious and failed several leetcode tests plus, you keep reiteraring over the loop all the time
*/

/* Approach 2
    So, if : a + b = target, then : target - b = a && a - target = b
    So instead of using an array, use an hash map
    so, if the remainder (i.e result of target - b) is not in the array, 
    add that value to the hashmap, for other values to perform calculations with those values
    we do this till we get our anwer, if we don't return false

    best thing about this, it doesn't have to go on and on, if we find the anser early, we won't populate the object with unnecssary values

*/
const twoSum = (nums, target) => {
    let numMap = {}

    for(let i = 0; i < nums.length ; i++) {
        let remainder = target - nums[i]
        if(remainder in numMap) {
            return [nums.indexOf(remainder), i]
        } else {
            numMap[nums[i]] = nums[i]
        }
    }

    return false

}
const array = [2,3,5,7,9]
const arr2 = [3,2,3,4]

console.log(twoSum(arr2, 6))


/*
    ROUGH WORK 

console.log(Object.fromEntries([[array[0], array[2]]]))
let map = {array}
console.log(map)
console.log(array.indexOf(9))

const obj = {}
console.log(9 - obj[array[0]] in obj)

obj[2] = 2
console.log(9 - obj[array[0]] in obj)

obj[3] = 3
obj[5] = 5
obj[9] = 9
obj[7] = 7
console.log(9 - obj[array[0]] in obj)
console.log([array.indexOf(2), array.indexOf(9 - obj[array[0]])])
*/