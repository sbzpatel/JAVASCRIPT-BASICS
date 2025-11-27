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


// ✅ ############## Event Listener with querySelector & querySelectorAll (Examples) ############## ✅ //

        
    // 1) getElementById()
    // 2) getElementsByTagName()
    // 3) getElementsByClassName()
    // 4) querySelector()
    // 5) querySelectorAll()


    // Eg1 => Select a button by ID and change its text
        // <body>
        // <button id="btn">Submit</button>

        // <script>
        //     document.addEventListener("click", () => {
        //         const btn = document.getElementById("btn");
        //         btn.innerHTML = "Text Changed...";
        //     });
        // </script>
        // </body>
        
        
        
    // Eg2 => Select all paragraphs and make them red
        // <body>
        // <p class="para">Paragraph 1</p>
        // <p class="para">Paragraph 2</p>
        // <p class="para">Paragraph 3</p>
        // <p class="para">Paragraph 4</p>
        // <p class="para">Paragraph 5</p>
        // <p class="para">Paragraph 6</p>

        // <script>
        //     let paras = document.querySelectorAll(".para");
            
        //     paras.forEach(para => {
        //         para.style.color = "red";
        //     });
        // </script>
        // </body>
        
        
        
    // Eg3 => Select an input field by class and set its value
        // <body>
        // <input type="" id="txtFld" placeholder="Enter text here" />

        // <script>
        //     const input = document.getElementById("txtFld");
        //     input.value = "Shahrukh Khan";
        // </script>
        // </body>
        
        
        
    // Eg4 => Select all list items and add a number prefix
        // <body>
        //     <ul>
        //         <li>One</li>
        //         <li>Two</li>
        //         <li>Three</li>
        //         <li>Four</li>
        //         <li>Five</li>
        //         <li>Six</li>
        //     </ul>

        //     <script>
        //         const lists = document.querySelectorAll("ul li");
                
        //         lists.forEach((list, index) => {
                    
        //             let str = `${index+1}. ${list.innerText}`;
        //             list.innerHTML = str;
        //         })
        //     </script>
        // </body>
        
        
        
    // Eg5 => Select an image and change its src on click
        // <body>
        //     <img src="https://picsum.photos/id/1045/400/200" id="img" />

        //     <script>
        //         const image = document.getElementById("img")
        //         image.addEventListener("click", () => {
        //             image.src = "https://picsum.photos/id/1015/400/200";    
        //         });
        //     </script>
        // </body>
        
        
        
    // Eg6 => Select the first <div> with class card and add a border
        // <body>
        //     <div class="card" style="height: 100px; width: 100px; background: orange;">
            
        //     </div>
            
        //     <br />
            
        //     <div class="card" style="height: 100px; width: 100px; background: orange;">
            
        //     </div>

        //     <script>
        //         const firstCard = document.querySelector(".card")
        //         firstCard.style.borderStyle = "solid";
        //     </script>
        // </body>
        
        
        
    // Eg7 => Select all checkboxes and check them automatically
        // <body>
        //     <h1>Select Subjects for exam in SSC:</h1>
        //     <input type="checkbox" /> Maths
        //     <input type="checkbox" /> Science
        //     <input type="checkbox" /> Computer
        //     <input type="checkbox" /> Biology
        //     <input type="checkbox" /> Urdu
        //     <input type="checkbox" /> Marathi

        //     <script>
        //         const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
        //         // console.log(allCheckboxes);
        //         allCheckboxes.forEach(single => {
        //             single.checked = true;
        //         })
        //     </script>
        // </body>
        
        
        
    // Eg8 => Select the element with attribute "data-user" and log its value
        // <body>
        //     <div data-user="Shahrukh"></div>	  

        //     <script>
        //         const item = document.querySelector("[data-user]");
        //         console.log(item.getAttribute("data-user"));	// showing in console
        //     </script>
        // </body>
        
        
        
    // Eg9 => Select all headings (h1–h6) and apply the same color
        // <body>
        //     <h1>Heading1</h1>
        //     <h2>Heading2</h2>
        //     <h3>Heading3</h3>
        //     <h4>Heading4</h4>
        //     <h5>Heading5</h5>
        //     <h6>Heading6</h6>

        //     <script>
        //         const allheadings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
        //         console.log(allheadings);
                
        //         allheadings.forEach(heading => {
        //             heading.style.color = "green";
        //         });
        //     </script>
        // </body>
        
        
        
    // Eg10 => Select even items in a list and give them a gray background
        // <body>
        //     <ul>
        //         <li>Item 1</li>
        //         <li>Item 2</li>
        //         <li>Item 3</li>
        //         <li>Item 4</li>
        //         <li>Item 5</li>
        //     </ul>

        //     <script>
        //         const allItems = document.querySelectorAll("ul li");

        //         allItems.forEach((item, index) => {
        //             if((index+1) % 2 == 0) {
        //                 item.style.background = "gray";
        //             }
        //         })
        //     </script>
        // </body>

// ✅ ############## Event Listener with querySelector & querySelectorAll (Examples) ############## ✅ //