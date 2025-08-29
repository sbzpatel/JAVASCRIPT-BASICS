// ✅ ############## for-of Loop ############## ✅ //

    // The for-of loop used to sequentially access each element of an array & each character of the string.

    // Eg1: (Sequentially access characters of string)
        let myName = "Shahrukh Khan";
        
        for(let char of myName) {
            console.log(char);
        }
    

    // Eg2: (Sequentially access elements of an array) 
        let friends = ["Salmaan Khan", "Boman Irani", "Abhishekh Bacchan"];
        
        for(let friend of friends) {
            console.log(friend);
        }


    // Eg3: (Listing all Cart Products Sequentially)
        let cartProduct = [
            {id: 101, name: "iPhone 15", price: 79900}, 
            {id: 101, name: "Vivo C45", price: 14999}, 
            {id: 101, name: "iPhone 16 Pro", price: 114900}, 
            {id: 101, name: "Samsung M52 5G", price: 29999}, 
        ]

        console.log("All Cart Products: ");

        for(let product of cartProduct) {
            console.log(`\t => ${product.name}`);
        }

// ✅ ############## for-of Loop ############## ✅ //