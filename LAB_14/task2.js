/*
 Name : Saras Verma
 Roll No : 2510303458
 Assignment No : 14
 Task No : 2
*/

let timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");