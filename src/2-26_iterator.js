// 可迭代协议：Symbol.iterator
// 迭代器协议：return { next() { return { value , done} } } 
// let courses = {
//     allCourse: {
//         frontend: ['ES', '小程序', 'Vue', 'React'],
//         backend: ['Java', 'Python', 'SpringBoot'],
//         webapp: ['Android', 'IOS']
//     }
// }

// 编写 迭代器协议 实现 iterator
// courses[Symbol.iterator] = function () {
//     let allCourse = this.allCourse;
//     let values = [];
//     let keys = Reflect.ownKeys(allCourse);

//     return {
//         next() {
//             if (!values.length) {
//                 if (keys.length) {
//                     values = allCourse[keys[0]];
//                     keys.shift();
//                 }
//             }
//             return {
//                 done: !values.length,
//                 value: values.shift()
//             }
//         }
//     }
// }

// 结合 generator 实现 iterator
// courses[Symbol.iterator] = function* () {
//     let allCourse = this.allCourse;
//     let keys = Reflect.ownKeys(allCourse);
//     let values = [];
//     while (1) {
//         if (!values.length) {
//             if (keys.length) {
//                 values = allCourse[keys[0]];
//                 keys.shift();
//                 yield values.shift();
//             } else {
//                 return false;
//             }
//         } else {
//             yield values.shift();
//         }
//     }
// }

// for (let key of courses) {
//     console.log(key);
// }







// for(let key in courses.allCourse) {
//     for(let key of courses.allCourse[key]){
//         console.log(key);
//     }
// }
