// ES5：
// let obj = {};
// let _name = '';
// Object.defineProperty(obj,'name',{
//     get() {
//         console.log('返回属性');
//         return _name;
//     },
//     set(val) {
//         console.log('属性被设值：' + val);
//         _name = val;
//     }
// });

// obj.name = 'zhangsan';
// console.log(obj.name);

// ES6:
// let arr = [7, 8, 9];
// arr = new Proxy(arr, {
//     get(target, prop) {
//         return prop in target ? target[prop] : 'error';
//     },
//     set(target, prop, value) {
//         if (value < 10) {
//             target[prop] = value;
//             return true;
//         } else {
//             // console.log('元素必须小于10，' + value + '添加失败！');
//             return false;
//         }
//     },
//     has(target, prop) {
//         console.log(target);
//         console.log(prop);
//         // prop 为字符串，需先转成int
//         return target.includes(parseInt(prop));
//     }
// });

// console.log(arr[0]);        // 7
// console.log(arr[3]);        // error
// arr.push(1);
// // arr.push(11);               // 元素必须小于10，11添加失败！
// console.log(arr);           // Proxy {0: 7, 1: 8, 2: 9, 3: 1}
// console.log(3 in arr);      // false
// console.log(7 in arr);      // false

// console.log('=========range=========');
//has
// let range = {start: 1, end: 10};
// range = new Proxy(range,{
//     has(target ,prop) {
//         console.log(prop);
//         console.log(target.start);
//         return prop >= target.start && prop <= target.end;
//     }
// });
// console.log(10 in range);   // true
// console.log(11 in range);   // false

// ownKeys 对属性名遍历进行拦截
// let user = {name:'zhangsan',_password: '123'};
// user = new Proxy(user,{
//     ownKeys(target) {
//         return Object.keys(target).filter(key=>!key.startsWith('_'));
//     }
// });

// for(let key in user) {
//     console.log(key);       // name
// }

// console.log(Object.keys(user));     // ["name"]
// console.log(Object.getOwnPropertyNames(user));  // ["name"]
// 直接打印对象会将所有属性都打印出来
// console.log(user);


