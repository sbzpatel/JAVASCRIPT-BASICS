// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Pure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

    // A pure function is a function that:
        // 1) Always produces same output for the same input
        // 2) Does not cause any side effects

    // A pure function is predictable and self contained(no any external variable or dependency involved).

    // Eg:
        function square(x) {
            return x*x;     // here input "4" always gives an output "16"
        }



    // There are 2 rules of purity //

        // 1) Deterministic (Same input -> Same output) ->> 
            // The output must only depend on the input values.

            // Eg:
                function multiply(a, b) {
                    return a * b;       // Always returns "6"  when called with "2" & "3"
                }

            
            // 2) No side effects ->>
                // The function doesn't:
                    // 1) Modify external variables
                    // 2) log to console
                    // 3) change the DOM
                    // 4) Make HTTP requests
                    // 5) Cange input parameters (mutate them) 

    // There are 2 rules of purity //



    // Benefits of Pure functions //

        // 1) Easy to test
        // 2) Easy to debug
        // 3) Easy to reuse
        // 4) Supports memoization (Results can be cached to avoid recomputation

    // Benefits of Pure functions //

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Pure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Impure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

    // Impure functions exactly opposite of pure functions.

    // Eg: (Has side effect)
        let counter = 0;

        function increment() {
            counter+=1;     // modifies external variable
            return counter;
        }

    // Eg: (Not Deterministics)
        function getRandom() {
            return Math.random();   // We can't predicts the output of that function
        }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Impure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //