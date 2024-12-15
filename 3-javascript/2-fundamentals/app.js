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

//2nd method to convert from string to number

let testing_variable = new Number(mousePrice);
testing_variable = new Number(true); // 1
testing_variable = new Number(false); // 0
testing_variable = new Number(null); // 0
testing_variable = new Number("hello"); // NaN = Not a Number
testing_variable = new Number([1, 2, 3, 4]); // Nan = Not a Number

//Convert variables in to strings

//String Methods
testing_variable = new String(12121); // "12121"
testing_variable = new String(true); // "true"

//2nd method
let someVariable = 1;
testing_variable = someVariable.toString(); // "1"
testing_variable = (12121).toString();
testing_variable = "asdasdasd".toUpperCase(); //"ASDASDASD"

//Convert variables in to boolean
// Boolean methods
testing_variable = new Boolean(1); //true
testing_variable = new Boolean(0); //false
testing_variable = new Boolean(null); //false
testing_variable = new Boolean(""); //false
testing_variable = new Boolean("asdasdasd"); //true

testing_variable = {
  name: "Muzammil",
  designation: "Senoir Developer",
  companyName: "Simplifi",
};

//Consoles Methods
// console.log(testing_variable);
// console.table(testing_variable);
// console.warn(testing_variable);
// console.error(testing_variable);
// console.info(testing_variable);

//arthmetic operators in javascript
testing_variable = 5 + 5; // 10
testing_variable = 5 - 5; // 0
testing_variable = 5 / 5; // 1
testing_variable = 5 % 5; // 0
testing_variable = 5 * 5; // 25

//Math Object
testing_variable = Math.PI; // 3.14
testing_variable = Math.E; // 2.7 =  Euler's number
testing_variable = Math.round(2.5); // 3
testing_variable = Math.round(2.4); // 2

// The Math.floor() function returns the largest number less than or equal to a given number.
/*==================================
=            math floor            =
==================================*/
//for positive numbers
testing_variable = Math.floor(2.4); //2
testing_variable = Math.floor(2.3); //2
testing_variable = Math.floor(2.59); //2
testing_variable = Math.floor("2.3"); //2
testing_variable = Math.floor(2); //2

//for negative number
testing_variable = Math.floor(-2.4); //-3
testing_variable = Math.floor(-2.3); //-3
testing_variable = Math.floor(-2.5); //-3
/*=====  End of math floor  ======*/

testing_variable = Math.pow(8, 4); // 8 * 8 * 8 * 8 // 4096
testing_variable = Math.min(1, 2, 1, 36, 3, 4, 5, 6, 7, 8, 9); //return minimum value
testing_variable = Math.max(1, 2, 1, 36, 3, 4, 5, 6, 7, 8, 9); //return maximum value
testing_variable = Math.random() * 20 + 1;

//String Concatination (text ko jorne ki bat hori hai)
const firstName = "Muzammil";
const lastName = "Mustaqeem";

const fullName = firstName + " " + lastName; // Muzammil Mustaqeem
// const testString =
//   'Hello, World my name is \'Muzammil Mustaqeem and my age \'is 26';

//line break chahiye text mein

//wrong way
// const testString =
// "Hello, World my name
// asdasdasd
// asdasd
// is'Muzammil Mustaqeem and my age 'is 26";

//correct way
// \n = line break
const testString =
  "Hello, World my name \n \n is'Muzammil Mustaqeem and my age 'is 26";

const testString2 =
  "Hello, World my name \n \n is'" + fullName + " and my age 'is 26";

// Template Literal

// `` = back tag
// ${} = interpolation
testing_variable = `Hello, World my name 

is' ${fullName} and my age 'is 26`;

// COMPARISON
const productName = "Briyani"; //string
const customerLocation = "Karsaaz";
let deliveryCharges = 0;

if (customerLocation === "Nazimabad") {
  deliveryCharges = 300;
} else if (customerLocation === "North Karachi") {
  deliveryCharges = 90;
} else {
  deliveryCharges = 400;
}

// if (customerLocation === "North Karachi") {
//   deliveryCharges = 90;
// }

// console.log(deliveryCharges, "delivery Charges");

// == equal to

if (customerLocation == "North Karachi") {
  deliveryCharges = 90;
} else if (customerLocation == "Orangi Town") {
  deliveryCharges = 300;
} else {
  deliveryCharges = 200;
}

// === three equal to / it will check data type also

// if (1 === "1") {
//false // it is checking the data type so it will always false
if (1 == "1") {
  //true
  //it will not check data type
}

//not equal to  !=

// const mobile = "iphone";
const mobile = "china";

if (mobile != "china") {
  console.log("mobile is not from china");
} else {
  console.log("your mobile is from china");
}

//not equal !== / so it will check the both type

