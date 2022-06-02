// 30. 获取url中的参数
// function getWindowHref() {
//     const sHref = window.location.href;
//     const args = sHref.split('?');
//     if (args[0] === '') {
//         return '';
//     }
//     let hrefArr = args[1].split('&');
//     let hrefArr = args[1].split('#')[0].split('&'); // ??
//     let obj = {};
//     for (let i = 0; i < hrefArr.length; i++) {
//         let curentParam = hrefArr[i].split('='); 
//         obj[curentParam[0]] = curentParam[1]
//     }
//     return obj;
// }

// 31. 数组排序
// 快排
// function sort1(arr) { // 1, 3, 9, 6, 4, 2, 4, 3
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let left = [];
//     let right = [];
//     let middleIndex = Math.floor(arr.length / 2);
//     let p = arr.splice(middleIndex, 1)[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < p) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     // 递归
//     return sort1(left).concat([p], sort1(right));
// }

// 冒泡
// function sort2(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len -1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// } 

// 32. 遍历dom树
// 给定页面上的dom树，将访问元素本身及其所有后代(不仅仅是它的直接子元素)
// 对于每个被访问的元素，函数将传递给提供的回调函数
// function traverse(element, callback) {
//     callback(element);
//     let list = element.children;
//     for (let i = 0; i < list.length; i++) {
//         traverse(list[i], callback);
//     }
// }

// 33. 原生js封装ajax
// function ajax(method, url, callback, data, flag) {
//     let xhr;
//     flag = flag || true;
//     method = method.toUpperCase();
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else {
//         xhr = new ActiveXObject('Microsoft.XMLHttp');
//     }
//     xhr.onreadystatechange = function () {
//         if(xhr.readyState == 4 && xhr.status == 200) {
//             console.log(2);
//             callback(xhr.responseText);
//         }
//     }

//     if (method == 'GET') {
//         let date = new Date();
//         let timer = date.getTime();
//         xhr.open('GEt', url + '?' + data + '&timer' + timer, flag);
//         xhr.send();
//     } else if (method == 'POST') {
//         xhr.open('POST', url, flag);
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         xhr.send(data);
//     }
// }


// 34. 异步加载script
// function loadScript(url, callback) {
//     const oscript = document.createElement('script');
//     if (oscript.readyState) { // IE8及以下
//         oscript.onreadystatechange = function () {
//             if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
//                 callback();
//             }
//         }
//     } else {
//         oscript.onload = function () {
//             callback();
//         }
//     }
//     oscript.src = url;
//     document.body.appendChild(oscript);
// }

// 35. cookie管理
// const cookie = {
//     set: function (name, value, time) {
//         document.cookie = name + '=' + value + '; max-age=' + time;
//         return this;
//     },
//     remove: function (name) {
//         return this.set(name, '' , -1);
//     },
//     get: function (name, ) {
//         const allCookieArr = document.cookie.split('; ');
//         for (let i = 0; i < allCookieArr.length; i++) {
//             let itemCookieArr = allCookieArr[i].split('=');
//             if (itemCookieArr[0] === name) {
//                 return itemCookieArr[1];
//             }
//         }
//         return undefined;
//     }
// }

// 36. 实现bind方法
// Function.prototype.myBind = function (target) {
//     let target = target || window;
//     const _args1 = [].slice.call(arguments, 1);
//     const _self = this;
//     const temp = function() {};
//     const F = function() {
//         const _args2 = [].slice.call(arguments, 0);
//         const parasArr = _args1.concat(_args2);
//         return _self.apply(this instanceof temp ? this : target, parasArr);
//     }
//     temp.prototype = _self.prototype;
//     F.prototype = new temp();
//     return F;
// }

// 37. 实现call方法
// Function.prototype.myCall = function () {
//     const ctx = arguments[0] || window;
//     ctx.fn = this;
//     let args = [];
//     for (let i = 1; i < arguments.length; i++) {
//         args.push(arguments[i]);
//     }
//     const result = ctx.fn(...args);
//     delete ctx.fn;
//     return result;
// }

// 38. 实现apply方法
// Function.prototype.myApply = function () {
//     const ctx = arguments[0] || window;
//     ctx.fn = this;
//     if (!arguments[1]) {
//         const result = ctx.fn();
//         delete ctx.fn;
//         return result;
//     }
//     let result = ctx.fn(...arguments[1]);
//     delete ctx.fn;
//     return result;
// }

// 39. 防抖
// function debounce(handle, delay) {
//     let timer = null;
//     return function () {
//         const _self = this;
//         const args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             handle.applay(_self, args);
//         })
//     }
// }

