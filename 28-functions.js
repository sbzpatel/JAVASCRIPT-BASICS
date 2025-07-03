// ✅ ############## JavaScript Functions ############## ✅ //

    // Function is a block of code that performs a specific task on its invocation where its needed, that prevent us from writing redundant code and make code more reliable.

    // A JS function is defined with the `function` keyword, followed by a name, followed by parantheses() and curly braces({}) which having functional code.

    // Eg:
        function callSbz() {                                    // function definition
            console.log("Bolo Barkhurdaar, I am Shahbaz Patel(The Great coder of Asia).");
        }

        callSbz();                                              // function call
        callSbz();



        function printSbzData(name, age, place) {  
            // function definition with parameters name, age & place passing through parenthesis() which are local to the function only
            console.log("###### Sbz Data ######");
            console.log("Name:", name);
            console.log("Age:", age);
            console.log("Place:", place);
            console.log("###### Sbz Data ######");
        }

        printSbzData("Shahbaz Patel", 35, "Pune");             // function call with arguments - actual values("Shahbaz Patel", 35, "Pune")



    // calculate sum of 2 numbers

    // Eg:
        function sumFun(n1, n2) {       // n1 & n2 are parameters of function declaration
            console.log(`Sum of ${n1} & ${n2} is ${n1 + n2}.`);
        }

        sumFun(4, 7);       // 4 & 7 are the arguments(actual values) passed during function call



        function diffFun(n1, n2) {          // function definition with return value
            return n1 - n2;
            console.log("don't run this command after return.");         // statment not able to run
        }
        // function parameters has local scope, can access within the same function only

        let diff = diffFun(5, 1);
        console.log("Difference of 5 & 1 is", diff);
        console.log(`Diffeence of 5 & 1 is ${diff}`);       // expression return using back ticks(``)



    // ✅ ############## Function's Parameters & Arguments ############## ✅ //
        
        // Parameters: Variables declared in the function definition (It has a functional scope)
        // Arguments: Actual values passed during function call

    // ✅ ############## Function's Parameters & Arguments ############## ✅ //

    
    // ✅ ############## Default Paramters ############## ✅ //
        // Function parameters has there default value which will be sets during function definition.

        // Eg:
            function greet(name = "Shahbaz") {
                console.log(`Hello, ${name}`);
            }

            greet("Kaleem");        // Hello, Kaleem
            greet();            // Hello, Shahbaz

    // ✅ ############## Default Paramters ############## ✅ //


    // ✅ ############## Function Expression ############## ✅ //
        // We can assign function definition to the variable.

        // Eg:
            const greet = function(name = "Shahbaz") {
                console.log(`Hello, ${name}`);
            }

            greet("Shahbaz");        // Hello, Kaleem

    // ✅ ############## Function Expression ############## ✅ //


    // ✅ ############## Anonymous Function ############## ✅ //
        // Function without a name. Commonly used in expressions or callbacks.

        // Eg:
            setTimeout(function() {
                console.log("This runs after 3 seconds...");
            }, 3000);

    // ✅ ############## Anonymous Function ############## ✅ //


    // ✅ ############## Immediately Invoked Function Expressions (IIFE) ############## ✅ //
        // IIFE is a type of function where we defined and call the function at a same time & same place.

        // Eg:
            (function() {
                console.log("This is an IIFE");
            })();

    // ✅ ############## Immediately Invoked Function Expressions (IIFE) ############## ✅ //


    // ✅ ############## Function Scope Variable ############## ✅ //

        // Eg:
            function test() {
                let message = "Hello Shahbaz!!";
            }

            console.log(message);   // we cannot use function scoped variable outside that function(ReferenceError occurred)

    // ✅ ############## Function Scope Variable ############## ✅ //


    // ✅ ############## Function Closure ############## ✅ //
        // A function remember its variable from the outer scope even after that its scope has closed. 

        // Eg:
            function outer() {
                let count = 0;

                return function inner() {
                    count++;
                    console.log(count);
                }
            }

            const counter = outer();
            counter();      // 1
            counter();      // 2

    // ✅ ############## Function Closure ############## ✅ //


    // ✅ ############## Function passing as an argument ############## ✅ //

        // Eg:
            function doSomething(fn) {
                fn();
            }

            doSomething(() => console.log("Called from inside another function..."));

    // ✅ ############## Function passing as an argument ############## ✅ //

    
    // ✅ ############## Function Hoisting ############## ✅ //
        // Function declarations are hoisted(moved to the top of the scope) before the code execution, that allows to call function before its declaration without any error to improve code reliability.

        // Eg:
            sayHello();

            function sayHello() {
                console.log("Hello Shahbaz!!!");
            }

            // But Function Expressions are not hoisted during compilation.

            sayHello();

            const sayHello = function () {
                console.log("Hello Shahbaz!!!");    // referenceError occurred
            }

    // ✅ ############## Function Hoisting ############## ✅ //


    // ✅ ############## Higher order Function ############## ✅ //
        // A function takes another function as an argument or returns a function.

        function operate(callback) {
            return callback(2, 3);
        }

    // ✅ ############## Higher order Function ############## ✅ //

    
    // ✅ ############## JavaScript Function Overloading ############## ✅ //
        // JS not supports function overloading, The `arguments` object available inside every function that inspect the number of arguments passed to the function at runtime using `arguments.length`.
        
        // Eg:
            function greet(name) {
                if(arguments.length == 0) {     // checks arguments present or not by 'arguments.length' 
                    console.log("Hello!!");
                } else if(arguments.length == 1) {
                    console.log("Hello "+ name);
                }
            }

            greet();        // Hello!!
            greet("Shahbaz");       // Hello Shahbaz

    // ✅ ############## JavaScript Function Overloading ############## ✅ //


    // ✅ ############## Arrow function ############## ✅ //
        // Advanced type of function expression to declare function more concisely(Shorter syntax).

        // Eg:
            const mul = (x,y) => x+y;   

            const square = x => x*x;    // if the function has single parameter, parenthesis are optional

            const divide = (a, b) => {      // For more complex logic, use curly braces and an explicit return
                if (b === 0) return "Cannot divide by zero";
                return a / b;
            };

    // ✅ ############## Arrow function ############## ✅ //


    // ✅ ############## Constructor Function ############## ✅ //
        // Constructor function converts itself to the class declaration.
        // Constructor function used to create objects in javascript.
        // Conventionally constructor function name should be capitalized.

        // Eg:
            function Person(name, age) {
                this.name = name;
                this.age = age;
            }

            const sbz = new Person("Shahbaz", 35);      // created object of constructor function using 'new' keyword 

    // ✅ ############## Constructor Function ############## ✅ //


    // ✅ ############## Async Function ############## ✅ //
        // Used to handle Asynchronous programming, returns a Promise.

        // Eg:
            async function fetchData() {
                let response = await fetch("https://api.example.com/data");
                let data = await response.json();
                return data;
            }

    // ✅ ############## Async Function ############## ✅ //
    

    // ✅ ############## Currying in JavaScript Function ############## ✅ //
        // Currying is a functional programming technique where a function with multiple parameters are transformed into a sequence of functions, each taking single argument at a time.

        // Eg:
            function sum(a,b) {
                return a+b;
            }   // instead of this

            console.log("Sum: "+sum(5,4));  



            function sum(a) {   // declare function like this
                return function(b) {
                    return a+b;
                }
            }

            console.log("Sum: "+sum(5)(4));

        // ✅ ############## Why currying useful in functions? ############## ✅ //

            // 1) Reusability/Partial Application
                // We can create specialized version of functions:

                const multiply = a => b => a*b;

                const double = multiply(2);
                console.log(double(5));

            // 2) Each function focuses on single argument, leading to clearer logic and testable code.

            // 3) It helps to better integration with libraries due to its simple pattern.

        // ✅ ############## Why currying useful in functions? ############## ✅ //

    // ✅ ############## Currying in JavaScript Function ############## ✅ //

