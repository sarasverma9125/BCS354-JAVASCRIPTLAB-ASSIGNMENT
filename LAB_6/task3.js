/*
Name : Saras Verma
Roll No : 2510303458
Assignment No : 6
Task No : 3
*/

let text = "{name: Rohan}";

try {
    JSON.parse(text);
} catch (error) {
    console.log("Invalid JSON");
}