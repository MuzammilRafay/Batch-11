// console.log("app.js file is working");
// alert("working");

//you can store anything in variable

// DATA TYPES
// there are two data types
// 1-primitive type
// 2-reference type / object type

//Primitive Type
//store directly in the location the variable accesses stored on the stack.

// var store; // depcreate (old version)
let store;

store = "something"; // text / string
// // console.log(store);
store = 12345; //number
store = true; //Boolean true = 1
store = false; //Boolean false = 0
store = null; // null = empty value // khali value
store = undefined;
store = Symbol("values of symbol"); //symbol
//computer = binary language

//Reference Type
// Accessed by reference Objects that are stored
// on the heap a pointer to a location in memory.

// 1-Array
// 2-Object

//we can save multiple values at a time

store = ["text/string", 123, null, true, false, undefined, [1, 2, 3], { a: 1 }];

//Object  (you can save multiple values at a time)
store = {
  a: 1,
  b: 2,
  c: 3,
};

// console.log(store);
// console.log(typeof store);

//Primitive Vs Reference Type

//Reference Type (Object)
let wasif_marks = { math: 80 };
// let muzammil_marks = wasif_marks; // <------ jab apne variable assign kia tu isne wasif_marks ka reference muzammil_marks ko dediaa
let muzammil_marks = { ...wasif_marks }; //spread operator //three dot will create a shallow copy of object with a new reference

//muzammil or wasif k marks same hai

//let's say muzammil have higher marks

muzammil_marks.math = 90;

console.log(wasif_marks, "wasif_marks");
console.log(muzammil_marks, "muzammil_marks");

//Array Example

//Reference Type (Object)
let firstValue = [1, 2, 3];
// let secondValue = firstValue; //reference
let secondValue = [...firstValue]; //spread operator (copy of new array)

secondValue.push(4); //push method will add value at the end of array

console.log(firstValue, "first value"); //[1,2,3,4]
console.log(secondValue, "second value"); //[1,2,3,4]

//Super Array

// JSON.parse(JSON.stringify(array))
