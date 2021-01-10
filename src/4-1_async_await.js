// async
// async function foo() {
//     return 'imooc';
// }
// console.log(foo());         // Promise {<fulfilled>: "imooc"}

// async await
// async function foo() {
//     let result = await 'imooc';
//     console.log(result);
// }
// foo();      // imooc

// async await 与 Promise 结合
// function timeout() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(1);
//             reject(2);
//         }, 2000);
//     });
// }

// // await 返回 Promise
// async function foo() {
//     return await timeout();
// }

// foo().then(res => console.log(res)).catch(err => console.log(err));



// 使用 async await 处理异步任务
// import ajax from './ajax';

// function request(url) {
//     return new Promise((resolve, reject) => {
//         ajax(url, res => resolve(res));
//     });
// }

// async function getData() {
//     const res1 = await request('./static/a.json');
//     console.log(res1);
//     const res2 = await request('./static/b.json');
//     console.log(res2);
//     const res3 = await request('./static/c.json');
//     console.log(res3);
// }

// getData();