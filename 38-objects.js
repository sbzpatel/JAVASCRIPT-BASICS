// A javascript object is an entity having state & behaviour(properties & methods).

const student = {
    firstName: "Shahbaz",
    lastName: "Patel",
    age: 35,
    printFullName: function() {
        return this.firstName+" "+this.lastName;
    }
}

console.log("Student First Name:", student.firstName);

console.log("Student Last Name:", student.lastName);

console.log("Student Full Name:", student.printFullName());