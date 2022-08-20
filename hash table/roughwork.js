let bucket = [["age", 27], ["age", 30], ["age", 4]]
const sameKeyItem = bucket.find(item => item[0] === "age");
const table = new Array(5)

table["age"] = ["age", 20]
let bkt = table["age"]
console.log(bkt)
console.log(bkt[0] === "age")
table.push(["age", 40])


console.log(bkt)

const sameKeyIt = bkt.find(item => item[0] === "age");
console.log(sameKeyIt)


console.log(table)
console.log(bucket[0])
console.log(sameKeyItem)
