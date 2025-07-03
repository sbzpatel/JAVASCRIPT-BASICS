// ✅ $$$$$$$$$$$$$$$$$ Debouncing & Throttling $$$$$$$$$$$$$$$$$ ✅ //

    // Debouncing & Throttling are techniques to control how a function exectues, especially useful in performance-sensitive situations like scroll, resize, input or keypress events.

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Debouncing @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

        // Debouncing ensures a function is only called once after a certain period of inactivity.
        // It waits until the user has stopped triggering the event.
        // In Search Field, on each key press triggering api calls, to avoid this we are using debouncing.
        // Simillarly, we are using debouncing technique for window resize events.
        // In these all scenarios, should wait until we have stopped typing for 300ms before doing something.
        
        // Eg:
            function debounce(fn, delay) {
                let timer;
                return function(...args) {
                    clearTimeout(timer);
                    timer = setTimeout(() => fn.apply(this, args), delay);
                };
            }

            // Usage
            const handleInput = debounce(() => {
            console.log("Input processed");
            }, 300);

            document.getElementById("search").addEventListener("input", handleInput);


    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Debouncing @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //



    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Throttling @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

        // Throttling ensures a function is called at most once every X milliseconds, no matter how many times it’s triggered.

        // Use Case ->>
        //     Scrolling
        //     Mouse movement
        //     Repeated button presses

        // Anology ->>
        //     "Do this no more than once every 200ms, no matter how many events occur."

        // Eg:
            function throttle(fn, limit) {
                let lastCall = 0;
                return function(...args) {
                    const now = Date.now();
                    if (now - lastCall >= limit) {
                    lastCall = now;
                    fn.apply(this, args);
                    }
                };
            }

            // Usage
            const handleScroll = throttle(() => {
                console.log("Scroll event handled");
            }, 200);

            window.addEventListener("scroll", handleScroll);

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Throttling @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

// ✅ $$$$$$$$$$$$$$$$$ Debouncing & Throttling $$$$$$$$$$$$$$$$$ ✅ //