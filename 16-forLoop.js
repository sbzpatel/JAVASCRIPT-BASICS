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


// ✅ ############## for Loop (Examples) ############## ✅ //

    
    // 1 => (Print numbers 1 to 10) 
        // for(let i=1;i<=10;i++) {
        //     console.log(i);
        // }



    // 2=> (Print even numbers from 2 to 20)
        // for(let i=1;i<=20;i++) {
        //     if(i%2 == 0) {
        //         console.log(i);
        //     }
        // }



    // 3 => (Print numbers in reverse)
        // for(let i=10;i>=1;i--) {
        //     console.log(i);
        // }



    // 4 => (Print a string multiple times)
        // for(i=0;i<5;i++) {
        //     console.log("Dharmendra...");
        // }



    // 5 => (Sum numbers 1 to 100)
        // let sum = 0;
        // for(let i=1;i<=100;i++) {
        //     sum +=i;
        // }

        // console.log(sum);



    // 6 => (Print all elements of an array)
        // let arr = [10, 20, 30, 40, 50];

        // for(let i=0;i<arr.length;i++) {
        //     console.log(arr[i]);
        // }



    // 7 => (Find the largest number in an array)
    //  let nums = [5, 12, 7, 25, 19];

    // const largestNum = Math.max(...nums);
    //  console.log(largestNum);



    // 8 => (Count how many numbers are greater than 10)
        // let nums = [5, 12, 7, 25, 19];
        // let largerThan10 = 0;

        // for(let i=0;i<nums.length;i++) {
        //     if(nums[i] > 10) largerThan10++;
        // }
        
        // console.log(largerThan10);
        


    // 9 => (Search for a specific value)
        // let items = ['apple', 'banana', 'orange', 'mango'];

        // for(let i=0;i<items.length;i++) {
        //     if(items[i] === 'orange') {
        //         console.log("Orange exists in an array!!!");
        //     }
        // }



    // 10 => (Create a new array of squares)
        // let nums = [1, 2, 3, 4, 5];
        // let newNums = [];

        // for(let i=0;i<nums.length;i++) {
        //     newNums.push(nums[i]* nums[i]);
        // }

        // console.log(newNums);



    // 11 => (Print a multiplication table (1–10))
        // for(let i=1;i<=10;i++) {
        //     console.log(`2 x ${i} = ${2*i}`);
        // }



    // 12 => (Create a pattern (triangle of *))
        // for(let i=1;i<=5;i++) {
        //     let star = "";
        //     for(let j=1;j<=i;j++) {
        //         star += "*";
        //     }
        //     console.log(star);
        // }



    // 13 => (Reverse a string using a for loop) 
    // Example: "hello" → "olleh"
        // const str = "hello";
        // let revstr = "";

        // for(let i=(str.length-1);i>=0;i--) {
        //         revstr += str[i];
        // }

        // console.log(revstr);



    // 14 => (Remove duplicates from an array (WITHOUT Set))
        // let arr = [1, 2, 2, 3, 3, 4, 5, 5];
        // let unique =  [];

        // for(let i=0;i<arr.length;i++) {
        //     let exists = false;

        //     for(let j=0;j<unique.length;j++) {
        //         if(arr[i] === unique[j]) {
        //             exists = true;
        //             break;
        //         } 
        //     }

        //     if(!exists) unique.push(arr[i]);
        // }

        // console.log(unique);


// ✅ ############## for Loop (Examples) ############## ✅ //