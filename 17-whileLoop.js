// ✅ ############## While Loop ############## ✅ //

    // Eg1:
        let i = 1;
        while(i<=5) {
            console.log("i =", i);
            i++;
        }

        console.log("i value outside after loop ->>", i);

        
    // Eg2:
        let cartProduct = [
            {id: 101, name: "iPhone 15", price: 79900}, 
            {id: 101, name: "Vivo C45", price: 14999}, 
            {id: 101, name: "iPhone 16 Pro", price: 114900}, 
            {id: 101, name: "Samsung M52 5G", price: 29999}, 
        ];

        let totalCartAmount = 0;
        let m = 0;

        while(m < cartProduct.length) {
            totalCartAmount += cartProduct[m].price;
            i++;
        }

        console.log(`Total Cart Amount: ₹${totalCartAmount.toFixed(2)}`);

// ✅ ############## While Loop ############## ✅ //