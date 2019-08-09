let arr1 = Array.from("Hello world");
console.log(arr1);

let arr2 = Array.from({
    "0": "str1",
    "1": "str2",
    "2": "str3",
    length: 10
});

console.log(arr2);

let arr3 = Array.from({
    length: 1000
});
console.log(arr3);
arr3.fill(0);
console.log(arr3);

let result = ["a", "b", "c"].fill(7);
console.log(result);

result = [1, 8, 3, 8, -8, 22].includes(3);
console.log(result)

let myArr = [1, 2, 33, -9, 99, 26];
result = myArr.find(n => n > 4);
console.log(result);

result = [1, 2, [3],
    [4]
].flat();
console.log(result);

let arr = [1, 3, 4, [8, [10, 10]]]
console.log(arr.flat(1));

let arr5 = [1, 7, 9, 29, -23];
let arr6 = arr5.map(function(item) {
    return item * 2;
})
console.log(arr5);
console.log(arr6);

let arr7 = arr5.map(i => { return i * 10 });
console.log(arr7);

let arr8 = arr5.map(ii => { return ii * ii });
console.log(arr8);