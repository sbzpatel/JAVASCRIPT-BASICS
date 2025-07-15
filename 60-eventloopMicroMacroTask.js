// ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Event Loop, Micro & Macro Tasks @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //

    // In the context of browser & node.js execution the core concepts are Event Loops, Micro Tasks & Macro Tasks that determine how asynchronous code is going to execute.
    // Here below is a breakdown of each in detail how they works with each other during execution:


    // ✅ $$$$$$$$$$$$$$$$$ Event Loop $$$$$$$$$$$$$$$$$ ✅ //

        // The event loop is the mechanism that coordinates the execution of code, event handlings and tasks.
        // It continuosly check for tasks in different queues and process them in a specific order.

    // ✅ $$$$$$$$$$$$$$$$$ Event Loop $$$$$$$$$$$$$$$$$ ✅ //



    // 🧱 $$$$$$$$$$$$$$$$$ Macrotasks (Tasks) $$$$$$$$$$$$$$$$$ 🧱 //
    
        // Macrotasks are the scheduled operations that are queued in the task queue(also called callback queue).
        // Each cycle of the event loop handles one macrotask, then all microtasks, then another macrotask, and so on.

        // Examples of Macrotasks:
            // 1) setTimeout
            // 2) setInterval
            // 3) setImmediate (Node.js)
            // 4) requestAnimationFrame (browser)
            // 5) I/O events (e.g., from fs.readFile in Node.js)

    // 🧱 $$$$$$$$$$$$$$$$$ Macrotasks (Tasks) $$$$$$$$$$$$$$$$$ 🧱 //



    // 🔬 $$$$$$$$$$$$$$$$$ Microtasks $$$$$$$$$$$$$$$$$ 🔬 //

        // Microtasks are smaller tasks that are executed immediately after the current operation completes. 
        // They're queued in the microtask queue.

        // Examples of Microtasks:
            // 1) Promises (.then, .catch, .finally)
            // 2) queueMicrotask
            // 3) MutationObserver callbacks (browser)

    // 🔬 $$$$$$$$$$$$$$$$$ Microtasks $$$$$$$$$$$$$$$$$ 🔬 //


        
    // 📊 $$$$$$$$$$$$$$$$$ Order of Execution $$$$$$$$$$$$$$$$$ 📊 //
        console.log('script start');

        setTimeout(() => {
            console.log('setTimeout'); // macrotask
        }, 0);

        Promise.resolve().then(() => {
            console.log('promise'); // microtask
        });

        console.log('script end');

        // ✅ Output ->>
            // script start
            // script end
            // promise
            // setTimeout

        // ✅ Explanation:
            // 1) console.log('script start') and console.log('script end') run first (synchronous).
            // 2) The Promise callback is a microtask — runs after sync code, before macrotasks.
            // 3) setTimeout is a macrotask — runs after all microtasks complete.

    // 📊 $$$$$$$$$$$$$$$$$ Order of Execution $$$$$$$$$$$$$$$$$ 📊 //

// ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Event Loop, Micro & Macro Tasks @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //