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