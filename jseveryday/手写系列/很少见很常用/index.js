// 1. 返回按钮
// 使用history.back()可以创建一个浏览器"返回按钮"

// 2. 数字分隔符 node环境不生效
// const largeNumber = 1_000_000;
// console.log(largeNumber);

// 3. 事件监听只运行一次
// document.addEventListener('click', () => {
//     console.log(123);
// }, {
//     once: true, // 只执行一次
//     capture: false, // 事件冒泡还是捕获，默认false冒泡
//     passive: true // 默认为true, 表示listen永远不会调用'preventDefault', listener不听仍要调用的话会抛出警告
// });

// 4. console.log变量包装
// 在console.log打印的时候，将参数用大括号括起来这样可以同属看到变量名和变量值

// 5. 从数组中获取最大值/最小值
// const numbers = [6, 8, 2, 4, 9];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// 6 检查Caps Lock是否打开(大小写)
// const passwordInput = document.getElementById('input');
// passwordInput.addEventListener('keyup', (event) => {
//     if (event.getModifierState('CapsLock')) {
//         console.log('CapsLock已打开');
//     }
// });

// 7. 复制到粘贴板
// function copyToClipboard(text) {
//     navigator.clipboard.writeText(text);
// }

// 8. 获取鼠标位置
// document.addEventListener('mousemove', (e) => {
//     console.log(`Mouse X:${e.clientX},MouseY:${e.clientY}`);
// });

// 9、 缩短数组，可以设置length属性来缩短数组。
// const numbers = [1, 2, 3, 4, 5]; numbers.length = 3; // [1, 2, 3];

// 10. 简写条件判断语句
// true && doSomething();

// 11. console.log() 打印特定格式的表格
// console.table(data , [columns]) // data表示要显示的数据。必须是数组或对象 columns 表示一个包含列的名称的数组
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// };
// const deng1 = new Person('deng', 1);
// const deng2 = new Person('deng', 2);
// const deng3 = new Person('deng', 3);
// console.table([deng1, deng2, deng3], ["firstName"]);

// 12. 数组去重 [...new Set(numbers)]

// 13. 字符串转数字 console.log(+str);

// 14. 将数字转字符串 console.log(number + '');

// 15. 从数组中过滤所有虚值
// const myArray = [1, undefined, NaN, 2, null, true, 3, false, '@deni'];
// console.log(myArray.filter(Boolean));

// 16. 妙用includes
// const myTech = 'javaScript';
// const techs = ['HTML', 'CSS', 'javaScript']
// 普通写法 if(myTech === 'HTML' || myTech === 'CSS' || myTech === 'javaScript') {doSomething()}
// includes写法 if(techs.includes(myTech)) doSomething();

// 17. 妙用reduce对数组求和
// const myArray = [10, 20, 30, 40];
// const reducer = (total, currentValue) => total + currentValue;
// console.log(myArray.reduce(reducer));

// 18. 控制console.log()样式
// console.log(`%c ${a}`, 'color: green;font-size:1.5em;');

// 19. 元素的dataset属性
// console.log(dom.dataset.name);