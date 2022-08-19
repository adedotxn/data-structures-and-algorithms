# SET

A set is a data structure that can hold a collection of values. The values must be unique though.

Sets can contain a mix of data types. You can store strings, booleans, numbers and even objects all in the same set.

Sets are dynamically sized. They also do not maintain an insertion order.

## Differences between Sets and Arrays
- Arrays can contain duplicates while Sets can not.
- Insertion order is maintained in arrays but aren't maintained in Sets.
- Searching and Deleting an element is faster in Sets compared to Arrays.

# Map

A map is an ordered collection of key-value pairs. Both keys and values can be of any data type.

To retrieve a value, you can use it;s corresponding key.
Maps are iterable - can be used with a for of loop.

## Differences between Maps and Objects
- Objects are unordered whereas maps are ordered.
- Keys in objects can only be of string or symbol type but in Maps they can be of any type.
- Object has a prototype and may contain a few default keys which may collide with yours if uncareful (rarely happens in prectice though) but Maps don't conatin any default key by default.
- Objects are not iterable but Maps are.
- Ypu can attach functionalitites to an object asides from just storing data but Maps are restricted to just data storage.

