//set can be used to check for the presence of an item
//think in terms of Sets in mathematics --- remember Union, Intersection, Ven diagrams etc.

function mySet() {
    const collection = []; //holds the set

    //checks for the presence of an item 
    this.has = function(element) {
        //*** if the element is in the collcetion, it'll return -1?? whyy??
        return (collection.indexOf(element) !== -1)
    }

    //return all the values of the set 
    this.values = function() {
        return collection;
    }

    //method to add an element to the set
    //NOTE : add method does not add the value if it's a duplicate
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element)
            return true;
        }
        return false;
    }

    //method to remove an element from a set 
    this.remove = function(element) {
        if(this.has(element)) {
            let indexOfElement = collection.indexOf(element);
            collection.splice(indexOfElement, 1)
            return true;
        }
        return false;
    }

    //not a method but a property so size not size()
    this.size = function() {
        return collection.length;
    }

    // * BELOW methods aren't in the ES6 implemetation of Set

    //mehod returns the union of two sets
    this.union = function(otherSet) {
        const unionSet = new mySet();
        const firstSet = this.values(); //values of this set
        const secondSet = otherSet.values(); //values of the set we want to combine with

        firstSet.forEach(e => {
            unionSet.add(e) //the add method we created in this set, you get the vibe
        });
        secondSet.forEach(e => {
            unionSet.add(e) //RE : add method does not add the value if it's a duplicate
        })

        return unionSet;
    }

    //method to return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        const intersectionSet = new mySet();
        const firstSet = this.values();
        firstSet.forEach(e => {
            if(otherSet.has(e)) {
                intersectionSet.add(e)
            }
        })

        return intersectionSet;
    }

    //method returns difference of two sets as a new set --> items in a set that's not in the other
    this.difference = function(otherSet) {
        const differenceSet = new mySet();
        const firstSet = this.values();
        firstSet.forEach(e => {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }

    //method to test if a set is a subset of a diffrent set -- check if d first seti is completely contained in the second
    this.subset = function(otherSet) {
        const firstSet = this.values();
        return firstSet.every(e => {
            return otherSet.has(e)
        })
    } 
}

const setA = new mySet()
const setB = new mySet()

setA.add("a")
setA.add("b")
setA.add("c")
setA.add("d")
setA.add("e")

setB.add("a")
setB.add("b")
setB.add("c")

console.log("Is Set B a subset of Set A? :", setB.subset(setA)) //should return true
// console.log("Intersection btwn both sets", setB.intersection(setA)) //will return the new set with methods but we need values so...look below
console.log("Intersection btwn setB and setA", setB.intersection(setA).values()) //should return ['a', 'b', 'c' ]
console.log("Difference btwn setA and setB", setA.difference(setB).values()) //should return ['d', 'e']





