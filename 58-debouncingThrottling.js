// ✅ $$$$$$$$$$$$$$$$$ Debouncing & Throttling $$$$$$$$$$$$$$$$$ ✅ //

    // Debouncing & Throttling are techniques to control how a function executes, that especially useful in performance-sensitive situations like scroll, resize, input or keypress events.

    // ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Debouncing @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //

        // Debouncing ensures a function is only called once after a certain period of inactivity.
        // It waits until the user has stopped triggering the event.
        // In Search Field, on each key press triggering api calls, to avoid this we are using debouncing.
        // Simillarly, we are using debouncing technique for window resize events.
        // In these all scenarios, should wait until we have stopped typing for 300ms before doing something.
        
        // Eg:
            {/*<input 
                type="text"
                id="search"
                placeholder="Search for products..."
            />
            
            <div id="results"></div>
            */}
            
            
            
            // <script>
                // Generic debounce function
                function debounce(func, delay) {
                    let timeout;
                    
                    return function(...args) {
                        clearTimeout(timeout);
                        
                        timeout = setTimeout(() => func.apply(this, args), delay);
                    };
                }
            
                // Mock API Call
                function fetchProducts(query) {
                    // mocking calling API for fetching products data
                    console.log("Fetching products data...", query);
                    
                    document.getElementById("results").innerHTML = `<p>Results for <b>${query}</b> (fetched from API)</p>`;
                }
            
                const searchBox = document.getElementById("search");
                
                searchBox.addEventListener("input", debounce((event) => {
                    // In Flipkart, using realtime API to fetch products data (we are using dummy function)
                    fetchProducts(event.target.value);
                }, 500));
            // </script>


    // ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Debouncing @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //



    // ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Throttling @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //

        // Throttling ensures a function is called at most once every X milliseconds, no matter how many times it triggered.

        // Use Case ->>
            // Scrolling
            // Mouse movement
            // Repeated button presses

        // Anology ->>
        //     "Do this no more than once every 200ms, no matter how many events occur."

        // Eg1:
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
                console.log("Scroll event handled after each interval of 200 millisecond");
            }, 200);

            window.addEventListener("scroll", handleScroll);


        // Eg2:
            // <h2>Move your mouse around 👇</h2>
            // <p id="output">Mouse position will show here...</p>


            // Throttle function
            function throttle(func, delay) {
                let lastCall = 0;
                
                return function(...args) {
                    const now = Date.now();
                    
                    if(now - lastCall >= delay) {
                        lastCall = now;
                        func.apply(this, args);
                    }
                };
            }

            // Normal (fires too many times)
            // window.addEventListener("mousemove", (e) => {
            // 	document.getElementById("output").innerHTML =  `Mouse at: ${e.clientX}, ${e.clientY}`);
            // }, 500);


            // Throttled (fires every 500ms max)
            window.addEventListener("mousemove", throttle((e) => {
                document.getElementById("output").innerHTML =  `Mouse at: ${e.clientX}, ${e.clientY}`;
            }, 500));

    // ✅ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Throttling @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ✅ //

// ✅ $$$$$$$$$$$$$$$$$ Debouncing & Throttling $$$$$$$$$$$$$$$$$ ✅ //