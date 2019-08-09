let arr1 = [1, 2, 3];
console.log(arr1[0], arr1[1], arr1[2]);
console.log("*******");
console.log(...arr1);
console.log(1, ...[2, 3, 4], 5);

let arr2 = arr1;
console.log("^^^^^")
console.log(...arr2);
arr2[2] = 1000;
console.log(...arr2);
console.log(...arr1);

console.log("*****************")

let arr3 = [...arr1]
console.log(...arr3);
arr3[2] = 9999;
console.log(...arr1);
console.log(...arr2);
console.log(...arr3);

console.log(...
    "hello");

console.log(...new Set(["str1", "str2", "str3"]));

let result = Math.max(1, 2, 3, 9, -99, 20, 22, 39);
console.log(result);

let dynamicArr = [7, 9, -22];
result = Math.max(...dynamicArr);
// let result2 = Math.max(dynamicArr);
console.log(result);
// console.log(result2);