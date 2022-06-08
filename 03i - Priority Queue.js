//in a priority queue you pass the elements and it's priority into the queue
//if they all have the same priority it behaves like a normal queue
// if they have different priority, elements with higher priorities are sent to the beginning of the queue

function PriorityQueue() {
    const collection = [];

    this.print = function() {
        return console.log(collection)
    }

    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false;
            for(let i = 0 ; i < collection.length ; i++) {
                if(element[1] < collection[i][1]) { //checking for priority
                //element[1] is the second value in the element array we pass in and that's how we set priority
                //collection[i][1] loops through all the collcetion values for their priority value at index 1
                //compares both and places them in order of priority
                    console.log("ifff", element[1], collection[i][1])
                    collection.splice(i, 0, element)
                    added = true;
                    break;
                }
            }
            if(!added) {
                collection.push(element)
            }
        }
    }

    this.dequeue = function() {
        const removedValue = collection.shift()
        return removedValue[0]
    }

    this.front = function() {
        return collection[0]
    }

    this.size = function() {
        return collection.length
    }

    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

const pq = new PriorityQueue()

pq.enqueue(['Senator', 3]);
pq.enqueue(['Gateman', 10])
pq.enqueue(['President', 1])
pq.enqueue(['Vice President', 2])
pq.enqueue(['First Lady', 1])

pq.print() //should return in order of priority, 1,1,2,3,10