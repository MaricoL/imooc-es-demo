// flat()：数组扁平化
// let arr1 = [1, [2, [3, [4]]]];
// console.log(arr1.flat());               // [1, 2, Array(2)]
// console.log(arr1.flat().flat());        // [1, 2, 3, Array(1)]
// console.log(arr1.flat().flat().flat()); // [1, 2, 3, 4]

// 扁平化两层
// console.log(arr1.flat(2));                  // [1, 2, 3, Array(1)]
// 扁平化所有层
// console.log(arr1.flat(Infinity));           // [1, 2, 3, 4]


// flatMap()：相当于 arr.map(x => [x]).flat()
// let arr2 = [1, 2, 3, 4, 5];
// let arr3 = arr2.map(x => [x + 1]);      // [[2],[3],[4],[5],[6]]
// console.log(arr3.flat());               // [2, 3, 4, 5, 6]
// 上述相当于：
// console.log(arr2.flatMap(x => [x + 1]));        // [2, 3, 4, 5, 6]