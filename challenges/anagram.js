function anagram2(s, t) {
    let mapT = {t}
    if(s.length !== t.length) {
        return false
    }

    for(let i = 0 ; i < s.length ; i++) {
        if (!s.includes(Object.values(mapT)[0][i])) {
            return false
        }
    }

    return true
}


const an = 'aacc'
const na = 'cacc'

const nope = 'ggamarp'
const short = "yu"
const long = "yuasghghashgahsghgashghasgh"

console.log(an.length)
console.log(na.length)
console.log(nope.length)


console.log(anagram2(an , na))

console.log(anagram2(an, short))
console.log(anagram2(an, long))


/* ================================================================ */

//Rough Work
const person = {}
person['firstName'] = 'Bob'
person['lastName'] = 'Dilan'
console.log(person)
console.log(person.firstName)
console.log(person['lastName'])


function check(key) {
    if(person.hasOwnProperty(key)) {
        return person[key]
    } else {
        return false
    }
}

console.log(check("firstName"))
console.log(check("Bob"))
const obj = {an}
console.log(obj) // { an : 'anagram' }
console.log(Object.fromEntries([[an[0], an[0]]])) // {a : "a"}
console.log()


const val = Object.values(obj)
console.log(val) // [ 'anagram' ]
console.log(val[0][1]) // n

console.log(an[0]) // a

console.log("angram".includes("a")) // true



