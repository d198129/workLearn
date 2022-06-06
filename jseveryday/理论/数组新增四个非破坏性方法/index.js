// 1. toSorted()
// toSorted是sort的非破坏性版本
// const array = ['a', 'b', 'c', 'd'];
// const result = array.toReverse();
// console.log(result); // ['a', 'b', 'c', 'd']
// 相当于 
// Array.prototype.toReverse = function(compareFn) {
//     return this.slice().sort(compareFn);
// }


// 2. toReversed()
// toReversed 是 reversed的非破坏性版本
// 相当于
// Array.prototype.toReversed = function() {
//     return this.slice().reverse();
// }


// 3. toSpliced()
// toSpliced 会返回数组变更后的版本，因此我们拿不到被删除的元素；
// const array = ['a', 'b', 'c', 'd'];
// const result = array.toSpliced(1, 2, 0);
// console.log(array); // ['a', 'b', 'c', 'd']
// console.log(result); // ['A', 0, 'd']
// 相当于
// if (!Array.prototype.toSpliced) {
//     Array.prototype.toSpliced = function(start, deleteCount, ...itmes) {
//         const copy = this.slice();
//         copy.splice(start, deleteCount, ...itmes);
//         return copy;
//     }
// }


// 4. with()
// with是对数组的某个元素赋值操作的非破坏性版本
// const array = ['a', 'b', 'c', 'd'];
// const result = array.with(0, 'A');
// console.log(array); // ['a', 'b', 'c', 'd']
// console.log(result); // ['A', 'b', 'c', 'd']
// 相当于
// if (!Array.prototype.with) {
//     Array.prototype.with = function(index, value) {
//         const copy = this.slice();
//         copy[index] = value;
//         return copy;
//     }
// }