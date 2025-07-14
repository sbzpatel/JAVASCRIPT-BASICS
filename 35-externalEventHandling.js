// ✅ ############## External Event Handling ############## ✅ //

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

// ✅ ############## External Event Handling ############## ✅ //