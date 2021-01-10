// let user = {
//     name: 'zhangsan',
//     _password: 'abcd'
// };

// user = new Proxy(user, {
//     // 拦截获取值
//     get(target, prop) {
//         if (prop.startsWith('_')) {
//             throw new Error(`无法获取 ${prop} 属性！`);
//         } else {
//             return target[prop];
//         }
//     },
//     // 拦截设置值
//     set(target, prop, val) {
//         if (prop.startsWith('_')) {
//             throw new Error(`无法设置 ${prop} 的属性值！`);
//         } else {
//             target[prop] = val;
//             return true;
//         }
//     },
//     // 拦截删除值
//     deleteProperty(target, prop) {
//         if (prop.startsWith('_')) {
//             throw new Error(`无法删除 ${prop} 属性！`);
//         } else {
//             delete target[prop];
//             return true;
//         }
//     },
//     // 拦截遍历
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'));
//     }
// });

// console.log(user.name);     // zhangsan

// try { console.log(user._password); } catch (e) { console.log(e.message); }     // 无法获取 _password 属性！

// try { user._password = '123'; } catch (e) { console.log(e.message); }       // 无法设置 _password 的属性值！

// try { delete user._password } catch (e) { console.log(e.message); }       // 无法设置 _password 的属性值！

// for (let key in user) { console.log(key); }     // name
// console.log(Object.keys(user));                 // ['name']
// console.log(Object.getOwnPropertyNames(user));                 // ['name']

// 拦截器 apply
// let sum = (...args) => {
//     return args.reduce((prev, curr) => prev += curr, 0);
// }

// sum = new Proxy(sum, {
//     apply(target, ctx, args) {
//         return target(...args) * 2;
//     }
// });

// console.log(sum(1, 2));         // 6
// console.log(sum.call(null, 1, 2, 3));         // 12
// console.log(sum.apply(null, [1, 2, 3]));         // 12

// 拦截器 construct
// let User = class {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// User = new Proxy(User,{
//     construct(target,args,newTarget) {
//         console.log(args);      // ["zhangsan", 18]
//         return new target(...args);
//     }
// });

// let u = new User('zhangsan',18);
// console.log(u);     // User {name: "zhangsan", age: 18}