// let obj = {name:'zhangsan'};
// let m1 = new Map();
// m1.set(obj,'es');
// console.log(m1);                // Map(1) {{…} => "es"}
// console.log(m1.has(obj));       // true

let m2 = new Map([
    ['name', 'zhangsan'],
    ['age', 20]
]);
// console.log(m2);                // Map(2) {"name" => "zhangsan", "age" => 20}

// forEach() 第一个参数为value，第二个参数为key
// m2.forEach((value,key) => console.log(value,key));

// for(let [key,value] of m2) {
//     console.log(key,value);
// }

// for(let item of m2.keys()) {
//     console.log(item);
// }

// for(let item of m2.values()) {
//     console.log(item);
// }

// for (let [key, value] of m2.entries()) {
//     console.log(key, value);
// }

// weakmap