// let [a,b,c] = [1,2,3];
// console.log(a,b,c);  // 1 2 3

// let [a,b,c] = [1,2,[3,4]];
// console.log(a,b,c);     // 1 2 (2) [3, 4]

// let [a,b,c = 3] = [1,2];
// console.log(a,b,c);        // 1 2 3

let person = {
    name: 'zhangsan',
    age: 20
}

// let {name, age} = person;
// console.log(name,age);  // zhangdan 20

// 起别名
// let { name: uname, age: uage } = person;
// console.log(uname, uage);  // zhangdan 20

// 字符串解构
// let str = 'imooc';
// let [a,b,c,d,e] = str;
// console.log(a,b,c,d,e);     // i m o o c

// function foo() {
//     console.log(123);
// }
// var [a = foo()] = [];   // 会打印 123

// 函数传参解构
// function foo([a,b,c]){
//     console.log(a,b,c);
// }
// foo([1,2,3]);   // 1 2 3

// JSON字符串解构
// var jsonStr = '{"name":"lzl", "age":18}';
// var jsonObj = JSON.parse(jsonStr);
// console.log(jsonObj);




