console.log("Variable Types");

// 3 types of variable types 
// 1)let      2)var       3)const

// 1) var ->> Its a global scope variable. can be re-declared & updated.

// 2) let ->> Its a block scope variable. can't re-declare but can update it.

// 3) const ->> Its can't redeclare or re-assign(update).

var a = 20;

var a = 35;

// var a = 50;

console.log(a);



let b = 30;

// let b = 44;      // Wrong

b = "Shahbaz";

console.log(b);



const pi = 3.14;

// const pi = 4;    // Wrong

console.log(pi);