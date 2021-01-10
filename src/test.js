function ajax(url, successCallback, failCallback) {
    // 1、创建XMLHttpRequest对象
    var xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else { // 兼容早期浏览器
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // 2、发送请求
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
    // 3、服务端响应
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj)
            successCallback && successCallback(obj)
        } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
            failCallback && failCallback(xmlhttp.statusText)
        }
    }
}


// Promise处理异步任务
// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         ajax(url, res => resolve(res), err => reject(res));
//     });
// }

// getPromise('./static/a.json')
//     .then(res => {
//         console.log(res);
//         return getPromise('./static/b.json');
//     })
//     .then(res => {
//         console.log(res);
//         return getPromise('./static/c.json');
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// Generator处理异步任务
// function request(url) {
//     ajax(url, res => getData.next(res));
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