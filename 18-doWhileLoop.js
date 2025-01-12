console.log("@@@@@@@@@@@ do-While Loop @@@@@@@@@@@");

let s=20;

// Here no any console can run due to condn not satisfied
/* while(s<=10) {
    console.log("Sbz is great!!");
} */

// but in same situation in do-while loop, 
// even the condn not satisfied atleast one time do-while expressions going to run
// In do-while first execution the expressions and then condition checked
do {
    console.log("Sbz is great!!");
} while(s<=10);
