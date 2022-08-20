// N.B : Set values with same key override each other with this mode of implementation
// essentially duplicates don't store separately
// this happens because of our weak hashing function, as the key values always have the same charCode
// hashed key of "name" == hashed key of "mane" === hashed key of "nmae" === hashed key of "name"
// this is a big no no

// check _hash table.js_ for the one of the many better implementation that avoids this bug/collision
class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    
    // hashing function -- converting a string key to a numeric index
    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length ; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value
    }

    get(key) {
        const index = this.hash(key);
        if(!this.table[index]) {
            // console.log(`Value does not exist at key ${key}`)
            return;
        }
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key);
        if(!this.table[index]) {
            // console.log(`Value does not exist at key ${key}`)
            return 
        }
        this.table[index] = undefined
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50)
console.log('\n Setting values')
table.set("indexx", 1)
table.set("name", "Bruce")
table.set("age", 70)
table.set("level", "Part 5")
table.set("level", "Part 6") //This will overide "Part 5"

table.display()

console.log('\n\t Getting values')

console.log(`Value stored at index 'name' is '${table.get("name")}'`)
console.log(`Value stored at index 'level' is '${table.get("level")}'`)

let get3 = '1'
table.get("1") === undefined ? console.log(`No value exists at key ${get3}`) :
console.log(`Value stored at index '${get3}' is '${table.get(get3)}'`)

console.log('\n\t Removing values "name" and returning remains')
table.remove("name")
table.display()