// ✅ ############## JavaScript Functions ############## ✅ //


// ✅ ############## Questions & Answers ############## ✅ //


        // 🧠 What is the difference between a function declaration and a function expression?
            // ✅ $$$$$$$$$$$$$$$$$ Function Declaration $$$$$$$$$$$$$$$$$ ✅ //

                // Function declaration defines the function using "function" keyword.
                // Eg:
                    function greet() {
                        console.log("Hello!!!");
                    }

                // Function declaration can hoisted(pull up at the beginning of its scope) if it called before declaration.
                // Eg:
                    sayHi();        // ✅ Works

                    function sayHi() {
                        console.log("HIIII");
                    }

                // Used in recursion easily.

            // ✅ $$$$$$$$$$$$$$$$$ Function Declaration $$$$$$$$$$$$$$$$$ ✅ //


            // ✅ $$$$$$$$$$$$$$$$$ Function Expression $$$$$$$$$$$$$$$$$ ✅ //

                // A function expression is when a function assigned to a variable.
                // Eg:
                    const greet = function() {
                        console.log("Hello!!!");
                    }

                    // also we can write using arrow function
                    const greet = () => {
                        console.log("Hello!!!");
                    }

                // Unlike function declaration, function expression cannot hoisted, hence we can't call before it's declaration.
                // Eg:
                    sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization

                    const sayHi = function() {
                    console.log("Hi!");
                    };

                // Mostly used in callbacks & closures.

            // ✅ $$$$$$$$$$$$$$$$$ Function Expression $$$$$$$$$$$$$$$$$ ✅ //



        // 🧠 What is an arrow function and how is it different from a regular function?
            // An arrow function is a shorter syntax for writing function expression, introduced in ES6(ES2015).

            // Eg:
                // Regular function expression
                const add = function(a, b) {
                    return a+b;
                }

                // Arrow function
                const addArrow = (a, b) => a+b;

            // There are key differences of Arrow Function and regular function are as below:

            /*

            | Feature                          | Arrow Function                         | Regular Function                       |
            | -------------------------------- | -------------------------------------- | -------------------------------------- |
            | **Syntax**                       | Shorter and cleaner                    | More verbose                           |
            | **`this` behavior**              | Lexically binds `this` (no own `this`) | Has its own `this` (depends on caller) |
            | **Constructor usage**            | ❌ Cannot be used as constructor       | ✅ Can be used with `new`             |
            | **`arguments` object**           | ❌ Not available                       | ✅ Available                          |
            | **Hoisting**                     | ❌ Not hoisted                         | ✅ Declarations are hoisted           |
            | **Method definition in objects** | Not recommended                        | Preferred                              |
            
            */

            // Eg: ('this' Behavior in both functions)
                // Using Regular Funciton //
                function Employee() {
                    this.age = 0;
                    setInterval(function() {
                        this.age++;     // `this` does not refer to the Person instance
                        console.log(this.age);
                    }, 1000);
                }

                // Using Arrow function //
                function ArrowEmployee() {
                    this.age = 0;
                    setInterval(() => {
                        this.age++;     // `this` refers to the Person instance
                        console.log(this.age);
                    }, 1000);
                }

            // In the arrow function, this is lexically inherited from the surrounding scope (arrow function doesn't have its own this).



        // 🧠 What is a higher-order function? Can you give an example?
            // A higher-order function is a function that takes another function(s) as an argument or returns another function as its result which makes code more reusable and modular.

            // Eg:
                function fun() {
                    console.log("Hello, World!!!");
                }

                function fun2(action) {
                    action();
                    action();
                }

                fun2(fun);

                // fun2() is a higher-order function because it takes another function(action) as an argument. It calls the action function twice.

            

        // 🧠 What is a callback function? Why are they used in JavaScript?
            // A callback function is a function passed as an argument to another function. A callback function can run after another function has finished. This mechanism is a fundamental part of asynchronous programming in javascript.

            // Eg:
                function greet(name, callback) {
                    console.log(`Hello ${name}!!!`);
                    callback();
                }

                function sayBye() {
                    console.log("Goodbye...");
                }

                greet("Shahbaz", sayBye);       // here are passing name of the callback function for a reference, not calling it

            // Output:
                // Hello, Ajay
                // Goodbye!

                

        // 🧠 What is the this keyword and how does it behave in regular functions vs. arrow functions?
            // `this` refers to the context in which a function is called, indirectly it points to current object or function which refers to.

            // 🧰 In Regular Functions  ->>
                // In a regular function, the value of this depends on how the function is called, not where its defined.

                // Eg: 
                    const obj = {
                        name: "Shahbaz",
                        greet: function() {
                            console.log(this.name);
                        }
                    }

                    obj.greet();        // "Shahbaz", `this` refers to 'obj'

                // See the below example where this keyword cannot access the context variable.

                // Eg:
                    const obj1 = {
                        name: "Shahbaz",
                        greet: function() {
                            setTimeout(function() {
                                console.log(this.name);
                            }, 3000)
                        }
                    }

                    obj1.greet();       // undefined (here not able to access the context variable 'name' inside setTimeout() function)

            // 🏹 In Arrow Functions ->>
                // to overcome from the above situation we can use arrow function.
                // Arrow function do not have its own this. Instead of it they inherits `this` from their surrounding (lexical) scope.

                // Eg:
                    const obj2 = {
                        name: "Shahbaz",
                        greet: function() {
                            setTimeout(() => {
                                console.log(this.name);
                            },3000)
                        }
                    }

                    obj2.greet();


          
        // 🧠 What is a pure function?
            // A pure function is a function that:
                    // 1) Always returns the same output for the same input
                    // 2) Does not have side effects(does not modify external variables, data or state)

            // Eg:  (pure function)
                function add(a,b) {
                    return a+b;
                }

                // In above function, if pass the arguments 5 & 4, then it returns always 9.
                // does not modify any variable or data outside the function.


            // Eg:  (Impure function)
                let count = 0;

                function increment() {
                    count++;
                    return count;
                }

                // It changes the external variable(count) ->> side effect
                // The result can change even with no input ->> not pure
            


        // 🧠 What is function hoisting in JavaScript?
            // Hoisting is a javascript default behavior of moving declarations to the top of the current scope before code execution.

            // 🔁 Function Hoisting ->>
                // 🔹 Function Declarations are hoisted ✅
                    // Here we can call them before its definition

                    // Eg:
                        sayHello(); // ✅ Works!

                        function sayHello() {
                            console.log("Hello!");
                        }

                    // Internally, JavaScript moves the entire function declaration to the top of the scope.

                    
                // 🔹 Function Expressions are NOT hoisted ❌
                    // We cannot call the function expressions before its definition(they can't be hoisted like function declaration)

                    // Eg:
                        sayHi(); // ❌ TypeError: sayHi is not a function

                        const sayHi = function() {
                            console.log("Hi!");
                        };


                // 🔹 Arrow Functions behave like function expressions ❌
                    // Arrow functions is nothing but a shorter syntax version of function expressions, that a reason it can't be hosited.

                    // Eg:
                        greet(); // ❌ Cannot access 'greet' before initialization

                        const greet = () => {
                            console.log("Hey!");
                        };

            

        // 🧠 What is a closure in JavaScript? How and why are closures useful?
            // Closure is a function that,
                // 1) remember the variables from its outer(lexical) scope, even after that outer function has finished executing.
                // 2) has access to its own scope, outer function scope and global scope.

            // Eg:
                function add() {
                    let counter = 0;
                    return function plus() 
                    { 
                        return counter += 1;
                    }
                }

                let addOne = add();

                console.log(addOne());
                console.log(addOne());
                console.log(addOne());



        // 🧠 What is the difference between call(), apply(), and bind() methods?
            // These are methods availabe on javascript function to let explicitly set the value of `this` during function invocation.

            // 📌 1. call() Method ->>
                // 1) Calls the function immediately
                // 2) We pass arguments individually

            // Eg:
                function greet(greeting) {
                    console.log(greeting+" "+this.fname)
                }

                const person = {fname: "Shahbaz"};

                greet.call(person, "Hello");     // Hello Shahbaz


            // 📌 2. apply() Method ->>
                // 1) Calls the function immediately
                // 2) We should pass arguments in a single array

            // Eg:
                function greet1(greeting1, greeting2) {
                    console.log(`${greeting1}, ${greeting2} ${this.firstName} ${this.lastName}.`);
                }

                const personn = {firstName: "Shahbaz", lastName: "Patel"}

                greet1.apply(personn, ["Hello", "How R U"]);        // Hello, How R U Shahbaz Patel.

            
            // apply() & call() both are works simillarly but major difference is call() takes single or multiple value(s) and apply() takes an single array as an argument during function call.


            // 📌 3. bind() Method ->>
                // 1) Does not call the function immediately
                // 2) Returns a new function with this and optional arguments which were permanently bound

            // Eg: 
                function greet3(greet) {
                    console.log(`${greet} ${this.name}`);
                }

                const person3 = {name: "Shahbaz"};
                
                const greetAlice = greet3.bind(person3, "Hey");
                greetAlice();       // "Hey, Alice"


        // 🧠 What is recursion? Provide an example using a function?
            // Recursion is a programming technique where a function calls itself to solve smaller instance of a problem, until it reaches a base class that stops the recursion. 
            // There are 2 parts of recursion:
                // 1) Base Case ->> the condition that stops recursion
                // 2) Recursive Case ->> the function calls itself to continue the problem-solving process.

            // Eg:  (Factorial of a Number)
                // The factorial of a number 'n' is defined as below:
                    // n! = n × (n - 1) × (n - 2) × ... × 1

                // Or recursively we can do it
                    // n! = n × (n - 1)!

                function factorial(n) {
                    if(n === 0 || n === 1) {
                        return 1;
                    }

                    // Recursive case
                    return n * factorial(n-1);
                }

                console.log(factorial(5));      // 120

            // Always include a base case to avoid infinite recursion.
            // Recursive functions can sonsume lot memory if the recursion depth is too high.



        // 🧠 Why curring useful in functions?
            // Currying is a functional programming technique where a function with multiple function is transformed into the sequence(series) of functions, each taking single argument at a time.

            // Eg:
                // Regular Function //
                // function sum(a,b) {
                //     return a+b;
                // }

                // Currying a regular function //
                function first(a) {
                    return function withSum(b) {
                        return a*b;
                    }
                }

                let sum = first(5);
                console.log(sum(4));
                console.log(sum(5));

            // 🎯 Why Is Currying Useful?
                // 1) Partial Application (Pre-fill arguments) ->>
                    // Currying lets you create specialized versions of function by pre-setting some arguments.

                    // Eg:
                        function greet(greeting) {
                            return function(name) {
                                return `${greeting} ${name}!`;
                            }
                        }

                        const sayHello = greet("Hello");
                        console.log(sayHello("Shahbaz"));       // // "Hello, Shahbaz!"

                // 2) Function Reuse and Composition ->>
                    // We can build reusable building blocks and combine them more easily.

                    // Eg:
                        const add = a => b => a+b;

                        const add5 = add(5);
                        console.log(add5(10));      // 15

                // 3) Cleaner Syntax in Functional Chains ->>
                    // Currying pairs well with functional methods like map(), filter() and reduce().

                    // Eg:
                        const users = [
                            { name: "Shahrukh", age: 56 },
                            { name: "Shahbaz", age: 30 }
                        ]

                        const isOlderThan = age => user => user.age > age;

                        const result = users.filter(isOlderThan(35));

                        console.log(result);    // [ { name: 'Shahrukh', age: 56 } ]

                // 4) Improved Readability & Debugging ->>
                    // Breaking down functions into smaller, single-argument steps makes them easier to read and test.

                // 5) Avoid Repetition ->>
                    // We avoid writing the same code multiple times by reusing pre-curried functions.


// ✅ ############## Questions & Answers ############## ✅ //