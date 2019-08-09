import { userName, age, addr, sayHello, Animal } from "./export-example"
sayHello();
console.log(userName);
console.log(age);
console.log(addr);

let animal = new Animal("dog", 28);
animal.eat();
animal.run();