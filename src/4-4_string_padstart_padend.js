let str = 'abc';
// console.log(str.padStart(10));      //       abc
// console.log(str.padEnd(10));        //abc      
// console.log(str.padStart(10,'0'));  //0000000abc
// console.log(str.padEnd(10,'0'));    //abc0000000

// 应用案例：完整日期显示
// let date = new Date();
// let year = date.getFullYear();
// let month = (date.getMonth() + 1).toString().padStart(2, '0');
// let day = date.getDate().toString().padStart(2, '0');
// console.log(`${year}-${month}-${day}`);         // 2021-01-10




// 应用案例：隐藏手机号
// let phone = '13012345678';
// let _phone = phone.slice(-4).padStart(phone.length,'*');
// console.log(_phone);        // *******5678