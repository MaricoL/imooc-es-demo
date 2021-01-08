// ================ 1.扩展运算符 ================
// 将var2中的元素添加到var1中
// ES5中：
// let var1 = [1, 2, 3];
// let var2 = [4, 5, 6];
// Array.prototype.push.apply(var1, var2);
// console.log(var1);      // [1, 2, 3, 4, 5, 6]

// ES6中：
// let var3 = [1, 2, 3];
// let var4 = [4, 5, 6];
// let var5 = [...var3, ...var4];
// console.log(var5);      // [1, 2, 3, 4, 5, 6]

// var str1 = 'abcd';
// var arr6 = [...str1];
// console.log(arr6);      // ["a", "b", "c", "d"]

// ================ 2.rest参数 ================
// ES5中：
// function foo1() {
//     let total = 0;
//     Array.prototype.forEach.call(arguments,function(num){
//         total += num;
//     });
//     return total;
// }
// console.log(foo1(1,2,3));       // 6
// console.log(foo1(1,2,3,4));     // 10

// ES6中：
// function foo2(...args){
//     return Array.from(args).reduce(function(prev,curr) {
//         return prev + curr;
//     },0);
// }
// console.log(foo2(1,2,3));       // 6
// console.log(foo2(1,2,3,4));     // 10

// ================ 2.扩展运算符 和 解构赋值 结合 ================
// let [a,...b] = [1,2,3,4];
// console.log(a);     // 1
// console.log(b);     // [2, 3, 4]

