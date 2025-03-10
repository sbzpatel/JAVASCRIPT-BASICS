console.log("@@@@@@@@@@@ For-in Loop @@@@@@@@@@@");

// for-in is a special type of for loop used to access the key of each element of an object.

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