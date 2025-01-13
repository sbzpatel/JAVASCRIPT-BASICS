let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked!!!");
    let a = 25;
    a++;
    console.log(a); // 26
}

let box = document.querySelector("#box");

box.onmouseover = () => {
    console.log("U are inside div...");
}

const btn11 = document.querySelector("#btn11");

btn11.onclick = (e) => {
    // large object which contains different information about tag and event
    console.log(e);

    console.log(e.target);      // return tag's id
    console.log(e.type);        // return event type "click"
    console.log(e.clientX);     // position x value on screen 
    console.log(e.clientY);     // position y value on screen 
}