let userName = "fang";
let age = 28;
let addr = "Hangzhou";
let sayHello = function() {
    console.log("Hello");

};

export { userName, age, addr, sayHello };

export class Animal {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }

    eat() {
        console.log(`${this.userName} eat`);
    }

    run() {
        console.log(`${this.age} run`);
    }

    static mySaticMethod() {
        console.log("static method...");
        // console.log(`${this.userName}`);
    }

}