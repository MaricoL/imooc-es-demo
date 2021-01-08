// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.show = function(){
//     console.log('名字是：' + this.name);
// }

// function Dog(name,color){
//     // 继承属性
//     Animal.call(this,name);
//     this.color = color;
// }

// console.log(Dog.prototype);

// console.log(new Animal());
// // 继承方法
// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;

// console.log(Dog.prototype);

// let dog = new Dog('zhangsan','red');
// console.log(dog);       // Dog {name: "zhangsan", color: "red"}


// dog.show();     // 名字是：zhangsan