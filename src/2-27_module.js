// 单个导出
// import {a,str,sum,obj} from './module';
// console.log(a);
// console.log(obj);

// 统一导出
// import {a,str,obj} from './module';
// console.log(obj);

// 起别名
// import {
//     a as aa,
//     str as s,
//     obj
// } from './module';
// console.log(aa);
// console.log(s);

// 默认导出：默认导出的时候，导入的名称可以自定义
// import aa from './module';
// console.log(aa);

// 既有 export 又有 export default
// import bb, { a } from './module';
// console.log(a);
// console.log(bb);

// export default 一个对象，此时import的是一个对象
// import mod from './module';
// console.log(mod);           // {a: 5, str: "str", obj: {…}, sum: ƒ}

// export default 一个对象，并且import 名称为 *号
// import * as mod from './module';
// console.log(mod);               // Module {default: {…}, __esModule: true, Symbol(Symbol.toStringTag): "Module"}