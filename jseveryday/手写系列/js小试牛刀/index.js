// 1. 原型
// function Animal() {
//     this.type = 'animal';
// }
// function Dog() {
//     this.type = 'dog';
// }
// Dog.prototype = new Animal();
// const PavlovPet = new Dog();

// console.log(PavlovPet.__proto__ === Dog.prototype);
// true
// console.log(Dog.prototype.__proto__ === Animal.prototype);
// true

// 2. 小心排序
// const arr = [5, 22, 14, 9];
// console.log(arr.sort()); // 不传如排序函数sort会将每个字符串转成字符串比较UTF-16 14 22 5 9

// 3. 异步循环
// for (let i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     };
//     setTimeout(log, 100);
// }
// 0, 1, 2

// 4. numbers里面有啥
// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++); {
//     numbers.push(i + 1);
// }
// console.log(numbers);
// 注意分号 结果[5]

// 5. 长度为0
// const clothes = ['shirt', 'socks', 'jacket', 'pants', 'hat'];
// clothes.length = 0;
// console.log(clothes[3]); // undefined

// 6. 变量定义
// var a = 1;
// function output() {
//     console.log(a);
//     var a = 2;
//     console.log(a);
// }
// console.log(a);
// output();
// console.log(a);
// 1 undefined 2 1

// 7. 找到值了吗
// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// foo();
// console.log(typeof a); // undefined
// console.log(typeof b); // number

// 8. 类型转换
// console.log(+true); // 1
// console.log(+"ConardLi"); // NAN || !"ConardLi"则为false

// 9. ESM
// module.js
// export default () => "Hello World";
// export const name = "C";
// // index.js
// import * as data from "./module"
// console.log(data); // {default: function default(), name: "C"}

// 10. 对象做key
// const a = {};
// const b = {key: "b"};
// const c = {key: "c"};
// a[b] = 123;
// console.log(a);
// a[c] = 456;
// console.log(a);
// console.log(a[b]);
// 本质上是
// a["Object object"] = 123;
// a["Object object"] = 456;
// 结果为456