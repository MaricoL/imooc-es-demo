// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this._sex = -1;
//     }

//     get sex() {
//        if(this._sex === 0) return 'female';
//        else if(this._sex === 1) return 'male';
//        return 'error';
//     }

//     set sex(val) {
//         if (val === 0 || val === 1) {
//             this._sex = val;
//         }
//     }

//     say() {
//         console.log(this.name + ' sya...');
//     }

//     // 静态方法
//     static count() {
//         console.log('count...');
//     }

// }

// // 静态属性
// Person.go = 0;

// class Coder extends Person {
//     constructor(name, age, code) {
//         super(name, age);
//         this.code = code;
//     }

//     write() {
//         console.log(this.code);
//     }
// }

// var p = new Person('lisi', 18);
// p.sex = 1;
// console.log(p);

// Person.count();
// console.log(Person.go);

// var c1 = new Coder('zhangsan', 20, 'java');
// console.log(c1);        // Coder {name: "zhangsan", age: 20, code: "java"}
// Coder.count();
// console.log(Coder.go);