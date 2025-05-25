console.log("@@@@@@@@@@@ JS Functions @@@@@@@@@@@");

    // Block of code that performs a specific task on its invocation where it needed
    // functions prevent us from writing redendent code and make code more reliable

    function callSbz() {                                    // function definition
        console.log("Bolo Barkhurdaar, I am Shahbaz Patel(The Great coder of Asia).");
    }

    callSbz();                                              // function call
    callSbz();





    function printSbzData(name, age, place) {               // function definition with parameters
        console.log("###### Sbz Data ######");
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Place:", place);
        console.log("###### Sbz Data ######");
    }

    printSbzData("Shahbaz Patel", 35, "Pune");             // function call with arguments(name, age, place)





    // calculate sum of 2 numbers

    function sumFun(n1, n2) {
        console.log(`Sum of ${n1} & ${n2} is ${n1 + n2}.`);
    }

    sumFun(4, 7);





    function diffFun(n1, n2) {          // function defintion with return value
        return n1 - n2;
        console.log("don't run this command after return.");         // statment not able to run
    }
    // functions parameters are local scope within that same function only

    let diff = diffFun(5, 1);
    console.log("Difference of 5 & 1 is", diff);
    console.log(`Diffeence of 5 & 1 is ${diff}`);       // expression return using back ticks(``)



    // Functions can assign to the variable (Function expression) //

    const sum = function() {
        console.log("Its a sum function...");
    }

    sum();



    // Functions Parameters & Arguments //
        // Parameters: Variables declared in the function definition
        // Arguments: Actual values passed to the function during call



    // Default Paramters //

        function greet(name = "Shahbaz") {
            console.log(`Hello, ${name}`);
        }

        greet("Kaleem");        // Hello, Kaleem
        greet();            // Hello, Shahbaz



    // Function Expression (We can assign function to the variable) //

        const greet = function(name = "Shahbaz") {
            console.log(`Hello, ${name}`);
        }

        greet("Shahbaz");        // Hello, Kaleem



    // Anonymous Function (Functions without a name. Commonly used in expressions or callbacks) //

        setTimeout(function() {
            console.log("This runs after 3 seconds...");
        }, 3000);



    // Immediately Invoked Function Expressions (IIFE) //

        (function() {
            console.log("This is an IIFE");
        })();



    // Function Scope //

        function test() {
            let message = "Hello Shahbaz!!";
        }

        console.log(message);   // we cannot use function scoped variable outside that function(ReferenceError occurred)



    // Function Closure //
        
        // A function remembers the variable from its outer scope even after that scope has closed. 

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



    // Function passing as an argument //

        function doSomething(fn) {
            fn();
        }

        doSomething(() => console.log("Called from inside another function..."));


    
    // Function Hoisting //

        // Function declarations are hoisted (moved to the top) during compilation.

        sayHello();

        function sayHello() {
            console.log("Hello Shahbaz!!!");
        }

        // But Function Expressions are not hoisted during compilation.

        sayHello();

        const sayHello = function () {
            console.log("Hello Shahbaz!!!");    // referenceError occurred
        }



    // Higher order Function //

        // A function takes another function as an argument or returns a function.

        function operate(callback) {
            return callback(2, 3);
        }

    
    
    // Javascript function overloading //
        // JS not supports function overloading, but every function has 'arguments' object which shows the no. of arguments passed during function invokation
        
        function greet(name) {
            if(arguments.length == 0) {     // checks arguments presents or not by 'arguments.length' 
                console.log("Hello!!");
            } else if(arguments.length == 1) {
                console.log("Hello "+ name);
            }
        }

        greet();        // Hello!!
        greet("Shahbaz");       // Hello Shahbaz




    // Arrow function //
        // Advanced type of function to declare with more concisely to write.

        const mul = (x,y) => x+y;   

        const square = x => x*x;    // if the function has single parameter, parenthesis are optional

        const divide = (a, b) => {      // For more complex logic, use curly braces and an explicit return
            if (b === 0) return "Cannot divide by zero";
            return a / b;
        };
    



    // Constructor Function //
    
        // Constructor function used to create objects in javascript.
        // Conventionally function name should a capitalized.

        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        const sbz = new Person("Shahbaz", 35);



    // Async Function //
        // Used to handle Asynchronous programming, returns a Promise.

        async function fetchData() {
            let response = await fetch("https://api.example.com/data");
            let data = await response.json();
            return data;
        }

    

    // Currying in Javascript Function //
        // Currying is a functional programming technique where a function with multiple parameters is transformed into a sequence of functions, each taking one argument at a time.

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

        // Why curring useful in functions? //
            // 1) Reusability/Partial Application
                // We can create specialized versions of functions:

                const multiply = a => b => a*b;

                const double = multiply(2);
                console.log(double(5));

            // 2) Each function focuses on one argument, leading to clearer logic and testable code.

            // 3) It helps to better integration with libraries due to its simple pattern.



    // What are Debouncing & Throttling in Javascript?
        // Debouncing & throttling are techniques to control how to function executes in performance-sensitive situations like scroll, resize, input or keypress events.

        


console.log("@@@@@@@@@@@ JS Functions @@@@@@@@@@@");