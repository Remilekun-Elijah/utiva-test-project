/*
 */
// let john = "John"; // string
// let age = 31.5; // number
// john = `moses`;
// let name = john;

// const isMarried = true; // boolean
// const isDeceased = false; // boolean
// const isEmployed = false; // boolean

// const nil = null;
// let undef = undefined;

// let gender; // undefined
// console.log(gender);

// gender = "John Doe";
// console.log(gender);

// // name = "Johnathan";
// age = 35;

// console.log("Hi, my name is", name, "and i am", age, "years old");

// age; // 19

// let a = undefined;
// a = null;
// `` '' ""

/*
  1. Variable
    - keywords (const, let, var)
  2. Data Types
      - String
      - Number
      - Boolean
      - Null
      - Undefined
      - Symbol - Not common
      - Bigint - Not common
      - Array
      - Object
      - Function
      
      3. Control Flow (Logical Operation)
      - if statement
      - else if statement
    - else statement
    - ternary operator ( ? : )
    4. Error handling
    5. Promise
    6. Operators
*/

// TODO Explain ARRAY, OBJECT & FUNCTION

// after hundreds of lines of code
// keyword -  name of the function - parentheses - block

function getAge() {
  // the task or instruction goes here
  let age = 19;

  // age = age + 1;
  age++; // 19 + 1 = 20
  age += 10; // 20 + 10 = 30
  age -= 10; // 30 - 10 = 20

  return age / 2; // 20 / 2 = 10
}

// call getAge function

const age = getAge();

function multiplyNumbers(parameter1, parameter2) {
  return parameter1 * parameter2;
}

const x = multiplyNumbers(10, 20);
const y = multiplyNumbers(30, 50);

function returnName(name) {
  return name;
}

function generateAccount(userData) {
  const accountObject = {
    name: userData.name,
    age: userData.age,
    bvn: userData.bvn,
    accountNumber: Math.random() * 1000000,
  };

  return accountObject;
}

// const user = { name: "Remi", age: 20, bvn: 3937392 };
// const account = generateAccount(user);

// console.log(account);

/** JAVASCRIPT OBJECT **/
// const user = Object();
const user = {
  name: "John",
  email: "james@gmail.com",
  age: 21,
  isMarried: false,
  getName: function () {},
};

/*
  1. Dot (.) Notation
  2. Bracket Notation ([])
*/

// Adding data to the object
user.age++;
user.age++;
user.age += 10;

user.gender = "Male";
user.isEmployed = true;

user.getSummary = function () {};

user.getSummary();
// Bracket notation
user["name"] =
  "My pc is low rn and it can sign out anytime... i'm so sorry for that. ill  make sure to watch the  prerecorded video";

user["isMarried"] = true;

user["getName"] = function () {
  return user.name;
};

const key = "name";

// console.log(user[key]);
// console.log(user.age, user["isMarried"], user["getName"]());

// JAVASCRIPT ARRAY
// const wishList = Array();
const wishList = [
  "Get an iPhone",
  "Make a new friend",
  true,
  null,
  function () {},
  20,
  undefined,
  { name: "iPhone" },
  [false, { name: "iPhone" }],
];

let result = [];

result[0] = "iPhone";
result[1] = "Bicycle";

result.push("Get a car");
result.push("Buy a house");

result.unshift("Buy a hat");

// result.pop();
// result.pop();
// result.pop();

// result.shift();

const filteredResult = result.filter(function (item) {
  if (item != "Bicycle") {
    return item;
  }
});

console.log(filteredResult);
console.log(result);

// console.log(returnName("SLSL"));

// variable keyword - variable name - assignment operator - value - end it with semi colon
// let age = 90;

// TODO
// Next class - Let's Look at How to Solve Problems
//  -  DOM Manipulation [Continues]
// Optional - Setup a React Project

// TODO
// Next class - Get Familiar with React
