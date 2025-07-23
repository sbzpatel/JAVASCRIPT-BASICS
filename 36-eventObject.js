// ✅ ############## Event Object ############## ✅ //

    // Event Object is a JS large built-in object which contains different information about tag, event, cursor position on screen in X & Y direction and many more.

    const btn11 = document.querySelector("#btn11");

    btn11.onclick = (e) => {
        console.log(e);

        console.log(e.target);      // return tag's id
        console.log(e.type);        // return event type performed "click"
        console.log(e.clientX);     // position x value on screen 
        console.log(e.clientY);     // position y value on screen 
    }

// ✅ ############## Event Object ############## ✅ //
