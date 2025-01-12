console.log("@@@@@@@@@@@ String Methods @@@@@@@@@@@");

// These are built-in functions to manipulate a string
// string are immutable, cannot change just makes another copy and make changes

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