if (1 !== "1") {
  // true
  console.log("condition is  true");
} else {
  console.log("condition is false");
}

// GREATER OR LESS THAN

// > greater than
// < less than

8 > 10; // false
8 < 10; // true

let id = 100;

if (id < 40) {
  console.log("id is less than from 40");
}

if (id > 40) {
  console.log("id is greater than from 40");
}

//Logicl Operator

// && AND = both condition should be true
// || OR  = one condition should be true

const laptop = "lenovo";
const ram = "8gb";

if (laptop == "hp" && ram == "8gb") {
  console.log("i will purchase this laptop");
} else {
  console.log("i will not purchase this laptop");
}

if (laptop == "hp" || laptop == "dell") {
  console.log("i will purchase this laptop");
}

//Ternary Operator
//single line if else condition

// if (laptop == "hp") {
//   console.log("i will purchase this laptop");
// } else {
//   console.log("i will not purchase this laptop");
// }

//condition ? if-wala-kam : else-wala-kam;

laptop == "hp" ? console.log("true") : console.log("false");

// you can define conditions without braces
if (id === 100) console.log("id is 100");

if (id == 101) {
  // console.log("101 is true");
} else if (id == 100) {
  // console.log("100 is true");
} else if (id == 102) {
  // console.log("102 is true");
} else if (id == 103) {
  // console.log("103 is true");
} else if (id == 104) {
  // console.log("104 is true");
} else if (id == 105) {
  // console.log("105 is true");
} else if (id == 106) {
  // console.log("106 is true");
} else if (id == 107) {
  // console.log("107 is true");
} else {
  // console.log("not match any conditions");
}

//or switch case

switch (id) {
  case 101:
    // console.log("101 is true");
    break;
  case 100:
    // console.log("100 is true");
    break;
  case 102:
    // console.log("102 is true");
    break;
  case 103:
    // console.log("103 is true");
    break;
  case 104:
    // console.log("104 is true");
    break;
  case 105:
    // console.log("105 is true");
    break;
  case 106:
    // console.log("106 is true");
    break;
  case 107:
    // console.log("107 is true");
    break;
  default:
  // console.log("not match any conditions");
}

//Date Object

const today = new Date();
//client side time means your computer time

// let birthday = new Date("9-10-1981");
// let birthday = new Date("November 27 1996"); // month date year
// let birthday = new Date("11/27/1996"); // month date year

// console.log(today, "today");

// let dateValue = today.getMonth() + 1;
// dateValue = today.getFullYear();
// dateValue = today.getMinutes();
// dateValue = today.getHours();
// dateValue = today.getSeconds();
// dateValue = today.getMilliseconds();
// dateValue = today.getTime();
// dateValue = today.getDay();

// console.log(dateValue, "dateValue");

// console.log(today, "date value");
// console.log(dateValue, "date value");
// today.setMonth(1); // -1
// today.setDate(2); // -1
// today.setDate(2); // -1
// today.setFullYear(1985);
// today.setHours(3);
// today.setMinutes(22);
// today.setSeconds(25);

// console.log(today, "date value");

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

// console.log(day, "day");

//Functions

//A function is simply a “chunk” of code that
//you can use over and over again, rather
//than writing it out multiple times.Functions
// enable programmers to break down or decompose
//a problem into smaller chunks, each of which performs a particular task.

// function getMyCustomDay(getDay) {
//   let day;
//   switch (getDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//   }
//   return day;
// }

// console.log(getMyCustomDay(new Date().getDay()));

function normalFunction() {
  console.log(`normal function`);
}

normalFunction(); //callback

//pass parameter
function printMyName(myName) {
  console.log(`My name is ${myName}`);
}

printMyName("Abdul wasay");
printMyName("Ali khan");
printMyName("Saad");

function printFullName(firstName, lastName) {
  console.log(`My full name is ${firstName} ${lastName}`);
}

printFullName("Abdul", "Wasay");

function infiniteParameterFunction(firstParam, secondParam, ...restParams) {
  console.log(firstParam, "first name");
  console.log(secondParam, "second name");
  console.log(restParams, "rest params"); //rest operator //[3, 4, 5, 6, 7, 8, 9]
}

infiniteParameterFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);

//we can return things from functions

function checkCondition() {
  return false;
  // return "abdul wasay";
  // return [1, 2, 4, 5, 6];
}

const checkConditionVariable = checkCondition(); //checkCondition = false
// const checkConditionVariable = false; //checkCondition = false

// console.log(checkCondition(), "checkCondition()");

// let counter = 0;
// console.log(counter); // 0

// function add() {
//   counter += 1;
//   console.log(counter);
// }

// add(); // 1
// add(); // 2
// add(); // 3
// add(); // 4

// counter = 10000
// add()// 10001
