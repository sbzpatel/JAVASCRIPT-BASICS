// ✅ @@@@@@@@@@@@@@@ Array Methods @@@@@@@@@@@@@@@ ✅ //

    // Javascript provides a rich set of array methods that helps to manipulate and work with array easily.
    // Below is a categorized overview of commonly used array methods

    // ✅ 1) Iteration Methods ->>
            // a) forEach
            // b) map()
            // c) filter()
            // d) reduce()
            // e) some()
            // f) every()
            
    // ✅ 2) Modification Methods ->>
            // a) push()
            // b) pop()
            // c) unshift()
            // d) shift()
            // e) splice()
            // f) slice()

    // ✅ 3)  Search and Check Methods ->>
            // a) includes()
            // b) indexOf()
            // c) lastIndexOf()

    // ✅ 4) Sorting & Reverse Methods ->>
            // a) sort()
            // b) reverse()

    // ✅ 5) Combination Methods ->>
            // a) concat()
            // b) join()
            // c) flat() 

    // ✅ 6) Creation Methods ->>
            // a) Array.of()
            // b) Array.from()


    let friends = ["Shahbaz", "Kaleem", "Ilham", "Tasaduk", "Maghfir", "Zahid", "Zuber"];



    console.log("####### push() method #######");

        console.log("Friends Length(Before):", friends.length);
        // let newFriendsLength = friends.push("Badreaalam");           // pushed single value at end, returning updated length of array
        let newFriendsLength = friends.push("Badreaalam", "Aasim");     // pushed multiple values at end, returning updated length of array

        console.log("Friends Length(After push):", newFriendsLength);
        console.log(friends);       // array with updated values

    console.log("####### push() method #######");



    console.log("####### pop() method #######");

        let poppedValue = friends.pop();

        console.log("Deleted item:", poppedValue);      // removed last item from array
        console.log(friends);       // array after popped "Aasim"

    console.log("####### pop() method #######");



    console.log("####### toString() #######");

        console.log(friends);
        console.log(friends.toString());        // converts to string, Shahbaz,Kaleem,Ilham,Tasaduk,Maghfir,Zahid,Zuber,Badreaalamg

    console.log("####### toString() #######");



    console.log("####### concat() #######");

        // joins one with another array and return to new array, not in a current (its immutable method of array)

        let shaikhFriend = ["Sadik", "Amol"];
        let myShaikhFriends = friends.concat(shaikhFriend); // concatenated arrays "friends" & "shaikhFriend", Also we can pass multiple array

        console.log(myShaikhFriends);

    console.log("####### concat() #######");


    console.log("####### unshift() #######");

        // unshift is simillar to push, but only the different is add at start (not on end like push)

        shaikhFriend.unshift("Abrar");      // added at start in array in same array
        console.log(shaikhFriend);

    console.log("####### unshift() #######");



    console.log("####### shift() #######");

        // shift delete the array element at the beginning

        shaikhFriend.shift();           // removed "Abrar" at the beginning of array 
        console.log(shaikhFriend);      // removed first item of array, "Abrar"

    console.log("####### shift() #######");



    console.log("####### slice() #######");

        // slice returns a piece of array

        let slicedFriends = friends.slice(0, 3);     // sliced from 1st to 3rd item of an array

        console.log("Sliced friends array:", slicedFriends);
        console.log("Sliced only Maghfir from array:", friends.slice(4, 5));
        console.log("Sliced array except 1st one:", friends.slice(1));

    console.log("####### slice() #######");



    console.log("####### splice() #######");

        // change original array (add, remove, replace)
        // syntax ->> splice(startIdx, delCount, newElement)

        console.log("%%%%% Before Splice %%%%%");
        console.log(friends);
        console.log("%%%%% Before Splice %%%%%");

        friends.splice(3, 1);   // removed the "Tasaduk"
        friends.splice(4, 2);   // removed zahid, zuber both
        friends.splice(1, 0, "Tausif");

        console.log("%%%%% After Splice %%%%%");
        console.log(friends);   // after spliced
        console.log("%%%%% After Splice %%%%%");

    console.log("####### splice() #######");


    /* ✅ New code with all Array methods (-- starts --) ✅


            let friends = ["Shahbaz", "Kaleem", "Ilham", "Badre", "Maghfir", "Zuber"];

            let nums = [3,9,1,6,2,7,0,4,5];

            // 1) friends.length
                console.log(friends.length);


            // 2) for of loop
            console.log("############# for of loop ############")
                for(let friend of friends) {
                    console.log(friend);
                }
            console.log("############# for of loop ############")


            // 3) forEach()
            console.log("############# forEach ############")
                friends.forEach((item) => {
                    console.log(item);
                })
            console.log("############# forEach ############")


            // 4) arr.map()
            console.log("############# map() method ############")
                mappedFriends = friends.map((friend) => {
                    return `$$ ${friend} $$`
                })
                console.log(mappedFriends);
            console.log("############# map() method ############")


            // 5) arr.filter()
            console.log("############# filter() method ############")
                evenNums = nums.filter((num) => {
                    return num%2 == 0
                })
                console.log(evenNums);
            console.log("############# filter() method ############")


            // 6) arr.reduce()
            console.log("############# reduce() method ############")
                const greatestNum = nums.reduce((prev, curr) => {
                    return prev>curr?prev:curr;
                });
                console.log(greatestNum);
            console.log("############# reduce() method ############")


            // 7) arr.some()
            console.log("############# some() method ############")
                const evenNumsPresent = nums.some((num) => {
                    return num%2 == 0;
                })

                console.log(evenNumsPresent? "Even numbers present in array.": "Even numbers not present in array.");
            console.log("############# some() method ############")


            // 8) arr.every()
            console.log("############# every() method ############")
                const everyNumberOdd = nums.every((num) => {
                    return num%2 != 0;
                });
                if(everyNumberOdd) {
                    console.log("Every number in array is Odd.");
                } else {
                    console.log("No every number in array is Odd.");
                }
            console.log("############# every() method ############")


            // 9) arr.push()
            console.log("############# push() method ############")
                let newFriendsLength = friends.push("Tasadukk");
                console.log(`New Friends array Length: ${newFriendsLength}`);
                console.log(`New friends array after pushed: ${friends}`);
            console.log("############# push() method ############")


            // 10) arr.pop()
            console.log("############# pop() method ############")
                const newPoppedItem = friends.pop();
                console.log(`Popped Item from friends array: ${newPoppedItem}`);
                console.log(`New Friends array Length: ${friends.length}`);
                console.log(`New friends array after popped Item: ${friends}`);
            console.log("############# pop() method ############")


            // 11) arr.unshift()
            console.log("############# unshift() method ############")
                newFriendsLength = friends.unshift("Tasadduk");
                console.log(`New Friends array Length: ${newFriendsLength}`);
                console.log(`New friends array after unshift: ${friends}`);
            console.log("############# unshift() method ############")


            // 12) arr.shift()
            console.log("############# shift() method ############")
                const newShifteditem = friends.shift();
                console.log(`Shifted Item from friends array: ${newShifteditem}`);
                console.log(`New Friends array Length: ${friends.length}`);
                console.log(`New friends array after shifted Item: ${friends}`);
            console.log("############# shift() method ############")


            // 13) arr.splice()
            console.log("############# splice() method ############")
                friends.splice(3, 2, "Tausif", "Niraj", "Sakidraj");
                console.log(`New Friends array Length: ${friends.length}`);
                console.log(`New friends array after splice method: ${friends}`);
            console.log("############# splice() method ############")


            // 14) arr.slice()
            console.log("############# slice() method ############")
                const bffs = friends.slice(0,2);
                console.log("My BFFs are "+friends.slice(0,2).join(","));
            console.log("############# slice() method ############")


            // 15) arr.concat()
            console.log("############# concat() method ############")
                newFriendsList = friends.concat(bffs);
                console.log(`New Friends List after concat: ${newFriendsList}`);
            console.log("############# concat() method ############")


            // 16) Array.of()
            console.log("############# Array.of() method ############")
                const cars = Array.of("Honda City", "Maruti Suzuki Brezza", "Kia Sonet");

                console.log("My Cars List: "+cars);
            console.log("############# Array.of() method ############")


            // 17) Array.from()
            console.log("############# Array.from() method ############")
                bikesString = "Yamaha FZX, Royal Field Hunter 350, Splendor pro 100cc, Hero Honda CDSS100"
                console.log(Array.from(bikesString));
            console.log("############# Array.from() method ############")


            // 18) arr.toString()
            console.log("############# toString() method ############")
                let friendsString = friends.toString();
                console.log("friends array converts to string: "+ friendsString);
            console.log("############# toString() method ############")


            // 19) arr.join()
            console.log("############# join() method ############")
                let friendsbyJoin = friends.join(",");
                // console.log(typeof friendsbyJoin);
                console.log("friends array converts to string by method join(): "+ friendsbyJoin);
            console.log("############# join() method ############")


            // 20) arr.flat()
            console.log("############# flat() method ############")
                nestedArrayNums = [1, [2, [3, [4]]]];

                console.log(nestedArrayNums.flat());
                console.log(nestedArrayNums.flat(2));
                console.log(nestedArrayNums.flat(3));
            console.log("############# flat() method ############")


            // 21) arr.includes()
            console.log("############# includes() method ############")
                ShahbazPresent = friends.includes("Shahbaz");
                console.log(ShahbazPresent? "Shahbaz present in friends's array": "Shahbaz not present in friends's array" )
            console.log("############# includes() method ############")


            // 22) arr.indexOf()
            console.log("############# indexOf() method ############")
                nirajPosition = friends.indexOf("Niraj");
                console.log(`In friends array "Niraj" present on ${nirajPosition}th index.`);
            console.log("############# indexOf() method ############")
            
    
    ✅ New code with all Array methods (-- ends --) ✅ */

// ✅ @@@@@@@@@@@@@@@ Array Methods @@@@@@@@@@@@@@@ ✅ //