// 基本写法：
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('imooc');
//         // resolve('成功！');
//         reject('失败！');
//     }, 1000);
// }).then(res => console.log(res), res => console.log(res));


// promise中的代码会立即执行，其 回调函数 resolve() reject() 具有异步性
// let p = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
// });

// console.log(2);

// p.then(() => console.log(3));
// // 上述代码执行结果为：1 2 3

// Promise 三种状态：
// let p1 = new Promise((resolve, reject) => {
//     resolve(1);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//     }, 1000);
// });

// let p3 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject(3);
//     }, 1000);
// });

// console.log(p1);    // fulfilled
// console.log(p2);    // pending
// console.log(p3);    // pending

// setTimeout(() => {
//     console.log(p2);        // fulfilled
// }, 2000);

// setTimeout(() => {
//     console.log(p3);        // refected
// }, 2000);

// p1.then(res => console.log(res));   // 1
// p2.then(res => console.log(res));   // 2
// p3.catch(res => console.log(res));  // 3

// Promise状态不可逆
// let p = new Promise((resolve, reject) => {
//     resolve(1);
//     reject(2);
// });
// p.then(res => console.log(res), err => console.log(err));   // 1

// 解决ajax回调地狱
// function ajax(url, successCallback, failCallback) {
//     // 1、创建XMLHttpRequest对象
//     var xmlhttp
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest()
//     } else { // 兼容早期浏览器
//         xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
//     }
//     // 2、发送请求
//     xmlhttp.open('GET', url, true)
//     xmlhttp.send()
//     // 3、服务端响应
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//             var obj = JSON.parse(xmlhttp.responseText)
//             // console.log(obj)
//             successCallback && successCallback(obj)
//         } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
//             failCallback && failCallback(xmlhttp.statusText)
//         }
//     }
// }

// Promise写法：
// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         ajax(url, res => resolve(res));
//     });
// }

// getPromise('static/a.json')
//     .then(res => {
//         console.log(res);
//         return getPromise('static/b.json');
//     })
//     .then(res => {
//         console.log(res);
//         return getPromise('static/c.json');
//     })
//     .then(res => console.log(res));

// 单个处理 ajax 错误：
// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         ajax(url, res => resolve(res), err => reject(err));
//     });
// }

// getPromise('static/aa.json')
//     .then(res => {
//         console.log(res);
//         return getPromise('static/b.json');
//     }, err => {
//         console.log(err);               // Not Found
//         return getPromise('static/b.json');
//     })
//     .then(res => {
//         console.log(res);           // undefined
//         return getPromise('static/c.json');
//     })
//     .then(res => console.log(res)); // {c: "我是C"}

// 全局处理 ajax 错误：只要前面 promise 出错，则直接匹配最后catch，不再执行中间的 promise
// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         ajax(url, res => resolve(res), err => reject(err));
//     });
// }

// getPromise('static/a.json')
//     .then(res => {
//         console.log(res);                   // {a: "我是A"}
//         return getPromise('static/bb.json');
//     })
//     .then(res => {
//         console.log(res);
//         return getPromise('static/c.json');
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));        // Not Found