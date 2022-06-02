// 20. 检验字符串是否是回文
// function isPalina(str) {
//     if (Object.prototype.toString.call(str) !== '[object String]') {
//         return false;
//     }
//     let len = str.length;
//     for(let i = 0; i < len / 2; i++) {
//         if (str[i] !==  str[len - 1- i]) {
//             return false;
//         }
//     }
//     return true;
// }

// 21. 检验字符串是否是回文
// function isPalindrome(str) {
//     str = str.replace(/\w/g, '').toLowerCase();
//     console.log(str);
//     return (str === str.split('').reverse().join(''));
// }

// 22. 兼容getElementsByClassName方法
// Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function(_className) {
//     let allDomArray = document.getElementsByTagName('*');
//     let lastDomeArray = [];
//     function trimSpace(strClass) {
//         let reg = /\s+/g;
//         return strClass.replace(reg, '').trim();
//     }
//     for (let i = 0; i < allDomArray.length; i++) {
//         let classArray = trimSpace(allDomArray[i].className).split(' ');
//         for (let j = 0; j < classArray.length; j++) {
//             if (classArray[j] == _className) {
//                 lastDomeArray.push((allDomArray[i]));
//                 break;
//             }
//         }
//     }
//     return lastDomeArray;
// }

// 23. 运动函数
// function animation(ele, json, callback) {
//     ele.timer && clearTimeout(ele.timer);
//     let speed, current;
//     ele.timer = setInterval(function(){
//         let lock = true;
//         for (let prop in json) {
//             if (prop == 'opacity') {
//                 current = parseFloat(window.getComputedStyle(ele, null)[prop]) * 100;
//             } else {
//                 current = parseInt(window.getComputedStyle(ele, null)[prop]);
//             }
//             speed = (json[prop] - current) / 7;
//             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//             if (prop == 'opacity') {
//                 ele.style[prop] = (current + speed) / 100;
//             } else {
//                 ele.style[prop] = current + speed + 'px';
//             }
//             if (current !== json[prop]) {
//                 lock = false;
//             }
//         }
//         if (lock) {
//             clearInterval(ele.timer);
//             typeof callback == 'function' ? callback() : '';
//         }
//     }), 30;
// }


// 24. 弹性运动
// function ElasticMovement(ele, target) {
//     console.log(ele, target);
//     let iSpeed = 40, a, u = 0.8;
//     ele.timer = setInterval(function(){
//         console.log(ele.offsetLeft);
//         a = (target - ele.offsetLeft) / 8;
//         iSpeed = iSpeed + a;
//         iSpeed = iSpeed * u;
//         console.log('iSpeed', iSpeed);
//         if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
//             console.log('over');
//             clearInterval(ele.timer);
//             ele.style.left = target + 'px'
//         } else {
//             ele.style.left = ele.offsetLeft + iSpeed + 'px';
//         }
//     }, 30);
// }

// 25. 封装自己的forEach方法
// Array.prototype.myForEach = function(func, obj) {
//     const len = this.length;
//     let _this = arguments[1] ? arguments[1] : window;
//     // let _this = arguments[1] || window;
//     for (let i = 0; i < len; i++) {
//         func.call(_this, this[i], i, this);
//     }
// }


// 26. 封装自己的filler方法
// Array.prototype.myFilter = function(func, obj) {
//     const len = this.length;
//     let arr = [];
//     let _this = obj || window;
//     // let _this = arguments[1] || window; // 上同, 不行第二个形参的时候用arguments[1]
//     for (let i = 0; i < len; i++) {
//         func.call(_this, this[i], i, this) && arr.push(this[i]);
//     }
//     return arr;
// }

// 27. 数组map方法
// Array.prototype.myMap = function(func) {
//     const len = this.length;
//     let arr = [];
//     let _this = obj || window;
//     // let _this = arguments[1] || window;
//     for (let i = 0; i < len; i++) {
//         arr.push(func.call(_this, this[i], i, this));
//     }
//     return arr;
// }

// 28. 数组every方法
// Array.prototype.myEvery = function(func) {
//     const len = this.length;
//     let flag = true;
//     let _this = arguments[1] || window;
//     for (let i = 0; i < len; i++) {
//         if (func.applay(_this, [this[i], i, this]) == false) {
//             flag = false;
//             break;
//         }
//     }
//     return flag;
// }


// 29. 数组reduce方法
// Array.prototype.myReduce = function(func, initialValue) {
//     const len = this.length;
//     let nextValue, i = 0;
//     if (!initialValue) {
//         // 没传第二个参数
//         nextValue = this[i];
//         i++;
//     }   else {
//         // 传了第二个参数
//         nextValue = initialValue;
//     }
//     for (; i < len; i++) {
//         nextValue = func(nextValue, this[i], i, this);
//     }
//     return nextValue;
// }
// let arr = new Array(1, 2, 3, 4, 5)
// console.log(arr);
// console.log(arr.myReduce(function(current, nextValue, index){
//     console.log(current, nextValue, index);
//     return current + nextValue;
// }, 1));
