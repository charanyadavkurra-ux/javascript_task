// Section 1: Variable (1-8)
var a = 10;
a = 15;
console.log("Value of a:", a); // Output: Value of a: 15

let b = 20;
let b = 30; //This will cause an error because 'b' has already been declared with 'let'

const c = 50;
console.log("Value of c:", c); // Output: Value of c: 50

const x = 10;
x = 20; // This will cause an error because 'x' is a constant and cannot be reassigned

var p = 5;
var p = 10;
console.log("Value of p:", p); // Output: Value of p: 10

let q = 25;
q = q + 10;
console.log("Value of q:", q); // Output: Value of q: 35

const r = 7;
console.log("Value of r + 3:", r + 3); // Output: Value of r + 3: 10

// Section 2: Console Methods (9-12)
// 9. Which method prints normal output? -> console.log()
// 10. Which method prints warning messages? -> console.warn()
// 11. Which method prints error messages? -> console.error()
// 12. What does console.clear() do? -> It clears the console of all previous messages and outputs.

