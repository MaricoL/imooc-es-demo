// ================ 1. 同步迭代 ================

// webpack下重写数组的Symbol.iterator无效
// let arr = [1, 2, 3, 4, 5];
// arr[Symbol.iterator] = function () {
//     let arrIndex = 0;
//     return {
//         next() {
//             return arrIndex < arr.length ?
//                 { value: arr[arrIndex++], done: false } :
//                 { value: undefined, done: true }
//         }
//     }
// };


// for(let item of arr) {
//     console.log(item);
// }

// ================ 2. 异步迭代 ================

// function getPromise(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //执行异步任务
//             // 返回 value-done
//             resolve({ value: time, done: false });
//         }, time);
//     });
// }

// let promiseArr = [getPromise(1000), getPromise(2000), getPromise(3000)];
// promiseArr[Symbol.asyncIterator] = function () {
//     let arrIndex = 0;
//     return {
//         next() {
//             return arrIndex < promiseArr.length ?
//                 promiseArr[arrIndex++] :
//                 Promise.resolve({ value: undefined, done: true })
//         }
//     }
// }

// 数组中如果有异步任务，不能同步迭代，需要异步迭代
// for(let item of promiseArr) {
//     console.log(item);      
// }

// 异步迭代写法：
// async function test() {
//     for await (let item of promiseArr) {
//         console.log(item);
//     }
// }

// 测试异步迭代
// test();