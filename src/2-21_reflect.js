// ================ 1.Reflect 和 Object 中的方法并存 ================
// let user = { name: 'zhangsan', age: 18 };
// Object.defineProperty(user, 'age', {
//     get() {
//         console.log('get方法拦截！');
//     }
// });

// Reflect.defineProperty(user, 'age', {
//     get() {
//         console.log('get方法拦截！');
//     }
// });
// console.log(user.age);

// ================ 2.Reflect方法修改Object中的某些方法返回值，更具合理性 ================
// console.log(Reflect.defineProperty(user, 'age', {}));     // true
// Reflect.defineProperty(user, 'age', { writable: false, configurable: false });
// console.log(user);
// console.log(Reflect.defineProperty(user, 'age', { writable: true }));     // false
// user.age = 30;
// console.log(user);

// ================ 3.Reflect让Object操作变成函数行为 ================
// console.log('assign' in Object);        // true
// console.log(Reflect.has(Object, 'assign'));  // true

// ================ 4.Reflect中的方法和Proxy拦截器方法一一对应 ================

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
//             // return target[prop];
//             return Reflect.get(target, prop);
//         }
//     },
//     // 拦截设置值
//     set(target, prop, val) {
//         if (prop.startsWith('_')) {
//             throw new Error(`无法设置 ${prop} 的属性值！`);
//         } else {
//             // target[prop] = val;
//             Reflect.set(target,prop,val);
//             return true;
//         }
//     },
//     // 拦截删除值
//     deleteProperty(target, prop) {
//         if (prop.startsWith('_')) {
//             throw new Error(`无法删除 ${prop} 属性！`);
//         } else {
//             // delete target[prop];
//             Reflect.deleteProperty(target,prop);
//             return true;
//         }
//     },
//     // 拦截遍历
//     ownKeys(target) {
//         // return Object.keys(target).filter(key => !key.startsWith('_'));
//         return Reflect.ownKeys(target).filter(key => !key.startsWith('_'));
//     }
// });

// console.log(user.name);     // zhangsan

// try { console.log(user._password); } catch (e) { console.log(e.message); }     // 无法获取 _password 属性！

// try { user._password = '123'; } catch (e) { console.log(e.message); }       // 无法设置 _password 的属性值！

// try { delete user._password } catch (e) { console.log(e.message); }       // 无法设置 _password 的属性值！

// for (let key in user) { console.log(key); }     // name



// 拦截器 apply
// let sum = (...args) => {
//     return args.reduce((prev, curr) => prev += curr, 0);
// }

// sum = new Proxy(sum, {
//     apply(target, ctx, args) {
//         // return target(...args) * 2;
//         return Reflect.apply(target,ctx,args) * 2;
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
//         // return new target(...args);
//         return Reflect.construct(target,args,newTarget);
//     }
// });

// let u = new User('zhangsan',18);
// console.log(u);     // User {name: "zhangsan", age: 18}