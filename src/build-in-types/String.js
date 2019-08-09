let userEntity = {
    userName: "fang",
    age: 18,
    sayHello: function() {
        console.log("Hello...");
        return this.userName;
    }
};
console.log("hello, my name is " + userEntity.userName + ".");
console.log(`hello, my name is ${userEntity.userName}` + `${userEntity.sayHello()}`);

let html = `
    <div>
        <url>
            <li>用户名:${userEntity.userName}</li>
            <li>age:${userEntity.age}</li>
        </url>
    </div>
`;
document.body.innerHTML = html;