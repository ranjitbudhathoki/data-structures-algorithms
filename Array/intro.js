const strings = ["hello", "hi", "welcome"];
// 4*4 = 16 bytes of storage

//push
strings.push("bye"); // O(1)

//pop
strings.pop(); // O(1)

//unshift (add item to the start of the array)
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

//shit (delete item from the start of the array)
// strings.shift()

console.log(strings);
