console.log("@@@@@@@@@@@ Template Literals @@@@@@@@@@@");

    // Template Literal is a way to embed expressions with string using back ticks(``) which make code more reliable to maintainable to use.

    // template literals
    const specialString = `This is a template literals.`;
    console.log(specialString);


    let obj = {
        item: "pen",
        price: 10
    }

    console.log("The cost of", obj.item, "is", obj.price, "Rupees.");       // common way to write expression, hard to write

    console.log(`The cost of ${obj.item} is ${obj.price} Rupees.`);         // this is written with template expression

console.log("@@@@@@@@@@@ Template Literals @@@@@@@@@@@");