// 1. 声明不同的 Symbol()，其值是不同的
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1 === s2); // false

// 2. 给 symbol 设置描述
// let s3 = Symbol('foo');
// let s4 = Symbol('bar');
// console.log(s3);        // Symbol(foo)
// console.log(s4);        // Symbol(bar)
// console.log(s3 === s4); // false

// 3. 传入对象，会自动转换成对象.toString()字符串
// const obj1 = { name: 'imooc' };
// let s5 = Symbol(obj1);
// console.log(s5);        // Symbol([object Object])

// const obj2 = {
//     name: 'imooc',
//     toString() {
//         return this.name;
//     }
// };
// let s6 = Symbol(obj2);
// console.log(s6);        // Symbol(imooc)

// 4. Symbol.for('xxx') 会在全局注册一个描述为'xxx'的Symbol，
// 如果后续又创建了同描述的Symobl，则直接返回，不会再次创建新的Symbol
// let s7 = Symbol.for('abc');
// let s8 = Symbol.for('abc');
// console.log(s7);        // Symbol(abc)
// console.log(s8);        // Symbol(abc)
// console.log(s7 === s8); // true

// 5. Symbol.keyFor(s) 会判断是否在全局中定义过s的Symbol，
// 如果有，则返回Symbol的描述，否则返回 undefined
// let s9 = Symbol('one');
// console.log(Symbol.keyFor(s9));

// let s10 = Symbol.for('two');        // undefined
// console.log(Symbol.keyFor(s10));     // one

// 应用一：作为对象的重复key
// const grade1 = {
//     '李四':{address:'aaa',phone:'111'},
//     '李四':{address:'bbb',phone:'222'}
// };
// console.log(grade1);     // 李四: {address: "bbb", phone: "222"}

// // 使用 Symbol：
// const stud1 = Symbol('李四');
// const stud2 = Symbol('李四');
// const grade2 = {
//     [stud1]:{address:'aaa',phone:'111'},
//     [stud2]:{address:'bbb',phone:'222'}
// }
// console.log(grade2);     // Symbol(李四): {address: "aaa", phone: "111"} 
//                          // Symbol(李四): {address: "bbb", phone: "222"}

// console.log(grade2[stud2]);     // {address: "bbb", phone: "222"}

// 应用二：隐藏对象遍历
const sym = Symbol('age');
class User {
    constructor(name) {
        this.name = name;
        this[sym] = 18
    }

    show() {
        console.log(this.name + this[sym]);
    }
}
let user = new User('zhangsan');
// user.show();        // zhangsan18

// for in 无法遍历 Symbol 类型的 key
// for(let key in user) {
//     console.log(key,user[key]);     // name zhangsan
// }

// Object.keys(user) 无法遍历 Symbol 类型的 key
// for(let key of Object.keys(user)) {
//     console.log(key,user[key]);     // name zhangsan
// }

// Object.getOwnPropertySymbols(user) 只能获取Symbol类型的属性
// for (let key of Object.getOwnPropertySymbols(user)) {
//     console.log(key, user[key]);        // Symbol(age) 18
// }

// Reflect.ownKeys(user) 可以遍历所有属性
// for (let key of Reflect.ownKeys(user)) {
//     console.log(key, user[key]);        // name zhangsan
//                                         // Symbol(age) 18
// }

// 应用三：消除魔术字符串
// function getArea(shape) {
//     let area = 0;
//     switch (shape) {
//         case 'Triangle':
//             area = 1;
//             break;
//         case 'Circle':
//             area = 2;
//             break;
//     }
//     return area;
// }

// var rs = getArea('Triangle');
// console.log(rs);

// 使用 Symbol:
// const shapeType = {triangle: 'Triangle',circle: 'Circle'};
// const shapeType = {triangle: Symbol(),circle: Symbol()};
// function getArea(shape) {
//     let area = 0;
//     switch (shape) {
//         case shapeType.triangle:
//             area = 1;
//             break;
//         case shapeType.circle:
//             area = 2;
//             break;
//     }
//     return area;
// }

// var rs = getArea(shapeType.circle);     // 2
// console.log(rs);