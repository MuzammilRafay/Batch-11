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
// index will start from 0
//and we have indexes in each value of array

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
let adnan = [1, 2, 3];
// let abdulHadi = adnan; //reference
let abdulHadi = [...adnan]; //spread operator (copy of new array)

abdulHadi.push(4); //push method will add value at the end of array //[1,2,3,4]

console.log(adnan, "first value"); //[1,2,3]
console.log(abdulHadi, "second value"); //[1,2,3,4]

//Super Array
// JSON.parse(JSON.stringify(array))

//There are three types of variables declaration
// 1-let
// 2-const
// 3-var (deprecated/ old version)

// {} = scope
// we will see the scope in functions in if else statements

// function name(){

// }

// if(true){

// }

// while(true){

// }

//let variable will work only inside of the scope

{
  let working = "aaa";
  console.log(working, "working");
}

// console.log(working, "working");

//const variable will work only side of the scope and we cannot re assign the constant variable

{
  const coachingName = "Squad Coders dev";
  // coachingName = "asdasd"; //cannot change
  // console.log(coachingName);
  // coachingName = "KKK";
}
// console.log(coachingName); //undefined error

//var

//var will not work in scope except function scope
{
  var headphone = "sony";
}
console.log(headphone, "headphone"); //it will work
// console.log(typeof headphone, "headphone");

// function sayMyName() {
//   var name = "John";
// }

// console.log(name); //you cannot access var variable outside of the scope when this is a function scope

//developer say that we should not use var in javascript code

//1st priority is const
//2nd is let

//javascript is case sensitive

//variables mein capital or small letter se faraq parta hai = case sensitive
let some = "123123";
let Some = "111";

console.log(some, "some");
console.log(Some, "Some");

//naming of variables
// letters,
// underscore,
// camelcase,
// pascal case

const asdasdasd = "aaaa"; //letters = (a to z and A to Z and 1 to 10)
const company12311212 = "aaaa";

const html_css_javascript_react_react_native = "course"; //underscore
const htmlCssJavascriptReactReactNative = "course"; //camel case
const HtmlCssJavascriptReactReactNative = "course"; //pascal case

//you can define string with single/double quotes

//"" = double quote
//'' = single quote

//how we can convert variable types to another types

const testing = "12312312312";

//convert string to number

const mousePrice = "200"; //type string
const total = parseInt(mousePrice) + 2; // 202
// console.log(total);

const keyboardPrice = "2.2";
const keyboardTotal = parseFloat(keyboardPrice) + 2;
