function sum1(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(sum1([1, 3, 3, 8, -9, 28]));

let array = [1, 3, 3, 8, -9, 28];
console.log(sum1(array));

function sum2(...args) {
    let result = 0;
    for (let i of args) {
        result += i;
    }
    return result;
}

console.log(sum2(1, 3, 3, 8, -9, 28));

let [a, ...b] = [1, 2, 3, 4];
console.log(b);