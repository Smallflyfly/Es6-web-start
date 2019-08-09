/**
 * 必须熟练掌握的知识点有5个
 * 1. 数组解构赋值
 * 2. 对象解构赋值
 * 3. 字符串解构赋值
 * 4. 函数传参中的解构
 * 5. 一个复杂的解构例子
 */

/**
 * 1. 数组解构赋值
 */
//一次声明多个变量并赋值
// let [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);

//按照模式匹配，两边参数个数不同也可以，匹配到就能赋值
// let [d, e] = [4, 5, 6];
// console.log(d);
// console.log(e);

// let [f, [g]] = [7, [8, 9, 10]];
// console.log(f);
// console.log(g);

//两边参数数量不同的时候，变量可以带默认值
// let [name, age, addr = "北京市"] = ["damoqiongqiu", 18];
// console.log(name);
// console.log(age);
// console.log(addr);

// let { name, age, addr: workAddr } = { name: "fang", age: 18, addr: "china" };
// console.log(name);
// console.log(age);
// console.log(workAddr);

// let [str] = "Hello world";
// console.log(str);

let userEntity = {
    useName: "fangpf",
    age: 28,
    addr: "Hangzhou",
    skills: ["Java", "Spring", "Docker", "Kubernetes"],
    cellphone: [{
            SIM: "13646834528",
            operater: "中国移动"
        },
        {
            SIM: "15657170409",
            operater: "中国联通"
        }
    ],
    sayHello: function() {
        console.log(`我的名字是${this.useName}`);
    }
};
let { useName, age, skills, cellphone } = userEntity;
console.log(userEntity.useName);
console.log(userEntity.addr);
console.log(userEntity.cellphone[0].SIM);

//带rest运算符的情况
// let [h, ...i] = [1, 2, 3, 4, 5];
// console.log(h);
// console.log(i); //注意i这时候是个数组

//数据类型不同的情况
// let [l, m] = [1, "damo", 3];
// console.log(l);
// console.log(">>>" + m);

//交换变量值更加快捷
// let [j, k] = [1, 2];
// [j, k] = [k, j];
// console.log(j);
// console.log(k);