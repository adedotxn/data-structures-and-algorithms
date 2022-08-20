//LOOKING FOR A BETTER IMPLEMENTATION, THIS ONE HAS TOO MANY BUGS BECAUSE OF THE HASH FUNCTION, I THINK
// - characterAt bug, setting bug ...etc


// // one of the methods to solve this collision is that instead of storing a single array at an index;
// // ..we provide a way to store multiple arrays at an index (you can store a single array at an index too)
// // so "name" and "mane" won't collide but rather be in the same index beside each other in their own arrays
// // so each index stores an array of arrays rather than a single array

// /*
//     the hash table will now look like this (NB: WE STILL HAVE THE CHARACTER BUG BUT HEY, NO COLLISION & DUPLICATES HAHA) 
//     [ 
//         [ [ 'name', 'Phil' ], [ 'mane', 'Brandon' ] ] //only because mane === name, or else, it just updates the value and keeps the array at length of 1
//         [ ["age", 20] ] 
//         [ ["level", "Part 5"] ]
//     ]
// */

// /* 
//         bucket["name"] will give:
//     [ [ 'name', 'Phil' ], [ 'mane', 'Brandon' ] ]

//         bucket["age"] will give : 
//     [ ["age", 20] ] 
// */

//  class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
    
//     // hashing function -- converting a string key to a numeric index
//     hash(key) {
//         let total = 0;
//         for(let i = 0; i < key.length ; i ++) {
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key, value) {
//         const index = this.hash(key);
        
//         //reference to the index we want to store this new value
//         let bucket = this.table[index]
//         if(!bucket) {
//             //if there's nothing there (i.e empty bucket), go ahead and enter the index
//             //see it's an array of arrays (2D array), this is what allows us to be able to avoid collision by pushing another value (a diff. value) with the same key to that index 
//             this.table[index] = [[key, value]]
//         } else {
//             //if sth is there, check of the value of the key for similarities
//             // if similar, simply replace the value so "name" value replces "name"'s value 
//             //...and "mane" value does not replace "name" value unlike the simple version 
           
            
//             bucket[0] === key ? 
//                 bucket[1] = value : 
//             bucket.push([key, value])

//         }
//     }

//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index]
//         // console.log("table", this.table)

//         if(bucket) {
//             if(bucket[0][0] === key) {
//                 console.log(`\nvalue at key "${key}"`, bucket)
//                 if(bucket.length === 1){
//                     return bucket[0][1];
//                 } else {
//                     let values = []
//                     for(let i = 0; i < bucket.length ; i++ ) {
//                         values.push(bucket[i][1])
//                     }
//                     return values
//                 }
//             }
//         }
//         return undefined;    
//     }

//     remove(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index]

//         if(bucket) {
//             const sameKeyItem = bucket[0][0];
//             console.log("sameKeyItem", sameKeyItem)
//             if(bucket[0] === key) {
//                 bucket.splice(bucket.indexOf(sameKeyItem), 1)
//             }
//         }
//     }

//     display() {
//         for(let i = 0; i < this.table.length ; i ++) {
//             if(this.table[i]) {
//                 console.log(this.table[i])
//             }
//         }
//     }

// }

// const table = new HashTable(7)

// console.log('\n\t Setting values')
// table.set("name", "Bruce")
// table.set("groove", "Brandon")
// table.set("name", "Phil")


// table.set("age", 70)
// table.set("age", 90)

// table.set("level", "Part 5")
// table.display()

// console.log('\n\t Getting values')

// console.log(`Value stored at index 'name' is '${table.get("name")}'`)
// console.log(`Value stored at index 'age' is '${table.get("age")}'`)
// console.log(`Value stored at index 'level' is '${table.get("level")}'`)


// console.log(table.get("1"))

// console.log('\n\t Removing values "name" and returning remains')
// table.remove("name")
// table.display()