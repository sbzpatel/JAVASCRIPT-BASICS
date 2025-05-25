console.log("@@@@@@@@@@@ Arrow Functions @@@@@@@@@@@");

    const arrowSum = (a, b) => console.log(a+b);

    arrowSum(5, 4);


    let arrowMul = (a, b) => a*b;

    console.log(arrowMul(4,5));


    // Reason to use Arrow Function instead of Traditional Function //

    // 1) Short Syntax ->>
        // @@@@@@ Traditional Way @@@@@@ //
        
        // function sum(a,b) {
        //     return a+b;
        // }
        
        // @@@@@@ Traditional Way @@@@@@ //
        
        
        
        // @@@@@@ Arrow Function @@@@@@ //
        
        const sum = (a, b) => a+b;  
        
        // @@@@@@ Arrow Function @@@@@@ //
        
        console.log(sum(5,4));  //  function call
        
    // 2) Lexical Scope ->>
        // Arrow function does not have its own this. Instead it inherit it from a surrounding context(Lexical scope).
        
        // This is useful in callbacks and when using functions inside classes.
        
        function Timer() {
            this.count = 0;
            
            setTimeout(() => {
                this.count++;
                console.log(count);
            }, 3000)
        }
        
    // 3) No binding of "arguments" ->>
        // Basically traditional function has its own arguments objects but arrow function does not have any object like this. So we can get the reference from lexical scope in nested functions.
        
    // 4) Arrow functions used in Functional Programming (methods like map(), filter() & reduce())

console.log("@@@@@@@@@@@ Arrow Functions @@@@@@@@@@@");