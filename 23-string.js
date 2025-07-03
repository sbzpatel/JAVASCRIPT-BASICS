// ✅ ############## String ############## ✅ //

    // String is a sequence of characters used to represent text, there are some inbuild properties and methods to deal with strings in JavaScript.


    // ✅ ############## Declaring Strings ############## ✅ //
        // We can use single quote(' '), double quote(" ") & backticks(` `).

        // Eg:
            let str = "Shahbaz";    // using double quote
            let str1 = 'Patel';     // using single quote
            let str2 = `Shahbaz Patel`;     // using backticks

    // ✅ ############## Declaring Strings ############## ✅ //


    // 🧵 ############## String Concatenation ############## 🧵 //
        // Eg:
            let fname = 'Shahbaz';
            let greeting = "Hello, " + fname + "!";

        // Eg: (Using Template Literals - Preferred for readablility)
            let greeting1 = `Hello ${fname}!`;

    // 🧵 ############## String Concatenation ############## 🧵 //


    // 🔠 ############## String Indexing ############## 🔠 //
        // Eg:
            let msg = "Hello!!!";

            console.log(msg[0]);            // H
            console.log(msg.charAt(1))      // e

    // 🔠 ############## String Indexing ############## 🔠 //


    // 📌 ############## Immutability ############## 📌 //
        // Eg:
            let str3 = "Aurwad";

            str[0] = "P";       // ❌ Won't work
            console.log(str3);      // Aurwad (unchanged)

    // 📌 ############## Immutability ############## 📌 //

// ✅ ############## String ############## ✅ //