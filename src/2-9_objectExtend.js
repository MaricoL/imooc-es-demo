// ================ 1.对象属性的简写方式 ================
// let name = 'zhangsan';
// let age = 18;
// let obj1 = {name,age};
// console.log(obj1);      // {name: "zhangsan", age: 18}

// ================ 2.对象属性key的简写方式 ================
// [key] 可以动态表示key
// let s = 'school';
// let obj2 = {
//     name: 'lisi',
//     [s]: 'imooc'
// }
// console.log(obj2);      // {name: "lisi", school: "imooc"}

// 对象方法的简写
// let obj3 = {
//     name:'zhangsan',
//     say() {
//         console.log(this.name + ' say..');
//     }
// }
// obj3.say();         // zhangsan say..

// ================ 3.Object.is()可以比较NaN是否相同 ================
// console.log(Object.is(2,'2'));      // false
// console.log(Object.is(NaN,NaN));    // true
// console.log(Object.is(+0,-0));      // false
// 对象和数组比较的是引用地址，而不是其中的值
// let arr1 = [1,2,3];
// let arr2 = [1,2,3];
// console.log(Object.is(arr1,arr2));  // false

// ================ 4.扩展运算符 和 Object.assign() =================
// let obj4 = { x: 3, y: 4, z: 5 };
// let obj5 = {...obj4};
// console.log(obj5);          // {x: 3, y: 4, z: 5}

// Object.assign 将对象a合并到对象b中
// let a = { x: 1, y: 2 };
// let b = { z: 3 };
// console.log(Object.assign(b, a));    // {z: 3, x: 1, y: 2}

// ================ 5.in  =================
// 判断对象中是否包含该key
// let obj6 = {a:1,b:2,c:3};
// console.log('a' in obj6);   // true
// console.log('d' in obj6);   // false

// 判断数组中是该下标是否有值
// let arr3 = [1,2,3];
// console.log(2 in arr3);     // true
// console.log(3 in arr3);     // false

// ================ 6.对象的遍历方式  =================
let obj7 = { name: 'zhangsan', age: 18, school: 'immoc' };
// 1. for in
// for(let key in obj7){
//     console.log(key,obj7[key]);
// }

// 2. Object.keys()
// Object.keys(obj7).forEach(key => {
//     console.log(key, obj7[key]);
// })

// 3. Object.getOwnPropertyNames()
// Object.getOwnPropertyNames(obj7).forEach(key => {
//     console.log(key, obj7[key]);
// });

// 4. Reflect.ownKeys()
// Reflect.ownKeys(obj7).forEach(key => {
//     console.log(key, obj7[key]);
// });