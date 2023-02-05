const chars = ["a", "b", "c", "d"];

// If we have a 32-bits system,
// It means that we have 4*4 bytes to store this array!

// Operations on arrays:

// Access: Random access which is extremely fast!
console.log(chars[2]); // O(1)

// push: simply adds an item at the end of the array.
chars.push("e"); // O(1)

// pop: the opposite of the push method, and it returns the item deleted.
chars.pop(); // O(1)
console.log(chars.pop());

// unshift: adds an item at the beginning of the array.
chars.unshift("x"); // O(n)

// splice: adds/deletes an item at a specific index
chars.splice(2, 0, "alien"); // O(n)

console.log(chars);
