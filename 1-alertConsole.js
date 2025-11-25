// ✅ ############## Alert & Console Methods ############## ✅ //

    // ✅ ############## window.alert() ############## ✅ //
        // window.alert() is JavaScript's built-in method used to display dialog box with a message.

        // Eg:
            window.alert("Downloading...");
            window.alert("Fetching data...");

    // ✅ ############## window.alert() ############## ✅ //


    // ✅ ############## console.log() ############## ✅ //
        // console.log() is JavaScript's built-in method used to display different type of data on the console.

        // Eg:
            console.log("SRK means Shahrukh Khan!!");
            console.log("A/P-Aurwad, Tal-Shirol,");
            console.log("Dist-Kolhapur, 416104(MAHARASHTRA).");

            console.log(35);
            console.log(78.13);

    // ✅ ############## console.log() ############## ✅ //


    // ✅ ############## console.table() ############## ✅ //

        // The console.table() method in JavaScript is used to display data in a tabular format within the browser's developer console or Node.js environment.

        // Eg:
            const friendsDetail = [
                { name: "Shahbaz Shaikh", age: 35, maritalStatus: true },
                { name: "Tasadduk Patel", age: 30, maritalStatus: false },
                { name: "Kaleeem Patel", age: 36, maritalStatus: true },
                { name: "Badreaalam Rohile", age: 33, maritalStatus: true },
            ];

            const cartProductInfo = [
                { name: "Sony Bravia TV", price: 35999, stockStatus: "Out of Stock", sellerName: "Omni Tech Retail", expectedDelivery: "26 aug" },
                { name: "OnePlus Nord buds 3 pro", price: 2999, stockStatus: "In Stock", sellerName: "SVP Peripherals", expectedDelivery: "21 aug" },
                { name: "Garbage Bags", price: 115, stockStatus: "In Stock", sellerName: "Shri Fashion Hubs", expectedDelivery: "28 aug" },
                { name: "Laundry Bag", price: 149, stockStatus: "In Stock", sellerName: "Kuber Industries", expectedDelivery: "28 aug" },
                { name: "Under Arm", price: 247, stockStatus: "In Stock", sellerName: "Plix", expectedDelivery: "24 aug" }
            ]


            console.log("@@@@@@@@@@@@@@@@ Friend's Detail @@@@@@@@@@@@@@@@");
            console.table(friendsDetail);

            console.log("\n\n");

            console.log("@@@@@@@@@@@@@@@@ Cart Product's Detail @@@@@@@@@@@@@@@@");
            console.table(cartProductInfo);

    // ✅ ############## console.table() ############## ✅ //
    
// ✅ ############## Alert & Console Methods ############## ✅ //