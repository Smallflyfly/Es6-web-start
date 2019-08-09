class Animal {
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

let animal = new Animal("dog", 3);
animal.run();
animal.eat();

class Human extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    eat() {
        console.log(`${this.userName} eat`);
    }

    coding() {
        console.log(`${this.userName} can coding`);
    }
}

let person = new Human("people", 99);

console.log(person.userName);
console.log(person.age);
person.eat();
person.run();
person.coding();
Animal.mySaticMethod("fang", 20);
Human.mySaticMethod();

// Object.assign();