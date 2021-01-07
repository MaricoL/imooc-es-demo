// ================ Array.from() 将伪数组转换成真正的数组 ================
let divs = document.querySelectorAll("div");

// console.log(divs);  // NodeList []
// 伪数组不是数组
// console.log(divs instanceof Array);     // false


// slice()方法：将伪数组转换成真正的数组
// let arr1 = Array.prototype.slice.call(divs);
// console.log(arr1);   //  []

// Array.from()方法：将伪数组转换成真正的数组
// let arr2 = Array.from(divs);
// console.log(arr2);    // []

// [...divs]剩余参数：将伪数组转换成真正的数组
// let arr3 = [...divs];
// console.log(arr3);      // []

// ================ Array.of() 创建新数组 ================
// 指定多个参数，返回新创建的数组
// let arr4 = new Array(1,2);
// console.log(arr4);      // [1,2]

// 只指定一个参数，则该参数规定数组中的数量
// let arr5 = new Array(3);
// console.log(arr5);      // [empty × 3]

// Array.of()没有参数限制，始终返回创建的新数组
// let arr6 = Array.of(1);
// console.log(arr6);      // [1]

// Array.of() 相当于 Arrays.asList()
// let arr7 = Array.of(1,'abc',true,{name:'zhangsan'});
// console.log(arr7);      // [1, "abc", true, {…}]

// ================ copyWithin() 创建新数组 ================
let arr8 = [1, 2, 3, 4, 5];
// 从下标为 1 的元素开始，将后面的元素替换为下标为 3 的元素到最后的元素
// copyWithin会影响元素组
let arr9 = arr8.copyWithin(1, 3);
console.log(arr9);      // [1, 4, 5, 4, 5]

let arr10 = [1, 4, 5, 4, 5];
// 从下标为 1 的元素开始，将后面的元素替换为下标为 2 的元素到下标为 3 的元素（不包括下标为3的元素）
// copyWithin会影响元素组
let arr11 = arr10.copyWithin(1, 2, 3);
console.log(arr11);      // [1, 5, 5, 4, 5]





