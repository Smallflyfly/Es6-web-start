//KV
let userEntity = {
    userName: "fang",
    age: 28,
    addr: "Hangzhou"
};

//JSON
let map = new Map();
map.set("userName", "fangpf");
map.set("age", 18);
map.set("addr", "Hangzhou");
console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.get("age"));
console.log(map.entries());