// Each Object contains a special object named "prototype" which contains different types of properties as well as methods.

// We can set the prototype using "__proto__"

let fruits = ["Apple", "Mango", "Grapes", "Banana"];

console.log(fruits.toString());     // here toString() method of prototype object which is predefined set for any object

// Please find the below example where shows how to set the prototype for any object

const employee = {      // define object "employee" with method "calcTax()"
    calcTax() {
        console.log("Tax rate is 10%.");
    }
}

const shahbazShaikh = {     // define object "shahbazShaikh" with property "salary"
    salary: 500
}

shahbazShaikh.__proto__ = employee;         // set the object "employee" to the "shahbazShaikh" object's prototype

shahbazShaikh.calcTax();        // here we successfully access the calcTax prototype method which is taken from object "employee"

// If object & prototype have same method, object's method will be used (explained in below example).

const kaleemPatel = {
    salary: 10000,
    calcTax() {
        console.log("Tax rate is 4%.");
    }
}

kaleemPatel.__proto__ = employee;

kaleemPatel.calcTax();      // output should be "Tax rate is 4%"

