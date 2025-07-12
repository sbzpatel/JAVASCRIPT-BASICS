// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Callback Function $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // A callback is a function passed as an argument to another function during invocation. The callback function starts to execute when another function has finished its execution.
    
    // Callbacks are often used to handle asynchronous events such as Network Requests, File I/O operations and working with a timers.


    // Eg:
        function sum(a, b) {        // callback Function definition
            console.log(a + b);
        }

        function calculator(a, b, sumCallback) {    // we pass this callback function 'sumCallback' as an argument in function 'calculator'
            sumCallback(a, b);      // callback Function called
        }

        calculator(5, 5, sum);  // dont pass callBack function like sum(), its wrong

        calculator(8, 6, (a, b) => {    // here we directly pass the function definition by arrow function
            console.log(a + b);
        })



    // callback function is run synchronously and asynchronously as below where we are going to see 
    // the function hello runs asynchronously

    // Eg:
        const hello = () => {
            console.log("Hello Sbz!!!, how are u...");
        }

        setTimeout(hello, 3000);    // hello function will call after 3 seconds



    // Below code shows the "45-asyncExecution.js" program execution in sequentially using callback function
    // Here all the Statements are executes sequentially, after executes Statement1 goes to the Statment2 and after completing in 3 seconds then and only goes for Statement3 and Statement4

    // Eg:
        function initialExecution(callbackFun) {
            console.log("Statement1 executes...");
            
            setTimeout(() => {
                console.log("Statement2 executes...");
                
                callbackFun();
            }, 3000)
        }

        function afterExecution() {
            console.log("Statement3 executes...");
            console.log("Statement4 executes...");
        }

        initialExecution(afterExecution);

        // Above code shows the "45-asyncExecution.js" program's execution sequentially using callback function.

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Callback Function $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //