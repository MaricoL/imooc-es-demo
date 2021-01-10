// // JS 中最大整数：
// let num = 2 ** 53;
// console.log(num);       // 9007199254740992

// console.log(num + 1);   // 9007199254740992

// // 使用 BigInt 类型表示更大的书：
// // 方式一：
// let b1 = 9007199254740993n;
// console.log(b1);            // 9007199254740993n
// console.log(typeof b1);     // bigint

// // 方式二：
// let b2 = BigInt(9007199254740993n);
// console.log(b2);            // 9007199254740993n

// // 相加
// console.log(b1 + b2);       // 18014398509481986n
