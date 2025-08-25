// ✅ ############## Event Object ############## ✅ //

    // Event Object is a JS large built-in object which contains different information like tag, event, cursor position on screen in X & Y direction and many more about the event that occurred.

    // Eg1:
        const btn11 = document.querySelector("#btn11");

        btn11.onclick = (e) => {
            console.log(e);

            console.log(e.target);      // return tag's id
            console.log(e.type);        // return event type performed "click"
            console.log(e.clientX);     // position x value on screen 
            console.log(e.clientY);     // position y value on screen 
        }



    // Eg: (Real-world Example)
        /*
        <div class="product" data-id="101" data-name="iPhone 15" data-price="79999">
            <button class="add-to-cart">Add to Cart</button>
        </div>

        <div class="product" data-id="102" data-name="OnePlus 12" data-price="55999">
            <button class="add-to-cart">Add to Cart</button>
        </div>
        */

        // <script>
            document.querySelectorAll("add-to-cart").forEach(button => {
                button.addEventListener("click", function(event) {
                    const productElement = event.target.closest(".product");

                    const product = {
                        id: productElement.dataset.id,
                        name: productElement.dataset.name,
                        price: productElement.dataset.price
                    }

                    console.log("🛒 Product Added:", product);

                    // send to backend code here
                    // addToCartAPI(product);
                })
            })
        // </script>
        

// ✅ ############## Event Object ############## ✅ //
