// let arr1 = [1,2,3];

// filter
// let rs1 = arr1.filter(function(num) {
//     return num > 2;
// });
// console.log(rs1);   // [3]

// some
// let rs2 = arr1.some(function(num) {
//     return num > 2;
// });
// console.log(rs2);    // true

// reduce
// 1. 数组求和
let arr2 = [1, 3, 3, 5, 5];
// let rs3 = arr2.reduce(function(prev,curr,index,array) {
//     return prev + curr;
// },0);
// console.log(rs3);       // 15

// 2. 求最大值
// let rs4 = arr2.reduce(function(prev,curr) {
//     return Math.max(prev,curr);
// });
// console.log(rs4);       // 5

// 3. 数组去重
// let rs5 = arr2.reduce(function (prev, curr) {
//     prev.indexOf(curr) === -1 && prev.push(curr);
//     return prev;
// }, []);
// console.log(rs5);       // [1, 3, 5]


Array.prototype.foo = function() {
    console.log('foo');
}

let arr3 = [1,2,4,2,3];
// for in 循环会将在 Array.prototype 中自定义的函数给打印出来
// index 为数组下标
// for(let index in arr3) {
//     console.log(index, arr3[index]);
// }

// for of 循环不会将在 Array.prototype 中自定义的函数给打印出来
// item 为数组内容
// for(let item of arr3) {
//     console.log(item);
// }

// arr3.keys()
// for(let key of arr3.keys()) {
//     console.log(key);   // 数组下标
// }

// arr3.values()
// for(let value of arr3.values()) {
//     console.log(value);   // 数组内容
// }

// arr3.entries()
// for(let [key,value] of arr3.entries()){
//     console.log(key,value); // 数组下标 数组内容
// }

// for...in 不支持 continue 和 break
// for(let item in arr3) {
//     if(item === 0) {
//         continue;
//     }
//     console.log(item);   // 0 1 2 3 4
// }

// for...of 支持 continue、break
// for(let item of arr3) {
//     if(item === 2) {
//         continue;
//     }
//     console.log(item);  // 1 4 3
// }