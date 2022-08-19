class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    
    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length ; i ++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value

        let bucket = this.table[index]
        if(!bucket) {
            bucket = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            sameKeyItem ? 
                sameKeyItem[1] = value 
            : bucket.push([key, value])
        }
    }

    get(key) {
        const index = this.hash(key);
        if(!this.table[index]) {
            // console.log(`Value does not exist at key ${key}`)
            return (`Value does not exist at key ${key}`)
        }
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key);
        if(!this.table[index]) {
            // console.log(`Value does not exist at key ${key}`)
            return (`Value does not exist at key ${key}`)
        }
        this.table[index] = undefined
    }

    display() {
        for(let i = 0; i < this.table.length ; i ++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }

}

const table = new HashTable(50)

console.log('\n\t Setting values')
table.set("name", "Bruce")
table.set("age", 70)
table.set("level", "Part 5")
table.display()

console.log('\n\t Getting values')

console.log(`Value stored at index 'name' is '${table.get("name")}'`)
console.log(`Value stored at index 'level' is '${table.get("level")}'`)

console.log(table.get("1"))

console.log('\n\t Removing values "name" and returning remains')
table.remove("name")
table.display()