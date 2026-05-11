
// Task 1 – Output and Datatype

console.log("10" + 5);       
// Output: 105
// Datatype: string

console.log(10 + true);      
// Output: 11
// Datatype: number

console.log(false + null);   
// Output: 0
// Datatype: number

console.log("Hello" + undefined); 
// Output: Helloundefined
// Datatype: string

console.log([1,2] + 5);      
// Output: 1,25
// Datatype: string



// Task 2 – Implicit Type Casting

// String + Number
let a = "20" + 10;
console.log(a, typeof a);
// Output: 2010 string

// Boolean + Number
let b = true + 5;
console.log(b, typeof b);
// Output: 6 number

// Array + String
let c = [1,2] + "JS";
console.log(c, typeof c);
// Output: 1,2JS string

// Object + Number
let d = {} + 10;
console.log(d, typeof d);
// Output: [object Object]10 string

// Null + Number
let e = null + 5;
console.log(e, typeof e);
// Output: 5 number



// Task 3 – Explicit Type Casting

console.log(Number("500"));  
// Output: 500

console.log(Number(true));   
// Output: 1

console.log(Number(false));  
// Output: 0

console.log(Number(null));   
// Output: 0

console.log(Number("abc"));  
// Output: NaN

console.log(Number([100]));  
// Output: 100


// Task 4 – Boolean Constructor

console.log(Boolean(""));            
// Output: false

console.log(Boolean("javascript"));  
// Output: true

console.log(Boolean(0));             
// Output: false

console.log(Boolean(1));             
// Output: true

console.log(Boolean(null));          
// Output: false

console.log(Boolean(undefined));     
// Output: false

console.log(Boolean([]));            
// Output: true

console.log(Boolean({}));            
// Output: true



// Task 5 – Student Pass or Fail

let mark = 45;

if(mark > 35){
    console.log("Pass");
} else {
    console.log("Fail");
}

// Output: Pass



// Task 6 – Voting Eligibility

let age = 20;

if(age >= 18){
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Output: Eligible



// Task 7 – Greatest Number

let x = 50;
let y = 80;
let z = 30;

if(x > y && x > z){
    console.log("x is greatest");
}
else if(y > x && y > z){
    console.log("y is greatest");
}
else{
    console.log("z is greatest");
}

// Output: y is greatest



// Task 8 – Traffic Light System

let signal = "red";

switch(signal){

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// Output: Stop



// Task 9 – Login System

let username = "admin";
let password = "1234";

if(username == "admin"){

    if(password == "1234"){
        console.log("Login Success");
    }
    else{
        console.log("Invalid Password");
    }

}
else{
    console.log("Invalid Login");
}

// Output: Login Success




// Task 10 – Session Finder
let hour = 14;

if(hour >= 1 && hour <= 12){
    console.log("Morning");
}
else if(hour >= 13 && hour <= 15){
    console.log("Afternoon");
}
else if(hour >= 16 && hour <= 19){
    console.log("Evening");
}
else if(hour >= 20 && hour <= 24){
    console.log("Night");
}
else{
    console.log("Invalid Time");
}

// Output: Afternoon



// Bonus Challenge 🔥

console.log(true + true);
// Output: 2

console.log("5" - 2);
// Output: 3

console.log("5" + 2);
// Output: 52

console.log(null + 1);
// Output: 1

console.log(undefined + 1);
// Output: NaN

console.log(Boolean(" "));
// Output: true

console.log(Number(true));
// Output: 1