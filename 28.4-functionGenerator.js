// ✅ $$$$$$$$$$$$$$$$$ Function* Generator $$$$$$$$$$$$$$$$$ ✅ //

    // In JavaScript, a generator function is a special type of function that can be paused and resumed during its execution.

    // Unlike regular functions that run to completion, generator functions can yield multiple values over time, making them useful for creating iterators, handling asynchronous operations, and managing large datasets. 

    // Eg:
        function* simpleGenerator() {
            yield 'Hello';
            yield 'World!';
            return 'Done!';
        }

        const generator = simpleGenerator();
        console.log(generator.next());  // { value: 'Hello', done: false }
        console.log(generator.next());  // { value: 'World!', done: false }
        console.log(generator.next());  // { value: 'Done!', done: true }
        console.log(generator.next());  // { value: undefined, done: true }


// ✅ $$$$$$$$$$$$$$$$$ Function* Generator $$$$$$$$$$$$$$$$$ ✅ //