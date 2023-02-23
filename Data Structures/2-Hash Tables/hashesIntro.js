const user = {
  name: "Kyle",
  age: 54,
  magic: true,
  scream: () => {
    console.log("Ahhhhhh!");
  },
};

console.log(user.name); // lookup => O(1)
user.spell = "AbraKadabra!"; // insertion => O(1)
user.scream(); // O(1)
console.log(user);

// BUT with collisions: insertions and lookups could be O(n)

// Different types of hash-tables in js:
const a = new Map(); // (accepts any type as a key | preserves insertion orede) unlike objects.
const b = new Set(); // only accepts keys, no values
