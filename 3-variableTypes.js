console.log("@@@@@@@@@@@ Variable Types @@@@@@@@@@@");

// There are 3 variable types in javascript:
// 1)var      2)const       3)let

// 1) var ->> This type of variable can store different types of data, which can redeclare and reassign its value. It has a global scope.

// 2) let ->> This type of variable can store different types of data, here we can't redeclare it but reassign its value only. It has a block(Local) scope.

// 3) const ->> This type of variable can't redeclare and re-assign(update) its value. It has a block(Local) scope. 

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

console.log("@@@@@@@@@@@ Variable Types @@@@@@@@@@@");