let user = { name: "fang", age: 18 };
// let role = {
//     roleId,
//     roleName,
//     getPermissions: function() {

//     }
// };

let animal = {
    name: "Animal",
    eat: function() {
        console.log("Animal eat");
    },
    run: function() {
        console.log("Animal run");
    }
};

let human = {
    name: "Human",
    eat() {
        super.eat();
        console.log("Human eat");
    },
    run() {
        super.run();
        console.log("Human run");
    }
};

Object.setPrototypeOf(human, animal);
console.log(human.name);
// console.log(human.eat());
// console.log(human.run());
human.eat();
human.run();