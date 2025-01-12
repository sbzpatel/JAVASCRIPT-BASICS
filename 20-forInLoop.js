console.log("@@@@@@@@@@@ For-of Loop @@@@@@@@@@@");

// for in used for access objects and array variables values one by one

let student = {
    name: "Arhaan Patel",
    age: 20,
    cgpa: 9.8,
    isPass: true
}

for (let i in student) {
    console.log("key =", i); // getting here keys of object "student"
    console.log("value =", student[i]);    // getting equivalent vlaue of key at each iteration level
}