console.log("@@@@@@@@@@@ String Methods @@@@@@@@@@@");

// These are built-in functions to manipulate a string
// strings are immutable, cannot change just makes another copy and make changes

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ String Methods $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //
// str.length();	str.charAt();	str.charCodeAt();	    str.indexOf("z");       str.lastIndexOf("z");

// str.includes();		str.startsWith();		str.endsWith();

// str.slice();		str.substring();		str.substr();

// str.replace();		str.replaceAll();		

// str.toUpperCase();		str.toLowerCase();

// str.trim();		str.trimStart();	str.trimEnd();

// str.concat();		str.split();		str.repeat();
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ String Methods $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //

let myName = "Shahbaz Patel";

let college = "     Dr. J J Magdum College of Engineering, Jaysingpur.             ";

let str = "Arhaan Shahbaz Patel";

console.log("Name:", myName);



console.log("Name(uppercase):", myName.toUpperCase());



console.log("Name(lowercase):", myName.toLowerCase());



console.log("Trimmed college name:", college.trim());



let extractedStr = str.slice(7, 14);     // withing start & end value

let strLastWord = str.slice(15);        // mentioned start index and will print till last of the string (Patel)

let strFirstWord = str.slice(0, 6);      // start word extracted from string (Arhaan)

console.log("Extracted string:", extractedStr);

console.log("Extracted string's last word:", strLastWord);

console.log("Extracted string's first word:", strFirstWord);



let concatenatedStr = myName.concat(college.trim());

console.log(concatenatedStr);



let trimmedCollege = college.replace("Jaysingpur", "Jaysinghpur");      // here we replace "Jaysingpur" with "Jaysinghpur"

console.log(trimmedCollege);

let charAt4 = myName.charAt(4);

console.log("Character at 4:", charAt4);




fName = "Shahbaz";
strPhrase = "Shahbaz Patel is a Patel's";

console.log(fName.length);
console.log(fName.charAt(4));
console.log(fName.charCodeAt(4));
console.log(fName.indexOf("h"));
console.log(fName.lastIndexOf("h"));
console.log(fName.trim());
console.log(fName.trimStart());
console.log(fName.trimEnd());
console.log(fName.toLowerCase());
console.log(fName.toUpperCase());
console.log(fName.slice(0,4));
console.log(fName.substring(0,4));
console.log(fName.substr(4,3));
console.log(fName.concat(" Patel"));
console.log(fName.repeat(5));
console.log(strPhrase.replace("Patel", "Shaikh"));
console.log(strPhrase.replaceAll("Patel", "Shaikh"));
console.log(strPhrase.includes("Patel"));
console.log(strPhrase.startsWith("Shahbaz"));
console.log(strPhrase.endsWith("Patel's"));
console.log(fName.split(""));

console.log("@@@@@@@@@@@ String Methods @@@@@@@@@@@");

// @@@@@@@@@@@@@@@ Interview Questions @@@@@@@@@@@@@@@ //

    // How to reverse the String?

        // Eg:
            let fname = "Shahbaz";
            console.log(fname.split('').reverse().join(''));

    // How to check whether string is palindrome?

        // Eg:
            let fName = "BOB";
            let reverseFName = fName.split('').reverse().join('');

            if(fName == reverseFName) {
                console.log(`${fName} is a palindrome.`);
            } else {
                console.log(`${fName} is not a palindrome.`);
            }

    // Explain the difference between primitive strings and String objects.
    
        // Eg:
            console.log(typeof "hello");           // "string"
            console.log(typeof new String("hi"));  // "object"

    // How do you escape special characters in a string?
    
        // Eg:
            const str77 = "He said, \"Hello\"";

    // What Is String Interpolation in JavaScript?
        // String Interpolation is a process of inserting variables or expressions inside a string.
        // In JavaScript, this is done using template literals — strings wrapped in backticks (`) instead of quotes.

        // Eg:
            const yourname = "Alice";
            const greeting = `Hello, ${yourname}!`;  // string interpolation
            console.log(greeting); // "Hello, Alice!"
// @@@@@@@@@@@@@@@ Interview Questions @@@@@@@@@@@@@@@ //