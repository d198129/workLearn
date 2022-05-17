// 1. 输入一个值，返回其数据类型
// function type(param) {
//     return Object.prototype.toString.call(param).split(" ")[1].replace(']', '');
// };

// 2. 数组去重
// const unique1 = (arr) => [...new Set(arr)];
// const unique2 = (arr) => {
//     let obj = {};
//     return arr.filter(ele => {
//         if(!obj[ele]) {
//             obj[ele] = true;
//             return true;
//         }
//         return false;
//     })
// };
// const unique3 = (arr) => {
//     let result = [];
//     arr.forEach(ele => {
//         // result.indexOf(ele) !== -1;
//         if (result.includes(ele)) {
//             result.push(ele);
//         }
//     });
//     return result;
// };

// 3. 字符串去重
// String.prototype.unique = function() {
//     let obj = {};
//     let str = '';
//     len = this.length;
//     for (let i = 0; i < len; i++) {
//         if (!obj[this[i]]) {
//             str += this[i];
//             obj[this[i]] = true;
//         }
//     }
//     return str;
// }
// 去除连续的字符串
// function uniq(str) {
//     return str.replace(/(\w)\1+/g, '$1');
// }
// function uniq1(str) {
//     return str.replace(/(\w)\1+/g, (a, b, c, d) => {
//         console.log(a, b, c, d);
//     });
// }
// // uniq1('aa111abcdddeff');
// console.log(uniq('aa111abcdddeff'));

// 4. 深拷贝 不考虑函数
// function deepClone1(obj, result) {
//     let result = result || {};
//     for (let prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//             if (typeof obj[prop] == 'object' && obj[prop] !== null) {
//                 // 是引用类型且不为null
//                 if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
//                     // 对象
//                     result[prop] = {};
//                 } else {
//                     result[prop] = [];
//                 }
//                 deepClone1(obj[prop], result[prop]);
//             } else {
//                 // 原始值或者function
//                 result[prop] = obj[prop];
//             }
//         }
//     }
//     return result;
// }
// function deepClone2(target) {
//     if (typeof target !== 'object') {
//         return target;
//     }
//     let result;
//     if (Object.prototype.toString.call(target) == '[object Array]') {
//         // 数组
//         result = [];
//     } else {
//         result = {};
//     }
//     for (let prop in target) {
//         if (target.hasOwnProperty(prop)) {
//             result[prop] = deepClone2(target[prop]);
//         }
//     }
//     return result;
// }
// 无法复制函数
// let newobj = JSON.parse(JSON.stringify(obj));

// 5.reverse底层原理和扩展
// Array.prototype.myReverse = function() {
//     let len = this.length;
//     for (let i = 0; i < Math.floor(len / 2); i++) { // 6 => 3 5 => 2.5
//         let temp = this[i];
//         this[i] = this[len - 1];
//         this[len - 1] = temp;
//     }
//     return this;
// }

// 6. 圣杯模式的继承
// function inherit(Target, Origin) {
//     function F() {};
//     F.prototype = Origin.prototype;
//     Target.prototype = new F();
//     Target.prototype.consructor() = Target;
//     // 最终的原型指向
//     Target.prop.uber = Origin.prototype;
// }

// 7. 找出字符串中第一次只出现一次的字母
// String.prototype.firstAppear = function() {
//     let obj = {};
//     const len = this.length;
//     for (let i = 0; i < len; i++) {
//         if (obj[this[i]]) {
//             obj[this[i]]++;
//         } else {
//             obj[this[i]] = 1;
//         }
//     }
//     for (let prop in obj) {
//         if (obj[prop] == 1) {
//             return prop;
//         }
//     }
//     return false
// }

// 8. 找元素的第n级父元素
// function parent(ele, n) {
//     while (ele && n) {
//         ele = ele.parentElement ? ele.parentElement : ele.parentNode;
//     }
//     return ele;
// }

// 9. 返回元素的第n个兄弟节点
// function retSibling(e, n) {
//     while (e && n) {
//         if (n > 0) {
//             if (e.nextElementSibling) {
//                 e = nextElementSibling;
//             } else {
//                 for (e = e.nextSibling; e && e.nodeType !== 1; e.nextSibling);
//             }
//             n--;
//         } else {
//             if (e.previousElementSibling) {
//                 e = e.previousElementSibling
//             } else {
//                 for (e = e.nextSibling; e && e.nodeType !== 1; e.nextSibling);
//             }
//             n++
//         }
//     }
//     return e;
// }