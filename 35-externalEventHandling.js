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


// ✅ ############## External Event Handling (Examples) ############## ✅ //

    // Eg1 =>
        // <button id="btn">Increment Counter</button>
        // <p id="count"></p>

        // <script>
        //     let counter = 0;
            
        //     document.getElementById("btn").addEventListener("click", function() {
        //         counter++;
        //         document.getElementById("count").innerText = counter;
        //     })
        // </script>



    // Eg2 =>
        // <script>
        //     document.addEventListener("dblclick", () => {
        //         document.body.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
        //     })
        // </script>



    // Eg3 =>
        // <input type="text" id="textInput" placeholder="Type something..." />
        // <p id="output"></p>

        // <script>
        //     document.getElementById("textInput").addEventListener("input", (e) => {
        //         document.getElementById("output").innerText = e.target.value;
        //     });
        // </script>



    // Eg4 =>
        // <button id="oneClick">Click Once</button>

        // <script>
        //     document.getElementById("oneClick").addEventListener("click", (e) => {
        //         e.target.disabled = true;
        //         e.target.innerText = "Disabled";
        //     })
        // </script>



    // Eg5 =>
        // <form id="sbzForm">
        //     <input type="text" id="name" placeholder="Enter your name" />
        //     <button type="submit">Submit</button>
        // </form>
        // <p id="msg"></p>

        // <script>
        //     document.getElementById("sbzForm").addEventListener("submit", (e) => {
        //         e.preventDefault();
                
        //         const value = document.getElementById("name").value.trim();
        //         const msg = document.getElementById("msg");
                
        //         if(value === "") {
        //             msg.innerText = "Name cannot be empty!!!";
        //             msg.style.color = "red";
        //         } else {
        //             msg.innerText = "Form submitted successfully!!!";
        //             msg.style.color = "green";
        //         }
        //     })
        // </script>



    // Eg6 =>
        // <button id="hoverBtn">Hover me</button>

        // <script>
        //     const btn = document.getElementById("hoverBtn");
            
        //     btn.addEventListener("mouseover", () => {
        //         btn.style.background = "orange";
        //         btn.style.color = "white";
        //     });
            
        //     btn.addEventListener("mouseout", () => {
        //         btn.style.background = "";
        //         btn.style.color = "";
        //     });
        // </script>



    // Eg7 =>
        // <p id="scrollValue"></p>

        // <script>
        //     window.addEventListener("scroll", () => {
        //         document.getElementById("scrollValue").innerText = "Scroll position: " + window.scrollY + "px";
        //     });
        // </script>



    // Eg8 =>
        // <p id="keyPressed"></p>

        // <script>
        //     document.addEventListener("keydown", (e) => {
        //         document.getElementById("keyPressed").innerText = "You pressed " + e.key;
        //     });
        // </script>



    // Eg9 =>
        // <img id="img" src="img1.jpg" width="200" />

        // <script>
        //     let toggle = true;
        //     document.getElementById("img").addEventListener("click", () => {
        //         toggle = !toggle;
        //         document.getElementById("img").src = toggle ? "img1.jpg" : "img2.jpg";
        //     });
        // </script>



    // Eg10 =>
        // <p id="size"></p>

        // <script>
        //     window.addEventListener("resize", () => {
        //         document.getElementById("size").innerText = "Width:" + window.innerWidth + "px";
        //     });
        // </script>

// ✅ ############## External Event Handling (Examples) ############## ✅ //