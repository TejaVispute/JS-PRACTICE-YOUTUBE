// premetive data type

// Types 1)String 2)Number 3)Boolean  4)null 5)undefined 6)Symbol 7)BigInt


let value = 100;
let numValue =102.4;
let temp = null;
let isLoggedIn = false;
//Reference Type (Non Premetive datatype)
const Id = Symbol("123")
// console.log(typeof Id);

// const bigNumber= 122365412577422514n
// console.log(typeof bigNumber);

// 1)Array 2)Objects 3) Functions

let heros =["shaktiman","superman","batman"];

let obj = {
    name:"Tejas",
    age:24
}

const myFunction = function(){
    console.log("function")
}

// console.log(typeof heros);
// console.log(typeof obj);
// console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory (Premetie Datatype) heapmemory (Non Premetive Datatype)


let myName="Tejas";

let my2ndName="Teja";

my2ndName="Bhaisa";

console.log(myName);
console.log(my2ndName)


// in non premetive datatype


let userOne={
    name:"Tejas",
    number:"8862019871"
}

let userTwo= userOne;

userTwo.name="Teja";

console.log(userOne.name)
console.log(userTwo.name)


