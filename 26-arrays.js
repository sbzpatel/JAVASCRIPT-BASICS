console.log("@@@@@@@@@@@ Arrays @@@@@@@@@@@");

// Arrays are "mutable", in reverse strings are immutable so we can directly change array key values

let nums = [4, 7, 10, 34, 56];

console.log(nums);              // print all array values 

console.log(nums.length);       // 5

let friends = ["Shahbaz", "Kaleem", "Ilham", "Maghfir", "Badreaalam", "Abdulrehmaan"];

console.log(friends);

console.log(friends.length);    // 6

console.log(typeof friends)     // object

console.log(friends[0]);        // Shahbaz

console.log(friends[4]);        // Badreaalam

console.log(nums[2]);           // 10

console.log(nums[7]);           // undefined

nums[2] = 11;                   // value directly changed on index 2 in array "nums"

console.log(nums);              // print with changed value [4, 7, 11, 34, 56]

console.log("############## For Loop to display arrays ##############");

    // for (let i=0; i<nums.length; i++) {
    //     console.log(nums[i]);
    // }

    for(let f=0; f<friends.length; f++) {
        console.log(friends[f]);
    }

console.log("############## For Loop to display arrays ##############");



console.log("############## For of to display arrays ##############");

    for(let item of nums) {
        console.log(item);
    }

console.log("############## For of to display arrays ##############");



console.log("############## Average of Marks ##############");

    let marks = [85, 95, 84, 92, 89];

    let sum = 0;

    for (let i=0;i<marks.length; i++) {
        sum += marks[i];    
    }

    console.log("Obtained Marks are:",sum);
    console.log("Obtained Avg Marks are:",(sum/marks.length));

console.log("############## Average of Marks ##############");




