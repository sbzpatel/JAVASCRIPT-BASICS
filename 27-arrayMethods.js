console.log("@@@@@@@@@@@ Arrays Methods @@@@@@@@@@@");

let friends = ["Shahbaz", "Kaleem", "Ilham", "Tasaduk", "Maghfir", "Zahid", "Zuber"];



console.log("####### push method #######");

    console.log("Friends Length(Before):",friends.length);
    // let newFriendsLength = friends.push("Badreaalam");           // pushed single value at end, returning updated length of array
    let newFriendsLength = friends.push("Badreaalam", "Aasim");     // pushed multiple values at end, returning updated length of array
    
    console.log("Friends Length(After push):",newFriendsLength);  
    console.log(friends);       // array with updated values

console.log("####### push method #######");



console.log("####### pop() method #######");

    let poppedValue = friends.pop();

    console.log("Deleted item:",poppedValue);      // removed last item from array
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

    shaikhFriend.shift();           // added "Abrar" at the beginning of array 
    console.log(shaikhFriend);      // removed first item of array, "Abrar"

console.log("####### shift() #######");



console.log("####### slice() #######");

    // slice returns a piece of array

    let slicedFriends = friends.slice(0,3);     // sliced from 1st to 3rd item of an array
    
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

    console.log(friends);   // after spliced

console.log("####### splice() #######");










