// 40. 节流
// function throttle (handle, wait) {
//     const lastTime = 0;
//     return function () {
//         let nowTime = new Date().getTime();
//         if (nowTime - lastTime > wait) {
//             handle.apply(this, arguments);
//             lastTime = nowTime;
//         }
//     }
// }

// 41. requestAnimFrame兼容性方法
// window.requestAnimFrame = (function () {
//     return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame || function (callback) {
//             window.setTimeout(callback, 1000 / 60);
//         }
// })();

// 42. cancelAnimFrame兼容性方法
// window.cancelAnimFrame = (function () {
//     return window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
//         window.mozCancelAnimationFrame || function (id) {
//             window.clearTimeout(id);
//         }
// })();

// 43. jsonp底层方法
// function jsonp(url, callback) {
//     const oscript = document.createElement('script');
//     if (oscript.readyState) { // IE8及以下
//         oscript.onreadystatechange = function () {
//             if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
//                 callback();
//             }
//         }
//     } else {
//         oscript.onload = function() {
//             callback();
//         }
//     }
//     oscript.src = url;
//     document.body.appendChild(oscript);
// }

// 44. 获取url上的参数
// function geuUrlParam(sUrl, skey) {
//     let result = {};
//     sUrl.replace(/(\w+)=(\w+)(?[&|#])/g, function(ele, key, val){
//         if (!result[key]) {
//             result[key] = val;
//         } else {
//             let temp = result[key];
//             result[key] = [].concat(temp, val);
//         }
//     });
//     if (!skey) {
//         return result;
//     } else {
//         return result[skey] || '';
//     }
// }

// 45. 格式化时间
// function formatDate(t, str) {
//     let obj = {
//         YYYY: t.getFullYear(),
//         YY: `${t.getFullYear()}`.slice(-2),
//         M: t.getMonth() + 1,
//         MM: `0${t.getMonth() + 1}`.slice(-2),
//         D: t.getDate(),
//         DD: `0${t.getDate()}`.slice(-2),
//         H: t.getHours(),
//         HH: `0${t.getHours()}`.slice(-2),
//         h: t.getHours() % 12,
//         hh: `0${t.getHours() % 12}`.slice(-2),
//         m: t.getMinutes(),
//         mm: `0${t.getMinutes()}`.slice(-2),
//         s: t.getSeconds(),
//         ss: `0${t.getSeconds()}`.slice(-2),
//         w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
//     }
//     return str.replace(/([a-zA-Z]+)/g, function($1) {
//         return obj[$1];
//     })
// }

// 46. 验证邮箱的正则表达式
// function isAvailableEmain(sEmail) {
//     let reg = /^([\w+\.])+@\w+([.]\w+)+$/;
//     return reg.test(sEmail);
// }

// 47. 函数柯里化
// 把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，别且返回接受余下的参数且返回结果的新函数的技术
// function curryIn(fn) {
//     let length = fn.length;
//     let args = [];
//     let result = function(arg) {
//         args.push(arg);
//         length--;
//         if (length <= 0) {
//             return fn.apply(this, args);
//         } else {
//             return result;
//         }
//     }
//     return result;
// }

// 48. 大数相加
// function add(num1, num2) {
//     let carry = 0,
//         res = '';
//     for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
//         let a = num1.charAt(i) || 0;
//         let b = num2.charAt(j) || 0;
//         let sum = Number(a) + Number(b) + carry;
//         sum >= 10 ? carry = 1 : carry = 0;
//         res = (sum % 10) + res
//     }
//     if (carry === 1) {
//         res = 1 + res;
//     }
//     return res;
// }
// console.log(add('99', '9'));

// function sumBigNumber(a, b) {
//     let res = ''; // 结果
//     let temp = 0; // 按位加的结果
//     a = a.split('');
//     b = b.split('');
//     while (a.length || b.length || temp) {
//         // 对任一数值 x 进行按位非操作的结果为 -(x + 1)。例如，~5 结果为 -6。 如 ~3 = -(3+1) = -4
//         // ~~按位非 1.类型转换, 转换成数字 2.undefined==0 -(-(x+1) + 1) = x
//         temp += ~~a.pop() + ~~b.pop();
//         console.log(temp);
//         res = (temp % 10) + res;
//         temp = temp > 9;
//     }
//     return res.replace(/^0+/, '');
// }

// 49. 单例模式
// function getSingle(func) {
//     let result;
//     return function() {
//         if (!result) {
//             result = new func(arguments);
//         }
//         return result
//     }
// }

// myNew实现
// function myNew() {
//     let obj = {};
//     //去到外面的构造器
//     // arguments
//     console.log(arguments);
//     let Constructor = Array.prototype.shift.call(arguments);
//     console.log(Constructor);
//     obj.__proto__ = Constructor.prototype;
//     let result = Constructor.apply(obj, arguments)
//     return typeof result === 'object' ? result : obj;
// }
// let person = myNew(Person, '小敏');