// 10. 封装myChildren, 解决浏览器兼容
// function myChildren(e) {
//     const children = e.childNodes;
//     let arr = [], len = children.length;
//     for (let i = 0; i < len; i++) {
//         if (children[i].nodeType === 1) {
//             arr.push(children[i]);
//         }
//     }
//     return arr;
// }

// 11. 判断元素有没有子元素
// function hasChildren(e) {
//     const children = e.childNodes;
//     let len = children.length;
//     for (let i = 0; i < len; i++) {
//         if (children[i].nodeType === 1) {
//             return true;
//         }
//     }
//     return false;
// }

// 12. 找一个元素插入到另一个元素的后面
/**
 * @target 要插入的元素
 * @elen 被插入的元素
 */
// Element.prototype.insertAfter = function(target, elen) {
//     const nextElen = elen.nextElementSibling;
//     if (nextElen == null) {
//         this.appendChild(target);
//     } else {
//         this.insertBefore(target, nextElen);
//     }
// }

// 13. 返回当前的时间(年月日时分秒)
// function getDateTime() {
//     const date = new Date();
//     let year = date.getFullYear(),
//     mounth = date.getMonth() + 1,
//     day = date.getDate(),
//     hour = date.getHours(),
//     minute = date.getMinutes(),
//     second = date.getSeconds();
//     mounth = checkTime(mounth);
//     day = checkTime(day);
//     hour = checkTime(hour);
//     minute = checkTime(minute);
//     second = checkTime(second);
//     function checkTime(i) {
//         if (i < 10) {
//             i = `0${i}`;
//         }
//         return i;
//     }
//     console.log(year, mounth, day, hour, minute, second);
//     return `${year}年${mounth}月${day}日${hour}时${minute}分${second}秒`;
// }
// console.log(getDateTime()); // 2022年05月21日23时30分11秒

// 14. 获得滚动条的滚动距离
// function getScrollOffset() {
//     if (window.pageXOffset) {
//         return {
//             x: window.pageXOffset,
//             y: window.pageYOffset
//         }
//     } else {
//         return {
//             x: document.body.scrollLeft + document.documentElement.scrollLeft,
//             y: document.body.scrollTop + document.documentElement.scrollTop
//         }
//     }
// }

// 15. 获得视口的尺寸
// function getViewportOffset() {
//     if (window.innerWidth) {
//         return {
//             w: window.innerWidth,
//             h: window.innerHeight
//         }
//     } else {
//         // IE8以下
//         if (document.compatMode === 'BackCompat') {
//             // 怪异模式
//             return {
//                 w: document.body.clientWidth,
//                 h: document.body.clientHeight
//             }
//         } else {
//             // 标准模式
//             return {
//                 w: document.documentElement.clientWidth,
//                 h: document.documentElement.clientHeight
//             }
//         }
//     }
// }

// 16. 获取任一元素的任意属性
/**
 * @ele 元素
 * @prop 属性
 */
// function getStyle(ele, prop) {
//     return window.getComputedStyle ? window.getComputedStyle(ele, null)[prop] : ele.currentStyle[prop];
// }

// 17. 绑定事件的兼容代码
/**
 * @param ele 元素
 * @param type 事件种类
 * @param handle 回调函数
 */
// function addEvent(ele, type, handle) {
//     if (ele.addEventListener){ // 非ie和非ie9
//         ele.addEventListener(type, handle, false);
//     } else if (ele.attachEvent){ // ie6到ie8
//         ele.attachEvent(`on${type}`, function(){
//             handle.call(ele);
//         })
//     } else{
//         ele[`on${type}`] = handle;
//     }
// }

// 18. 解绑事件
// function addEvent(ele, type, handle) {
//     if (ele.removeEventListener){ // 非ie和非ie9
//         ele.removeEventListener(type, handle, false);
//     } else if (ele.detachEvent){ // ie6到ie8
//         ele.detachEvent(`on${type}`, function(){
//             handle.call(ele);
//         })
//     } else{
//         ele[`on${type}`] = null;
//     }
// }


// 19. 取消冒泡的兼容代码
// function stopBubble(e) {
//     if (e && e.stopPropagation) {
//         e.stopPropagation();
//     } else {
//         window.event.cancelBubble = true;
//     }
// };
