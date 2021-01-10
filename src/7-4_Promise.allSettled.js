// ================================= Promise.all() 缺陷 =================================
// let p1 = Promise.resolve({ code: 200, data: [1, 2, 3] })
// let p2 = Promise.resolve({ code: 200, data: [4, 5, 6] })
// let p3 = Promise.resolve({ code: 200, data: [7, 8, 9] })

// let promiseArr = [p1, p2, p3];

// function foo1() {
//     Promise.all(promiseArr)
//         .then(res => {
//             console.log(res);
//             console.log('成功！');
//         })
//         .catch(err => {
//             console.log(err);
//             console.log('失败！');
//         });
// }

// foo1();

// // 缺陷：当一个失败时，所有的都算失败
// promiseArr[2] = Promise.reject({ code: 500, data: [] });
// foo1();


// ================================= 使用 Promise.allSettled() 改进 =================================
// let p1 = Promise.resolve({ code: 200, data: [1, 2, 3] })
// let p2 = Promise.resolve({ code: 200, data: [4, 5, 6] })
// let p3 = Promise.reject({ code: 200, data: [7, 8, 9] })

// let promiseArr = [p1, p2, p3];
// function foo2() {
//     Promise.allSettled(promiseArr)
//         .then(res => {
//             // 打印所有信息
//             console.log(res);
//             // 提取成功信息
//             const successData = res.filter(item => item.status === 'fulfilled').map(item => item.value);
//             console.log(successData);
//             // 提取失败信息
//             const failData = res.filter(item => item.status === 'rejected').map(item => item.reason);
//             console.log(failData);
//         });
// }
// foo2();

