// Javascript provides timer functions to schedule run the code after a delay or repeatedly at intervals. These are key tools for handling asynchronous operations.

// 1) setTimeout() ->>
//     Runs a function once after a given time of delay(in milliseconds).

    setTimeout(() => {
        console.log("Anonymous function runs after 3 secs...");
    }, 3000);



// 2) setInterval() ->>
//     Runs a function repeatedly ata specified interval of given time(in milliseconds).

    setInterval(() => {
        console.log("Runs every 1 second...");
    }, 1000)



// 3) clearTimeout() & clearInterval() ->>
//     Used to cancel timers created with setTimeout() & setInterval().

    // @@@@@@@@@ clearTimeout() @@@@@@@@@ //

        const timeoutId = setTimeout(() => {
            console.log("You won't see this!!!");  
        }, 3000);
        
        clearTimeout(timeoutId);     // cancels the timeout
        
    // @@@@@@@@@ clearTimeout() @@@@@@@@@ //



    // @@@@@@@@@ clearInterval() @@@@@@@@@ //

        const intervalId = setInterval(() => {
            console.log("Repeats...");
        }, 5000)
        
        clearInterval(intervalId);      // stops it after 5 seconds

    // @@@@@@@@@ clearInterval() @@@@@@@@@ //
