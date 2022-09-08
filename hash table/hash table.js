const person = {}
person['firstName'] = 'Bob'
person['lastName'] = 'Dilan'
console.log(person)
console.log(person.firstName)

function check(key) {
    if(person.hasOwnProperty(key)) {
        return person[key]
    } else {
        return false
    }
}

function check2(key) {
    if(key in person) {
        return person[key]
    } else {
        return false
    }
}

console.log(check("firstName"))
console.log(check("Bob"))
console.log(check2("firstName"))
console.log(check2("Bob"))

/* ================================================================= */

//BARE BONES
function hashFn (str, size) {
    let hash = 17;
    for(let i = 0; i < str.length ; i++) {
        hash = (13 * hash * str.charCodeAt(i)) % size
    }
    return hash
}



class HashTable {
    table = new Array(3)
    noOfItems = 0
    // loadFactor = this.noOfItems / this.table.length //this is for when we're almost filling the array so we can resize
    resize = () => {
        const newTable = new Array(this.table.length * 2)
        //so we have to rehash bcz hash will change 
        this.table.forEach(item => {
            if(item) {
                item.forEach(([key, value]) => {
                    const idx = hashFn(key, newTable.length)
                    if(newTable[idx]) {
                        newTable[idx].push([key, value])
                    } else {
                        newTable[idx] = [[key, value]]
                    }
                })
            }
        })

        this.table = newTable
    }
    setItem = (key, value) => {
        this.noOfItems++
        const idx = hashFn(key, this.table.length)
        const loadFactor = this.noOfItems / this.table.length //this is for when we're almost filling the array so we can resize

        if(loadFactor > 0.8) {
            //resize
            this.resize()
        }

        if(this.table[idx]) {
            this.table[idx].push([key, value])
        } else {
            this.table[idx] = [[key, value]]
        }
    }

    getItem = (key) => {
        const idx = hashFn(key, this.table.length)
        if(!this.table[idx]) {
            return null
        }
        return this.table[idx].find(x => x[0] === key)[1]
    }
}

const myTable = new HashTable()
myTable.setItem('firstName', 'jack')
myTable.setItem('lastName', 'grey')
myTable.setItem('age', 47)
myTable.setItem('job', 'swe')
myTable.setItem('weather', 'cloudy')


console.log(myTable.table)
console.log(myTable.table.length)
console.log(myTable.getItem('firstName'))
console.log(myTable.getItem('lastName'))
console.log(myTable.getItem('age'))
console.log(myTable.getItem('weather'))





