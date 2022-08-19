const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

for(const [key, value] of map) {
    console.log(`${key}: ${value}`)
}
console.log(`Size : ${map.size}`)

// ADD
console.log(`\n\t Adding Values "d" and "e" `)
map.set('d', 4)
map.set('e', 7)

for(const [key, value] of map) {
    console.log(`${key}: ${value}`)
}
console.log(`Size : ${map.size}`)

// HAS
console.log(`\nis "e" in the map? - ${map.has('e')}`) //Expected Output : true

//DELETE
console.log(`\n\t Deleting b & e`)
map.delete('b')
map.delete('e')
for(const [key, value] of map) {
    console.log(`${key}: ${value}`)
}
console.log(`Size : ${map.size}`)

// CLEAR
console.log(`\n\t Emptying the map`)
map.clear()
map.size === 0 ? console.log("Map is now empty") : console.log(`Size : ${map.size}`)
console.log(`Size : ${map.size}`)

