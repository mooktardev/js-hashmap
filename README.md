# Hashmap

## Features
1. `hash` takes a value and produces a hash code with it. We did implement a fairly good hash function in the previous lesson. You are free to use that, or if you wish, you can conduct your own research. Beware, this is a deep deep rabbit hole.

2. `set` takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.
Remember to grow your buckets size when it needs to, by calculating if your bucket has reached the load factor.
get takes one argument as a key and returns the value that is assigned to this key. If key is not found, return null.

3. `has` takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

4. `remove` takes a key as argument and removes it from the hash table.

5. `length` returns the number of stored keys in the hash map.

6. `clear` removes all entries in the hash map.

7. `keys` returns an array containing all the keys inside the hash map.

8. `values` returns an array containing all the values.

9. `entries` returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]