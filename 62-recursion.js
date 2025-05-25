
// $$$$$$$$$$$$$$$$$$$$$$$$ Recursion in Javascript $$$$$$$$$$$$$$$$$$$$$$$$ //

    // Recursion is a programming technique where a function calls itself to solve smaller instance of the same problem.
    // It is useful for problems that can be broken down into simillar sub-problems like factorial calculation, fibonacci series etc.
    
    // Eg: (Basic structure)
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
                return n * factorial(n-1);  //recursive case
            }
        }
        
        console.log(factorial(5));      // 120
        
    // Eg: (Fibonacci)
        function fibonacci(n) {
            if(n <=1) {
                return n;
            } else {
                return fibonacci(n-1) + fibonacci(n-2);
            }
        }
        
        console.log(fibonacci(6));      // 8
        
        
        
    // ⚠️ Key Concepts ->>
        // 1) Base case ->> 
        //     The condition that stops recursion (it prevents infinite loop)
        // 2) Recursive case ->> 
        //     The function continues calling itself.
        // 3) Call Stack ->> 
        //     Each recursive call is pushed to the call stack. Too many calls may cause a stack overflow.



    // ✅ When to Use ->> 
        // 1) Tree or graph traversal
        // 2) Divide-and-conquer problems (e.g., merge sort)
        // 3) Problems naturally defined recursively (e.g., Tower of Hanoi)    


        
    /*
    
    🔄 Recursive vs Iterative ->> 
    | Recursive                             | Iterative                          |
    | ------------------------------------- | ---------------------------------- |
    | Elegant, closer to problem definition | Often more efficient in JavaScript |
    | Can cause stack overflow              | No risk of call stack overflow     |
    | Sometimes easier to understand        | Often faster and less memory usage |

    */
    
// $$$$$$$$$$$$$$$$$$$$$$$$ Recursion in Javascript $$$$$$$$$$$$$$$$$$$$$$$$ //
