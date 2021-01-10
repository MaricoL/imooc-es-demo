// function* foo1() {
//     for (let i = 0; i < 3; i++) {
//         yield i;
//     }
// }
// let f1 = foo1();

// console.log(f1);        // Generator {_invoke: ƒ}

// console.log(f1.next()); //{value: 0, done: false}
// console.log(f1.next()); //{value: 1, done: false}
// console.log(f1.next()); //{value: 2, done: false}
// console.log(f1.next()); //{value: undefined, done: true}


// function* foo2(x) {
//     let y = 2 * (yield (x + 1));
//     let z = yield(y / 3);
//     return x + y + z;
// }

// let f2 = foo2(5);

// console.log(f2.next());     //{value: 6, done: false}
// console.log(f2.next(6));    //{value: 4, done: false}
// console.log(f2.next(4));    //{value: 21, done: true}

// 案例1：逐步返回 7 的倍数
// function* foo3(x = 1) {
//     while(true) {
//         if(x % 7 === 0) {
//             yield x;
//         }
//         x++;
//     }
// }
// let f3 = foo3();
// console.log(f3.next().value);   // 7
// console.log(f3.next().value);   // 14
// console.log(f3.next().value);   // 21

// 案例2：控制异步任务的状态
// function ajax(url, callback) {
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
//             callback(obj)
//         }
//     }
// }

// function request(url) {
//     ajax(url,res => {
//         getData.next(res);
//     });
// }

// function* gen() {
//     let res1 = yield request('./static/a.json');
//     console.log(res1);
//     let res2 = yield request('./static/b.json');
//     console.log(res2);
//     let res3 = yield request('./static/c.json');
//     console.log(res3);
// }

// let getData = gen();
// getData.next();
// {a: "我是A"}
// {b: "我是B"}
// {c: "我是C"}
