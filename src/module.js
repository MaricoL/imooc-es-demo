// 单个导出
// export const a = 5;
// export const str = 'str';
// export const sum = (x, y) => x + y;
// let obj = {name:'zhangsan'};
// export {obj}

// 统一导出
// const a = 5;
// const str = 'str';
// let obj = {name:'zhangsan'};
// export {a,str,obj}

// 默认导出：只能先声明，后 export default，且 export default 只能出现一次
// const a = 5;
// export default a;

// 既有 export 又有 export default
// export const a = 10;
// const b = 5;
// export default b;

// export default 一个对象
// const a = 5;
// const str = 'str';
// const sum = (x, y) => x + y;
// let obj = { name: 'zhangsan' };
// export default {
//     a, str, sum, obj
// }