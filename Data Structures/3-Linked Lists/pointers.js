let obj1 = { a: true };
let obj2 = obj1; // here obj2 is a pointer to the same location in memory as obj1

obj1.a = "Eslam"; // changing it will reflect to the two pointers, since they refer to the same location of memory

delete obj1;

obj2 = "hello"; // changing the reference to other location in memory

// console.log("1", obj1);
console.log("2", obj2);

/*
    - Javascript is garbage collected (memory is managed automatically)
        When nothing is pointing to some parts of memory; it automatically delets it! 
        
    - In other low-level languages, you have to mange it yourself
        You have to manually delete the un-referenced items in memory!
*/
