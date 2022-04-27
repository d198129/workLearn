## js有哪些循环
- for for...in for...of forEach
1. for循环和forEach的本质区别
- for循环只是一种循环机制，而forEach其实是一个迭代器，负责遍历(Array,set,map)等可迭代对象的。[Symbol.iterator]
2. for循环和forEach的语法区别
- for循环可以控住循环起点，forEach的参数(item当前遍历元素, index下标, this传入回调的this),forEach非要挑出循环可以用try, catch
3. for循环和forEach的性能区别
- 性能比较：for > forEach > map
- 原因分析 for循环没有额外的函数调用栈和上下文，所以它的实现最为简单。