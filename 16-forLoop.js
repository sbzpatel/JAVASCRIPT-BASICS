// ✅ ############## for Loop ############## ✅ //

    // A for-loop repeatedly executes a block of code till the condition is true, once a condition is false then loop gets break.

    // console.log("Shahbaz Patel");
    // console.log("Shahbaz Patel");
    // console.log("Shahbaz Patel");
    // console.log("Shahbaz Patel");
    // console.log("Shahbaz Patel");


    // Eg1:
        // print string 100 times
        for(let i=1; i<=100; i++) {
            console.log("Shahbaz Patel");
        }


    // Eg2:
        // calculate sum of 1 to 50
        sum = 0;
        for(let m=1; m<=50; m++) {
            sum = sum + m;
        }

        console.log("Sum =>", sum);


    // Eg3:
        for(var n=1; n<=5; n++) {
            console.log("n =", n);
        }

        console.log("value of n after looping: ", n);


    // Eg4:
        let cartProduct = [
            {id: 101, name: "iPhone 15", price: 79900}, 
            {id: 101, name: "Vivo C45", price: 14999}, 
            {id: 101, name: "iPhone 16 Pro", price: 114900}, 
            {id: 101, name: "Samsung M52 5G", price: 29999}, 
        ];

        let totalCartAmount = 0;
        for(let i=0; i<cartProduct.length; i++) {
            totalCartAmount += cartProduct[i].price;
        }

        console.log(`Total Cart Amount: ₹${totalCartAmount.toFixed(2)}`);        

// ✅ ############## for Loop ############## ✅ //