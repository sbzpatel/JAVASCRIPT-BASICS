const btn11 = document.querySelector("#btn11");

btn11.onclick = (e) => {
    // Event Object is a large object which contains different information about tag, event, cursor position on screen in X & Y directions and many more.
    console.log(e);

    console.log(e.target);      // return tag's id
    console.log(e.type);        // return event type performed "click"
    console.log(e.clientX);     // position x value on screen 
    console.log(e.clientY);     // position y value on screen 
}