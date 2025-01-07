// JavaScript is a dynamically typed language.
// In JavaScript, you don’t need to declare the type of a variable when you create it. The type is determined at runtime, based on the value assigned to the variable.

//  Primitive means Old

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ************************* stack and heap memory *****************************

// The stack is used to store primitive values (like numbers, strings, booleans, etc.) and function call information.

// Stack memory is small, but fast, and it's automatically cleaned up once the function call ends.

// The heap is used to store objects, arrays, functions, etc. (reference types).

// The heap is larger and slower compared to the stack, and garbage collection is used to free up memory.

function demoMemory() {
    let x = 10;            // Stack: primitive (number)
    let y = "hello";       // Stack: primitive (string)
    let z = { name: "Jane" }; // Heap: object
  
    let arr = [1, 2, 3];   // Heap: array
  
    console.log(x, y, z, arr);
  }
  
demoMemory();
  