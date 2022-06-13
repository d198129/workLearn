// 如果Promise 对象中封装了任务，然后在调用实例对象上的 then 方法的时候，这里会涉及到一个状态改变的时机问题，
// 如果封装的是同步任务，则先改变状态，在执行 then 方法中的回调函数
// 如果封装的是异步任务，则先执行 then 方法中的回调，然后把then 中的onResolved 和 onRejected 存起来 等异步任务执行完成以后在 修改 状态，再执行之前存储的 onResolved 或者 onRejected
// 这里直接声明一个 Promise 类可以覆盖掉 原生 Promise
class Promise {
    constructor (executor) {
        // 添加初始属性
        this._promiseState = 'pending'
        this._promiseResult = null

        // 声明一个栈，用来存放then方法中的回调，onResolved, onRejected，之所以用栈，是因为
        // 同一个实例 可以同时制定多个 then 方法，也就会有多个回调
        this.callbacks = [];

        // 保存实例对象 this
        const self = this;

        // resolve 函数
        function resolve (data) {
            // 修改状态前，先判断
            if (self._promiseState !== 'pending') return;
            // 1.修改对象状态 (promiseSate)
            self._promiseState = 'fulfilled' // resolved
            // 2.设置对象结果值 (_promiseResult)
            self._promiseResult = data;
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onResolved(data);
                })
            })
        }

        // reject 函数
        function reject (data) {
            // 修改状态前，先判断
            if (self._promiseState !== 'pending') return;
            // 1.修改对象状态 (promiseSate)
            self._promiseState = 'rejected' // resolved
            // 2.设置对象结果值 (_promiseResult)
            self._promiseResult = data;
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onRejected(data);
                })
            })
        }

        // 执行器函数
        // 这里使用 try catch 是为了捕获执行器执行的时候抛出异常
        try {
            // 同步调用[执行器函数(也就是 executor)]
            executor(resolve, reject)
        } catch (e) {
            // 修改 Promise 对象状态为 失败
            reject(e)
        }
    }
    // 添加 then 方法 === es5  Promise.prototype.then () {}  方法
    then (onResolved, onRejected) {
        const self = this;
        // 判断调用then方法的时候，回调函数参数onRejected 没有传的时情况给onRejected指定一个函数，如果执行失败就会走这个指定的onRejected函数
        // 然后抛出错误，链式调用最后边的catch就会捕捉到
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason;
            }
        }
        // 判断如果调用then方法的时候什么都不传，并且后面还跟着then方法的情况，给onResolved指定一个函数，这样可以让后边的then方法不受影响继续向下执行
        if (typeof onResolved !== 'function') {
            onResolved = value => value;
        }
        // 这里之所以需要return promise 是因为then方法调用也会返回promise对象
        // 返回的promise对象中的promiseResult的值取决于传入进来的onResolved回调函数执行后的返回值
        // 返回的promise对象中的promiseState的值取决于执行器中的回调函数是同步操作: PromiseState = 执行器中调用的回调函数是resolve(fulfilled)还是reject(rejected)
        return new Promise((resolve, reject) => {
            // 封装函数
            function callback(type) {
                // 这里的try catch 是为了防止调用then方法中的两个回调函数中抛出错误可以继续执行代码，并且捕获错误信息
                try {
                    // 获取回调函数的执行结果
                    let result = type(self._promiseResult);
                    // 判断
                    // 如果实例中then方法的返回值也是一个promise，这里的result等于也就是一个promise对象的实例
                    // 然后继续调用实例上的then方法执行对应的resolve和reject就可以，这样就会重新去执行promise构造函数中的resolve或者reject方法
                    if (result instanceof Promise) {
                        // 如果是promise类型的对象
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r);
                        })
                    } else {
                        // 结果的对象状态为成功
                        resolve(result);
                    }
                } catch (error) {
                    reject(e)
                }
            }
            // 调用回调函数，先判断promiseState 状态
            // 这里是同步的状态下，已经修改过状态，并修改了结果以后，执行到then的操作
            if (this._promiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved);
                });
            }
            if (this._promiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected);
                });
            }
            if (this._promiseState === 'pending') {
                this.callbacks.push({
                    onResolved: function() {
                        callback(onResolved);
                    },
                    onRejected: function() {
                        callback(onRejected);
                    }
                });
            }
        });
    }
    // 添加 catch 方法 === es5  Promise.prototype.catch () {}  方法
    catch (onRejected) {
        this.then(undefined, onRejected);
    }
    // 添加 resolve 方法  === es5 Promise.resolve () {} 方法
    static resolve (value) {
        return new Promise((resolve, reject) => {
            // 如果传入的value也是promise的实例，则执行这个实例的then方法，然后执行对应的resolve reject方法
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            } else {
                // 如果不是promise对象, 直接设置成成功
                resolve(value);
            }
        });
    }

    // 添加 reject 方法  === es5 Promise.reject () {} 方法
    static reject (reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        });
    }

    // 添加 all 方法 === es5 Promise.all () {} 方法
    static all (promises) {
        return new Promise((resolve, reject) => {
            let count = 0;
            let arr = [];
            // 遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    // 得知对象的状态是成功，每个promise对象都成功
                    count++;
                    // 将当前promise对象对象成功的结果，存入到数组中，这里最好不要使用push添加，这样顺序有可能会乱，要使用下标的方式添加
                    arr[i] = v;
                    // 确保all中的promise对象都执行成功了，再去改变promiseState的状态
                    if (count === promises.length) {
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                })
            }
        });
    }

    // 添加 race 方法  === es5 Promise.race () {} 方法
    static race (promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    // 修改返回对象的状态为成功
                    resolve(v);
                }, r => {
                    // 修改返回对象的状态为失败
                    reject(r);
                })
            }
        });
    }
}
