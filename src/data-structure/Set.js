let set = new Set();
console.log(set);
let set2 = new Set([1, 2, 4, 5, 6, 4])
console.log(set2);
console.log(...set2);
set.add(100);
set.add(-99);
let flag = set.has(99);
console.log(flag);
console.log(set.keys());
console.log(set.values());

let arr1 = [1, 2, 4];
let arr2 = [1, 2, 3];
let set3 = new Set([...arr1, ...arr2]);
console.log(set3.entries());

let seta = new Set([1, 2, 3, 5, 7]);
let setb = new Set([1, 2, 7, 8, 11]);

let union = new Set([...seta, ...setb]);
console.log(union);
let intersect = new Set([...seta].filter(item => { return setb.has(item) }))
console.log(intersect);
let diff = new Set([...seta].filter(item => { return !setb.has(item) }))
console.log(diff)