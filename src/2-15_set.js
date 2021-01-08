// ================ 1. set操作 ================
// var s1 = new Set([1,2,3]);
// s1.add(100).add(200);
// console.log(s1);        // Set(5) {1, 2, 3, 100, 200}

// s1.delete(2);
// console.log(s1);        // Set(4) {1, 3, 100, 200}

// console.log(s1.has(100));    // true

// s1.clear();             // 
// console.log(s1);        // Set(0) {}

// console.log(s1.size);   // 0

// ================ 2. set遍历 ================
let s2 = new Set([1,2,3,4,5]);

// s2.forEach(item => console.log(item));

// for(let item of s2){
//     console.log(item);
// }

// for(let item of s2.keys()){
//     console.log(item);
// }

// for(let item of s2.values()){
//     console.log(item);
// }

// for(let [key,value] of s2.entries()){
//     console.log(key,value);
// }

// ================ 3. set应用 ================
// 去重
// let arr1 = [1,1,2,4,5];
// var s3 = new Set(arr1);
// console.log(s3);        // Set(4) {1, 2, 4, 5}

// 合并
// let arr2 = [1,3,5,7,9];
// let arr3 = [2,4,6,8,10];
// let s4 = new Set([...arr2,...arr3]);
// console.log(s4);        // Set(10) {1, 3, 5, 7, 9, …}

// 将set转换成数组
// let s5 = new Set([1,2,3,4,5]);
// console.log([...s5]);           // [1, 2, 3, 4, 5]
// console.log(Array.from(s5));    // [1, 2, 3, 4, 5]

// 求两数组交集
// let arr4 = [1,2,3,4,5];
// let arr5 = [1,3,5,7,9];
// let s6 = new Set(arr4);
// let s7 = new Set(arr5);
// let rs = new Set(arr4.filter(num => s7.has(num)));
// console.log(rs);            // Set(3) {1, 3, 5}

// 求两数组差集
// let arr6 = [1,2,3,4,5];
// let arr7 = [1,3,5,7,9];
// let rs1 = arr6.filter(item => !arr7.includes(item));
// let rs2 = arr7.filter(item => !arr6.includes(item));
// console.log([...rs1,...rs2]);       // [2, 4, 7, 9]

// ================ 4. WeakSet ================
// WeakSet特点：对象都是弱引用，不存在垃圾回收
// var obj1 = {name:'zhangsan'};
// var ws1 = new WeakSet([obj1]);
// console.log(ws1);

// WeakSet不可以使用forEach遍历
// ws1.forEach(item => console.log(item));