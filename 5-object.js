console.log("@@@@@@@@@@@ Object @@@@@@@@@@@");

// Object is like real time object which contain different information in the form of key:value pair separated by the comma.

const student = {
    fullName: "Shahbaz Shaikh",
    age: 36,
    cgpa: 8.9,
    isPass: true
};

console.log(student);   // print overall object

console.log(student["fullName"]);   // 1st way to access Objects key's value

console.log(student.fullName);      // 2nd way to access Objects key's value

console.log(student.cgpa);          // best way to access

// we can change any key's value of above object as below

student["fullName"] = "Kaleem Patel";

console.log("####### After name change ######");
console.log(student.fullName);         // showing fullName is "Kaleem Patel"
console.log("####### After name change ######");

