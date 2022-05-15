// 1. 打乱数组顺序
// let arr = ['haha', 67, true, false, '55'];
// arr = arr.sort(() => 0.5 - Math.random());
// console.log(arr);

// 2. 去除数字之外的所有字符
// const str = 'xieyeze 23213 is 95993 so hansome 23333';
// const nums = str.replace(/\D/g, '');
// console.log(nums);

// 3. 反转字符串或者单词
// const sentence = 'deng is king';
// function reverseBySeparator(str, separator) {
//     return str.split(separator).reverse().join(separator);
// }
// console.log(reverseBySeparator(sentence, " "));

// 4. 将十进制转换为二进制或者十六进制
// const num = 43;
// const binaryNum = num.toString(2);
// const hexadecimalNum = num.toString(16);
// console.log(binaryNum, hexadecimalNum);

// 5. 合并多个对象
// const names = {
//     name: 'beijing'
// };
// const sex = {
//     age: 18
// }
// const person = {...names, ...sex};
// console.log(person);

// 6. === 和 ==的区别
// == -> 类型转换(浅比较)
// === -> 无类型转换(严格比较)

// 7. 解构赋值
// const person = {name: 'deng',sex: '男', age: 18}
// let {name, age} = person;
// console.log(name, age);

// 8. 交换变量的值
// let a = 1; let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// 9. 判断回文字符串
// let isRevervse = (str1, str2) => {
//     return str1.split('').reverse().join('') === str2;
// }

// // 10. 可选链操作符
// const person = {name: 'deng', rating: 1000};
// console.log(person?.name, person?.age);

// 11. 三目运算符
// let value = 'Boolean' ? '真' : '假';

// 12. 从数组中随机选择一个值
// const arr = [1, 2, 3, 4, 5, 6];
// const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
// let randomNum = random(arr);
// console.log(randomNum);

// 13. 冻结对象
// const person = {name: 'deng', age: 18, sex: '男'};
// Object.freeze(person);
// person.name = 10; // Error, 不会改变
// console.log(person);

// 14. 删除数组重复元素
// let newarr = [...new Set(arr)];

// 15. 保留指定位小数
// const num = 0.123456789;
// const fixed2 = num.toFixed(2);
// const fixed3 = num.toFixed(3);
// console.log(fixed2, fixed3);

// 16. 清空数组
// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.length = 0;
// console.log(numbers);

// 17. 从RGB转换为HEX
// const rgbToHex = (r, g, b) => {
//     const toHex = num => {
//         const hex = num.toString(16);
//         return hex.length > 1 ? hex : `0${hex}`;
//     }
//     return `#${toHex(r)}${toHex(g)}${toHex(b)}`
// }
// console.log(rgbToHex(255, 255, 255));

// 18. 从数组中获取最大值和最小值
// const nums = [1, 2, 3, 4, 5, -3, 99, -2, 4];
// const max = Math.max(...nums);
// const min = Math.min(...nums);
// console.log(max, min);

// 19. 空置合并运算符 只能拦截null和undefined
// let nullval = null;
// let emptystring = ''
// let someNum = 13;
// let a = nullval ?? 'A defalt';
// let b = emptystring ?? 'B defalt';
// let c = someNum ?? 'C defalt';
// console.log('a', a, 'b', b, 'c', c); // 'A defalt' '' 13

// 20. 过滤数组中值为false的值
// return [1, 0, undefined, null, false].filter(Boolean); // [1]