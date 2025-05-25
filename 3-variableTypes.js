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

//###################### Challenging JavaScript Questions on var, let, and const ######################//
    console.log(a);
    var a = 10;     // Output ->> undefined

    // var variable hoisted(pulled up) at the top with an intial value of undefined. So the output is 'undefined'.



    console.log(a);
    let a = 20;     // Output ->> ReferencError

    // let variable hoisted(pulled up) at the top but not intialized, so accessing it before intialization is not allowed(this situation called Temporal Dead Zone).



    {
        let x = 5;
    }
    console.log(x);     // Output ->> ReferencError

    // let is 'block-scope', so x variable not accessible outside the class, so the output should be 'ReferencError'.



    for(var i=0;i<4;i++) {
        setTimeout(() => console.log(i), 100);
    }
    //  Output ->> 3 3 3 

    // Because 'var' is function-scoped, all callbacks share the same 'i' which ends up as 3 after the loop.



    for(let i=0;i<4;i++) {
        setTimeout(() => console.log(i), 100);
    }
    //  Output ->> 0 1 2 

    //  `let` is block-scoped, so each iteration gets a fresh `i`.



    // @@@@ Mutation of const object @@@@ //

        const obj = {name:"Shahbaz"};
        obj.name="Sbz";
        console.log(obj.name);      // Output ->> Sbz

        // const prevents reassignment, not mutation. And we can mutate the object(Non-primitive data type).

    // @@@@ Mutation of const object @@@@ //



    // const a;    // Error occurred
    a = 10;
    console.log(a);

    // `const` must be initialized at the time of declaration.



    var x = 1;

    function foo() {
        console.log(x);
        var x = 2;
    }
    foo();      //  Output ->> undefined

    // var has functional scope in functions, so in function foo it is hoisted and initiazed as 'undefined'. So console.log(x) see the local 'x' not an outer 'x'.
    // Outer x and in foo() function x variables are different.



    let a = 10;
    let a = 20;

    // Can not redeclare let variable.

    // in variables 'const' & 'let' both creates a 'Temporal Dead Zone' but not 'var' because it hoisted and initialized as 'undefined'.


    /*

    Functional Scope ->> 
        The variable is only accessible within the function where it is declared (including nested blocks), and not outside of it.
        In JavaScript, variables declared with **var** are function-scoped.

        Eg:
            function greet() {
            var message = "Hello!";
            console.log(message); // ✅ Works here
            }

            greet();
            console.log(message); // ❌ ReferenceError: message is not defined

        Even if a var variable is inside a block (like an if or for), it still belongs to the whole function, not just the block.

        Eg:
            function test() {
                if (true) {
                    var a = 42;
                }
                console.log(a); // ✅ 42 (still accessible here)
            }   
            test();     // Output ->> 42

        But in case of let & const are block scope, so ReferenceError will be come as below example,

        Eg:
            function test() {
            if (true) {
                let b = 10;
            }
            console.log(b); // ❌ ReferenceError
            }

    */

//###################### Challenging JavaScript Questions on var, let, and const ######################//