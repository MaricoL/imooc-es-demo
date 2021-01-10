// 如果 catch(e) 中不需要 e 的相关信息，则可以不写catch参数，直接返回自定义内容
// let validJson = json => {
//     try {
//         JSON.parse(json);
//         return true;
//     } catch {
//         return false;
//     }
// }
// let str = '{name":"zhangsan"}';
// console.log(validJson(str));