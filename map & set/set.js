const set = new Set([1,2,3])
set.add(4)
set.add(1) //will not duplicate

for(const item of set) {
    console.log(item)
}

console.log(set.has(2)) //Expected Output: true
console.log(set.has(7)) //Expected Output: false
console.log(set.size)  //Expected Output: 4

console.log("\n\t Deleting 2")
set.delete(2)
for(const item of set) {
    console.log(item)
}

console.log(set.has(2)) //Expected Output: false
console.log(set.size) //Expected Output: 3


console.log("\n\t Clear the set")
set.clear()
set.size === 0 ? console.log("Set is now empty") : console.log(set.size)


