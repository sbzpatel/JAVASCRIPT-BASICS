// ✅ ############## Event Listener ############## ✅ //

    // In JavaScript, an event listener is a function or method that waits for a specific event to occur and then executes a predefined function in response.

    // The primary method for attaching event listener is addEventListener(). Its general syntax is:

    // Syntax =>
        // element.addEventListener(event, callback, useCapture);


    let btn786 = document.getElementById("#btn786");

    btn786.addEventListener("click", () => {
        alert("Button Clicked, which is handled by EventListeners...");
    });





    let btn313 = document.getElementById("#btn313");

    btn313.addEventListener("click", () => {
        console.log("Event Listeners - handler1");
    });

    btn313.addEventListener("click", () => {
        console.log("Event Listeners - handler2");
    });





    const handler3 = () => {
        console.log("Event Listeners - handler3");
    };

    btn313.addEventListener("click", handler3);     // handler3 handled/created

    btn313.removeEventListener("click", handler3);   // handler3 removed

// ✅ ############## Event Listener ############## ✅ //