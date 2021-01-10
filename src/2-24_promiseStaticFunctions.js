// ================ 1. Promise.resolve()、Promise.reject() ================
// 应用场景：
// function foo(flag) {
//     if (flag) {
//         return new Promise(resolve => {
//             resolve('success');
//         });
//     } else {
//         return Promise.reject('fail');
//     }
// }

// foo(true).then(res => console.log(res)).catch(err => console.log(err));     // success
// foo(false).then(res => console.log(res)).catch(err => console.log(err));    // fail

// ================ 2. Promise.all() 所有 Promise任务 成功才执行，当有一个失败则全部失败 ================
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1);
//         resolve('1成功！');
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(2);
//         // resolve('2成功！');
//         reject('2失败');
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(3);
//         resolve('3成功！');
//     }, 3000);
// });

// Promise.all([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err));     // ["1成功！", "2成功！", "3成功！"]
// 将 p2 的任务改为 reject('2失败');后：
// Promise.all([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err));        // 2失败

// ================ 3. Promise.race()：与Promise.all()相反，有一个成功，则算作成功，有一个失败，则算作失败 ================
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1);
//         resolve('1成功！');
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(2);
//         resolve('2成功！');
//         // reject('2失败');
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(3);
//         resolve('3成功！');
//     }, 3000);
// });
// Promise.race([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err));        // 1成功！
// 将 p2 设置为最短时间 500ms 后：
// Promise.race([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err));        // 2成功！


// Promise.all()应用场景：多张图片上传
// let imgArr = Array.of('1.jpg', '2.jpg', '3.jpg');
// let promiseArr = [];

// imgArr.forEach((img, index) => {
//     promiseArr.push(new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // 调用上传图片接口
//             // ajax();
//             resolve();
//         }, 1000);
//     }));
// });
// Promise.all(promiseArr).then(() => console.log("所有图片上传成功！")).catch(err => console.log(err));


// Promise.race()应用场景：图片加载
// function getImg() {
//     return new Promise((resolve, reject) => {
//         let img = new Image();
//         img.src = 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png';

//         img.addEventListener("load", () => resolve('图片加载成功！'));
//     });
// }

// function timeout() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject('图片加载失败！'), 2000);
//     });
// }

// Promise.race([getImg(), timeout()]).then(res => console.log(res)).catch(res => console.log(res));
