// 迭代器
// [Symbol.iterator]
let arr = [1, 2, 3, 4] // 可迭代对象
// let iterator = arr[Symbol.iterator](); // 调用Symbol.ierator后生成了迭代器对象。
// console.log('iterator', iterator.next());
// console.log('iterator', iterator.next());
// console.log('iterator', iterator.next());
// console.log('iterator', iterator.next());
// console.log('iterator', iterator.next());

// function num(num) {
//     arguments[0] = 12;
//     console.log(num);
// }
// num(1);

// 形参有默认值argument则不会跟踪参数的值
// function num(num, arr) {
//     arguments[0] = 12;
//     console.log(num, arguments);
// }
// num(1);

// forEach跳出循环
try {
    arr.forEach((item, index) => {
        if (item === 3) {
            throw new Error('loopTermisnates');
        }
        console.log(item);
    });
} catch (error) {
    if (error.message !== 'loopTermisnates') throw error;
}