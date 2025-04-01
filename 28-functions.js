console.log("@@@@@@@@@@@ JS Functions @@@@@@@@@@@");

    // Block of code that performs a specific task on its invocation where it needed
    // functions prevent us from writing redendent code and make code more reliable

    function callSbz() {                                    // function definition
        console.log("Bolo Barkhurdaar, I am Shahbaz Patel(The Great coder of Asia).");
    }

    callSbz();                                              // function call
    callSbz();





    function printSbzData(name, age, place) {               // function definition with parameters
        console.log("###### Sbz Data ######");
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Place:", place);
        console.log("###### Sbz Data ######");
    }

    printSbzData("Shahbaz Patel", 35, "Pune");             // function call with arguments(name, age, place)





    // calculate sum of 2 numbers

    function sumFun(n1, n2) {
        console.log(`Sum of ${n1} & ${n2} is ${n1 + n2}.`);
    }

    sumFun(4, 7);





    function diffFun(n1, n2) {          // function defintion with return value
        return n1 - n2;
        console.log("don't run this command after return.");         // statment not able to run
    }
    // functions parameters are local scope within that same function only

    let diff = diffFun(5, 1);
    console.log("Difference of 5 & 1 is", diff);
    console.log(`Diffeence of 5 & 1 is ${diff}`);       // expression return using back ticks(``)

console.log("@@@@@@@@@@@ JS Functions @@@@@@@@@@@");