// ✅ $$$$$$$$$$$$$$$$$ Function Memoize $$$$$$$$$$$$$$$$$ ✅ //

    // Function Memoization in JavaScript is an optimization technique that involves storing the results of expensive function calls and returning the cached result when the same inputs occur again. 
    
    // Essentially, it's a way to "remember" the output of a pure function for specific inputs, avoiding redundant computations. 


    // Eg1: (Basic Example)
        function memoizedSquare() {
            const cache = {};  // store previous results

            return function (n) {
                if (cache[n] !== undefined) {
                    console.log("Fetching from cache...");
                    return cache[n];
                } else {
                    console.log("Calculating...");
                    cache[n] = n * n;
                    return cache[n];
                }
            };
        }

        const square = memoizedSquare();

        console.log(square(5)); // "Calculating..." → 25
        console.log(square(5)); // "Fetching from cache..." → 25
        console.log(square(6)); // "Calculating..." → 36


    // Eg2: (Fibonacci with Memoization)
        function fibonacci(n, cache = {}) {
            if(n <= 1) {
                return n;
            }

            if(cache[n]) return cache[n];

            cache[n] = fibonacci(n-1, cache) + fibonacci(n-2, cache);
            return cache[n];
        }

        console.log(fibonacci(40)); // Fast due to memoization

// ✅ $$$$$$$$$$$$$$$$$ Function Memoize $$$$$$$$$$$$$$$$$ ✅ //
