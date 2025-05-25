// Variable is a named container that store and manage different types of data like number, text, object, array and many more.

fullName = "Shahbaz Patel";
age = 34;
price = 101.56;
x = null;
y = undefined;
isMarried = true;
totalMarks = 555;
$price = 405;

// 123friend = "Kaleem";    // Wrong, variable can not starts with numeric
friend1 = "Shahbaz";        // Right, variable can followed by numeric

// fullName = 35;       // dynamic type where we can change the fullName with any type of value

console.log(fullName);
console.log($price);


// $$$$$$$$$$ Symbol $$$$$$$$$$ //
    let ID = Symbol("userID");
    console.log(ID);        // Symbol(userID)

    // We can assign symbol to the object's key
    const person = {
        name: "Shahbaz Patel",
        [ID]: 786
    }
    console.log(person);        // { name: 'Shahbaz Patel', [Symbol(userID)]: 786 }
    console.log(person[ID]);        // 786, Actual key "userID" was hidden to use, in substitute used Symbol "ID"
// $$$$$$$$$$ Symbol $$$$$$$$$$ //


// $$$$$$$$$$ bigInt $$$$$$$$$$ //

    // We can declare bigInt in a 2 ways
    let big = 9007199254740991n;    // way1
    let big1 = BigInt("9007199254740991");      // way2

    console.log(big);       // 9007199254740991n
    console.log(big1);      // 9007199254740991n

// $$$$$$$$$$ bigInt $$$$$$$$$$ //



// $$$$$$$$$$ Date $$$$$$$$$$ //

    // Date is a non-primitive data type (It's an object).
    // Internally, it saves the time as a number of milliseconds since Jan 1, 1970 UTC.

    let currentDate = new Date();   // created current date by Date constructor
    console.log(currentDate);   // 2025-05-21T13:46:20.520Z


    let specificDate = new Date("2025-05-20T13:46:20.520Z");     // Specific date and time
    console.log(specificDate);


    // Date with year, month (0-indexed), day, hour, minute, second
    const custom = new Date(2025, 4, 21, 10, 30); 
    console.log(custom);    // // May 21, 2025 at 10:30

    // There are many Date methods available which returns year, month, day, hour, minutes, seconds, milliseconds as below.
    console.log(currentDate.getFullYear());     // 2025
    console.log(currentDate.getMonth());        // 4 (0 -> January, 11 -> December)
    console.log(currentDate.getDate());         // 21
    console.log(currentDate.getDay());          // 3 (0 -> Sunday, 6 -> Saturday)
    console.log(currentDate.getHours());        // 14 (UTC Timing)
    console.log(currentDate.getMinutes());      // 6 (UTC Timing)
    console.log(currentDate.getSeconds());      // 5
    console.log(currentDate.getTime());         // get milliseconds seconds since Jan 1 1970
    console.log(new Date().toString());     // Wed May 21 2025 14:09:36 GMT+0000 (Coordinated Universal Time)
    console.log(new Date().toISOString());      // 2025-05-21T14:09:36.367Z
    console.log(new Date().toLocaleDateString());   // 5/21/2025
    console.log(new Date().toDateString());   // Wed May 21 2025


    // Dates can be compared using .getTime() or direct subtraction
    const d1 = new Date("2025-01-01");  
    const d2 = new Date("2026-01-01");

    console.log(d2 > d1); // true
    console.log(d2 - d1); // milliseconds difference

// $$$$$$$$$$ Date $$$$$$$$$$ //



// $$$$$$$$$$ Map $$$$$$$$$$ //

    // In JavaScript, a Map is a built-in object that stores key-value pairs and remembers the original insertion order of the keys.

    const mymap = new Map();
    mymap.set("name", "Shahbaz");
    mymap.set(2, "Patel");

    console.log(mymap);     // Map(2) { 'name' => 'Shahbaz', 2 => 'Patel' }

// $$$$$$$$$$ Map $$$$$$$$$$ //



// $$$$$$$$$$ Set $$$$$$$$$$ //

    // A set is a build-in object in javascript used to store unique values(means no duplicates are allowed).
    // It can store any type of values, whether it can primitive or any object.

    const set = new Set();

    set.add(1);
    set.add(2);
    set.add(2);     // Duplicate will ignore

    console.log(set);       // Set(2) {1, 2}

    // We can also initialize set with an array
    const friends = new Set(["Shahbaz", "Kaleem", "Ilham"]);
    console.log(friends);   // Set(3) { 'Shahbaz', 'Kaleem', 'Ilham' }


    // Iterating Set values by for of loop

    for(let friend of friends) {
        console.log(friend);
    }

    // We can remove duplicate items from an array

    const arr = [1, 2, 2, 3, 4];
    console.log([...new Set(arr)]);     // [ 1, 2, 3, 4 ]

// $$$$$$$$$$ Set $$$$$$$$$$ //




