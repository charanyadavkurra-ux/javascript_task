// Section 4: Arrays (19-24)
let fruits = ["apple", "banana", "orange"];
console.log("Fruits array:", fruits); // Output: Fruits array: ["apple", "banana", "orange"]

let arr = ["a", "b", "c"];
console.log(arr[1]);

let arr = ["x", "y", "z"]; 
console.log(arr[arr.length - 1]); // SyntaxError: Identifier 'arr' has already been declared, but if we change the variable name it will work fine and give the output: z.

// How to get first element -> arr[0] -> "x"
// Add new element to array -> arr.push("newElement") -> arr will become ["x", "y", "z", "newElement"]

// Section 5: Objects (25-28)
let person = {
    "name": "John",
    "age": 30,
};
console.log("Person object:", person); // Output: Person object: { name: 'John', age: 30 }

let obj = {
    "name": "Naveen",
};
console.log(obj1.name); // Output: Naveen

let obj = {
    fruits: ["apple", "banana"],
}
console.log(obj2.fruits[1]); // Output: banana

// How to access last element inside object arrary -> if we have an object named obj in this way
// let obj = {
//    arr: ["a", "b", "c"],
// } obj.arr[obj.length -1] -> "c"

// Section 6: Arithmetic Operators (29-32)
console.log("5 + 3 =", 5 + 3); // Output: 5 + 3 = 8

console.log(10 % 3); // Output: 1

console.log(2 ** 3); // Output: 8

console.log(10 / 2); // Output: 5

// Section 7: Increment/Decrement (33-36)
let a = 5;
a++;
console.log(a); // Output: 6

let b = 5;
let c = b++;
console.log("b, c", b, c); // Output: b, c 6 5

let x = 5;
let y = ++x;
console.log("x, y", x, y); // Output: x, y 6 6

let m = 3;
let n = m--;
console.log("m, n", m, n); // Output: m, n 2 3

// Section 8: Comparison & Logical (37-39)

console.log(5 == "5"); // Output: true

console.log(5 === "5"); // Output: false

console.log(true && false || true); // Output: true

// Section 9: Ternary Operator (40)
5 > 3 ? console.log("Yes") : console.log("No"); // Output: Yes