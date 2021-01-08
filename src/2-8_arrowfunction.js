// ================ 1.this指向定义时所在的对象，而不是调用时所在的对象 ================
// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     console.log(this);      // 在非严格模式下，打印 window 对象，在严格模式下/webpack处理后，打印 undefined
// });

// ================ 2.箭头函数不可以当作构造函数 ================
// let Person = (name,age) => {
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person('zhangdan',10);
// console.log(p1);    // 在非严格模式下，报错：Uncaught TypeError: Person is not a constructor
//                     // 在严格模式下/webpack处理后：打印 Person {}

// ================ 3.箭头函数中不可以使用arguments，用rest参数代替 ================
// 'use strict';
// let foo1 = () => {
//     console.log(arguments);
// }
// foo1(1,2,3);             // 在非严格模式下，报错： Uncaught ReferenceError: arguments is not defined
//                         // 在严格模式下/webpack处理后，打印：Arguments(3) [{…}, {…}, ƒ, callee: (...), Symbol(Symbol.iterator): ƒ]

// 如果返回值是字面量对象，一定要用小括号包起来
// let person = (name) => ({
//     age: 20,
//     addr: 'Beijing City'
// });
// person();       // {age: 20, addr: "Beijing City"}