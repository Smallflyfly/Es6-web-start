let s1 = Symbol();
console.log(s1);

let s2 = Symbol.for("fang");

let s3 = Symbol.for("fang");
console.log(s2);
console.log(s3);
console.log(s2 == s3);

let idSym = Symbol("id");
let user = {
    name: "fang",
    age: 20
};
user[idSym] = "78990";
console.log(user[idSym]);

let s5 = Symbol();
console.log(`module${s5.toString()}`);