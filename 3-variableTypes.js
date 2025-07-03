// ✅ ##############  Variable Types (Variable Declaration Keyword) ############## ✅ //

    // Variable can declare using different keywords(var, let & const) which are differ in their scope.
    
    // There are 3 variable declaration keywords in javascript:
    // 1) var      2) const       3) let

    // ✅ 1) var ->> The oldest method for declaring variables. It has function-scoped and allow to re-declare and re-assign its value. Now a days we avoiding to use it, to prevent from unexpected behavior of a program.

    // Eg:
        var a = 20;

        var a = 35;

        // var a = 50;

        console.log(a);


    // ✅ 2) let ->> Introduced in ES6, it has block-scoped and does not allow re-declaration within the same scope(but we can re-assign its value).

    // Eg:
        let b = 30;

        // let b = 44;      // Wrong

        b = "Shahbaz";

        console.log(b);


    // ✅ 3) const ->> Also introduced in ES6, const is block-scoped and cannot be re-assign after their initial value is set on declaration. 

    // Eg:
        const pi = 3.14;

        // const pi = 4;    // Wrong

        console.log(pi);

// ✅ ##############  Variable Types (Variable Declaration Keyword) ############## ✅ //


// ✅ ###################### Challenging JavaScript Questions on var, let, and const ###################### ✅ //
    console.log(a);
    var a = 10;     // Output ->> undefined

    // var variable hoisted(pulled up) at the top with an initial value of undefined. So the output is 'undefined'.



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

    // var has functional scope in functions, so in function x is hoisted and initiazed as 'undefined'. So console.log(x) see the local 'x' not an outer 'x'.
    // Outer x and in foo() function x variables are different.



    let a = 10;
    let a = 20;

    // Can not redeclare let variable.

    // in variables 'const' & 'let' both creates a 'Temporal Dead Zone' but not 'var' because it hoisted and initialized as 'undefined'.


    /*

    ✅ Functional Scope ->> 
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

// ✅ ###################### Challenging JavaScript Questions on var, let, and const ###################### ✅ //