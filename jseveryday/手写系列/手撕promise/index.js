let config = {
    a: 1,
    b: 2
};
let promise = Promise.resolve(config);
// console.log('初始化', promise);
function success(res) {
    console.log('res', res);
    console.log('成功');
    res.c = 3;
    return res;
}
function success1(res) {
    console.log('res1', res);
    console.log('成功1');
    res.d = 4;
    return res;
}
function success2(res) {
    console.log('res2', res);
    console.log('成功2');
    res.e = 5;
    return res;
}
function fail(err) {
    console.log('失败');
    console.log('err', err);
}
function fail1(err) {
    console.log('失败1');
    console.log('err1', err);
}
// let chain = [success, fail, success1, fail1, success1, fail1];
// while (chain.length) {
//     console.log('promise', promise);
//     promise = promise.then(chain.shift(), chain.shift());
//     console.log(123, '123');
// }

let chain = [success, success1, success2];
// promise = promise.then(chain.shift());
// promise = promise.then(chain.shift());
// promise = promise.then(chain.shift());

function promiseState(p) {
  const t = {a: 1};
  return Promise.race([p, t])
    .then(v => {
        console.log(v, t, v === t);
        return (v === t)? "pending" : "fulfilled"
    }, (err) => {
        console.log(err, '错误');
        return "rejected"
    });
}

var a = Promise.resolve();
var b = Promise.reject();
var c = new Promise(() => {});
var d = {b: 2}

promiseState(a).then(state => console.log(state)); // fulfilled
promiseState(b).then(state => console.log(state)); // rejected
promiseState(c).then(state => console.log(state)); // pending
promiseState(d).then(state => console.log(state));
