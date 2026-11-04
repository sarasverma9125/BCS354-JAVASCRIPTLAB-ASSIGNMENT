/*
Name : Saras Verma
Roll No : 2510303458
Assignment No : 8
Task No : 1
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher = new Teacher("Saras", "Maths");

console.log(teacher.greet());