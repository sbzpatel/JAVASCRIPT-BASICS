// ✅ ############## Template Literals ############## ✅ //

    // Template Literal is a way to embed expressions or variables with string using back ticks(``) which makes code more readable & flexible.

    // ✅ ############## template literals ############## ✅ //

        const specialString = `This is a template literals.`;
        console.log(specialString);


        let obj = {
            item: "pen",
            price: 10
        }

        console.log("The cost of", obj.item, "is", obj.price, "Rupees.");       // common way to write variable, hard to write

        console.log("Sum of 5 and 4 is", (5+4), ".");

        console.log(`The cost of ${obj.item} is ${obj.price} Rupees.`);         // this is written with template literal with back tick(``)

        console.log(`Sum of 5 and 4 is ${5+4}.`);

    // ✅ ############## template literals ############## ✅ //
    

    // ✅ ############## Multi-line Strings ############## ✅ //
    
        const multiline = `This is line1
        This is line2
        \tThis is line3`;

        console.log(multiline);

    // ✅ ############## Multi-line Strings ############## ✅ //

// ✅ ############## Template Literals ############## ✅ //