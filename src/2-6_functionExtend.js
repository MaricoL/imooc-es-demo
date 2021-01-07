// ================ 1. 函数默认参数 ================
// function foo1(x,y='world'){
//     console.log(x,y);
// }
// foo1('hello');      // hello world

// ================ 2. 函数默认参数 与 解构赋值 结合 ================
// function foo2({ x = 2, y = 5 } = {}) {
//     console.log(x, y);
// }
// foo2({ x: 1, y: 2 });    // 1 2

// function ajax(url, {
//     method = 'GET',
//     head = {},
//     body = 'body',
// } = {}) {
//     console.log(method, head, body);
// }

// ajax('https://abc.com', { method: 'POST' });     // POST {} body

// ================ 3. 函数名.length ================
// 函数名.length 返回函数参数没有指定默认值的个数
// function foo3(x, y, z = 3) {
// }
// console.log(foo3.length);   // 2

// ================ 4. 函数参数作用域 ================
// 函数参数里表 (x, y = x) 会形成单独的作用域
// let x = 1;
// function foo4(x, y = x) {
//     console.log(y);
// }
// foo4(2);    // 2

// 函数参数里表 (y = x) 会形成单独的作用域，如果在当前作用域没有找到 x 的值，则会根据作用域链向上寻找 x 的值
// let x = 1;
// function foo5(y = x) {
//     let x = 2;
//     console.log(y);
// }
// foo5();    // 1

// 函数参数里表 (y = x) 会形成单独的作用域，如果在当前作用域没有找到 x 的值，则会根据作用域链向上寻找 x 的值，如果找不到则报错
// function foo6(y = x) {
//     let x = 2;
//     console.log(y);
// }
// foo6();    // ReferenceError: x is not defined

// ================ 5. 函数名.name ================
// function foo7(){}
// console.log(foo7.name);     // foo7

// var foo8 = new Function();
// console.log(foo8.name);     // anonymous

// var foo10 = function foo9(){}.bind({});
// console.log(foo10.name);     // bound foo9

// var foo11 = function(){}.bind({});
// console.log(foo11.name);    // bound




