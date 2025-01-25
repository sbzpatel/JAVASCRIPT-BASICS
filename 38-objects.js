// A javascript object is an entity having state & behaviour(properties & methods).

const student = {
    firstName: "Shahbaz",
    lastName: "Patel",
    age: 35,
    printFullName: function() {         // way1 to define function in object
        return this.firstName+" "+this.lastName;
    },
    printAge() {                        // way2 to define function in object
        return this.age;
    }
}

console.log("Student First Name:", student.firstName);

console.log("Student Last Name:", student.lastName);

console.log("Student Full Name:", student.printFullName());

console.log("Student Full Name:", student.printAge());