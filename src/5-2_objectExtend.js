// let user = {
//     name: 'zhangsan',
//     age: 18
// }

// 1. 克隆对象
// let obj1 = {...user};
// console.log(obj1);      // {name: "zhangsan", age: 18}
// user.age = 20;
// console.log(obj1);      // {name: "zhangsan", age: 18}
// 上述说明：{...obj} 为深拷贝

// 2. 合并对象
// let obj2 = {name:'zhansan'};
// let obj3 = {age:'zhansan'};
// let obj4 = {...obj2,...obj3};
// console.log(obj4);          // {name: "zhansan", age: "zhansan"}