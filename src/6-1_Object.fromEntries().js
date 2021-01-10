// let obj = {
//     name: 'zhangsan',
//     age: 20,
//     sex: 'male'
// }

// // 对象 -> Entries
// let entries = Object.entries(obj);
// console.log(entries);           // [["name", "zhangsan"], ["age", 20], ["sex", "male"]]

// // Entries -> 对象
// let _obj = Object.fromEntries(entries);
// console.log(_obj);              // {name: "zhangsan", age: 20, sex: "male"}


// let arr1 = ['a', 'b'];
// let arr2 = ['c', 'd'];
// console.log(Object.fromEntries([arr1, arr2]));      // {a: "b", c: "d"}

// Map
// let map = new Map();
// map.set('name', 'zhangsan');
// map.set('age', 18);
// console.log(map);           // Map(2) {"name" => "zhangsan", "age" => 18}
// Map -> 对象
// let entries = Object.fromEntries(map);
// console.log(entries);      // // {name: "zhangsan", age: 18}

// 案例：过滤成绩大于80的科目
// const course = {
//     math: 80,
//     english: 85,
//     chinese: 90
// }

// let result = Object.fromEntries(Object.entries(course).filter(([key, value]) => value > 80));
// console.log(result);        // {english: 85, chinese: 90}
