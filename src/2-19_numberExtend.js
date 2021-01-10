// ================ 1.二进制和八进制 ================
// ES5
// 十进制 -> 二进制
// const a = 5;
// console.log(a.toString(2));         // 101

// 二进制 -> 十进制
// const b = 101;
// console.log(parseInt(b, 2));        // 5

// ES6  0B二进制    0O八进制
// const a = 0B0101;
// console.log(a);     // 5
// const b = 0O777;
// console.log(b);     // 511


// ================ 2.Number.isFinite() 判断是否有限 ================
// console.log(Number.isFinite(10));       // true
// console.log(Number.isFinite(10 / 0));       // Infinity
// console.log(Number.isFinite(Infinity)); // fslse
// console.log(Number.isFinite('abc')); // fslse
// console.log(Number.isFinite(true)); // fslse
// console.log(Number.isFinite(false)); // fslse

// ================ 3.Number.isNaN() 判断是否是NaN ================
// console.log(Number.isNaN(NaN));         // true
// console.log(Number.isNaN(15));         // false

// ================ 4.Number.parseInt()、Number.parseFloat() ================
// console.log(Number.parseInt(10.5));     // 10
// console.log(Number.parseFloat(10.5));   // 10.5

// ================ 5.Number.isInteger() 判断是否为整数 ================
// console.log(Number.isInteger(1));       // true
// console.log(Number.isInteger(true));    // false

// ================ 6.安全整数 ================
// 最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
// 最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);   // -9007199254740991
// console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));     // true
// console.log(Number.isSafeInteger(Math.pow(-2, 53) + 1));     // true

// ================ 7.Math.trunc() 去除小数部分 ================
// console.log(Math.trunc(1.2));       // 1
// console.log(Math.trunc(true));      // 1
// console.log(Math.trunc(false));     // 0
// console.log(Math.trunc('-1.5'));    // -1
// console.log(Math.trunc('abc'));     // NaN
// console.log(Math.trunc(NaN));       // NaN
// console.log(Math.trunc(undefined)); // NaN

// ================ 8.Math.sign() 判断正负数 ================
// console.log(Math.sign(10));      // 1
// console.log(Math.sign(-10));     // -1
// console.log(Math.sign(0));      // 0
// console.log(Math.sign(+0));     // 0
// console.log(Math.sign(-0));     // -0
// console.log(Math.sign('abc'));  // NaN

