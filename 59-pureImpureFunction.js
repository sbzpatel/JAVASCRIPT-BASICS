// ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Pure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //

    // A Pure Function is a function that:
        // ✅ 1) Always produces a same output for the same input(function is predictable)
        // ✅ 2) Does not cause any side effects that means:
            // The function doesn't:
            // ✅ 1) Add & Modify external variables
            // ✅ 2) Change input parameters(mutate them)
            // ✅ 3) Log to console
            // ✅ 4) Make HTTP request
            // ✅ 5) Affects the DOM

    // Eg:
        function square(x) {
            return x*x;     // here input "4" always gives an output "16"
        }


    // ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Benefits of Pure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //

        // ✅ 1) Easy to test
        // ✅ 2) Easy to debug
        // ✅ 3) Easy to reuse
        // ✅ 4) Supports memoization (Results can be cached to avoid recomputation)
        
    // ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Benefits of Pure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //

// ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Pure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //



// ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Impure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //

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

// ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Impure Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //