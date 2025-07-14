// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Recursion in Javascript $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // Recursion is a programming technique where a function call itself to solve smaller instance of the same problem.

    // It is useful for problem that can be divided into simillar sub-problems like factorial calculation, fibonacci series & etc.


    // ⚠️ $$$$$$$$$$$$$$$$$$$$$$$$ Key Concepts $$$$$$$$$$$$$$$$$$$$$$$$ ⚠️ //

        // 1) Base Case =>
            // The condition that stops recursion (it prevents from infinite loop)
        // 2) Recursive Case => 
            // The function continuosly calling itself.
        // 3) Call Stack => 
            // Each recursive call is pushed to the call stack. Too many calls may cause a stack overflow.

    // ⚠️ $$$$$$$$$$$$$$$$$$$$$$$$ Key Concepts $$$$$$$$$$$$$$$$$$$$$$$$ ⚠️ //


    
    // Eg: (Basic Structure)
        function recursiveFunction(parameters) {
            if(baseCondition) {
                return result;
            } else {
                // call the function itself
                return recursiveFunction(modifiedParameters);
            }
        }

        
    // Eg: (Factorial)
        function factorial(n) {
            if(n === 0) {
                return 1;   // base case
            } else {
                return n * factorial(n-1);  // recursive case
            }
        }
        
        console.log(factorial(5));      // 120
        
        
    // Eg: (Fibonacci numbers count)
        function fibonacci(n) {
            if(n <= 1) {
                return n;
            } else {
                return fibonacci(n-1) + fibonacci(n-2);
            }
        }
        
        console.log(fibonacci(6));      // 8



    // ✅ When to Use ✅ //
        // 1) Tree or graph traversal
        // 2) Divide-and-conquer problems (e.g. merge sort)
        // 3) Problems naturally defined recursively (e.g. Tower of Hanoi)    


        
    /*
        🔄 Recursive vs Iterative 🔄
        | Recursive                             | Iterative                          |
        | ------------------------------------- | ---------------------------------- |
        | Elegant, closer to problem definition | Often more efficient in JavaScript |
        | Can cause stack overflow              | No risk of call stack overflow     |
        | Sometimes easier to understand        | Often faster and less memory usage |
    */
    
// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Recursion in Javascript $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //