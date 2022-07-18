// a hash table is used to implement associative arrays or mappings of key value pairs
//they're a commmon way to implement the map data structure or objacts 

//average time for each lookup is not tied to the number of elements in the table


const hash = (string, max) => {
    let hash = 0;
    for(let i = 0; i < string.length ; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max
}
