// 开发中遇到的三个问题
// 1. 一次网页资源加载问题的定位过程
// 监控实现
window.addEventListener('error', event => {
    if (event.srcElement !== window) {
        console.log('资源加载失败，加载资源的元素是：', event.srcElement);
        send(); //收集错误
    } else {
        console.log('JS报错: ', event.message);
        send();
    }
}, true);
window.addEventListener('unhandledrejection', event => {
    const error = event.reason || {};
    console.log('JS报错', error);
    send();
})

// 2. css中的z-index层叠覆盖问题
// 多种弹窗，toast，浮层组件，多人协同业务开发会将index不断覆盖式的放大
const KEY = '_tbv_z_index_';
function initZindex$() {
    return (window[KEY] = 10000);
}
function once(fn) {
    const flag = true;
    return function() {
        if (flag) {
            flag = false;
            const args = Array.prototype.slice.call(arguments);
            fn.apply(args);
        }
    };
}
const initZindex = once(initZindex$);
// 外部调用&支持重置
function zIndex$(zIndex) {
    if (zIndex) {
        return (window[KEY] = zIndex);
    }
    return (window[KEY] += 1);
}
// 组件mount时触发 +1
const zIndex = zIndex$();


// 3. css3 transform属性对position的影响
// 在外层没有transform影响时，固定定位元素的包含块是根元素，可以近似认为是<html>元素，因此fixed元素可以实现相对视口定位的效果。
// 而当元素设置了transform时，便会创建一个新的包含块(containing block)，如果该元素的内部有元素设置了fixed定位，
// 那么该fixed元素的包含块便不再是根元素，而变成了被设置了transform的元素。如果在开发过程中发现设置了position:fixed的元素随着页面滚动了，就可以看下fixed的元素外层是否有元素设置了transfrom。
// 除了包含块之外，transform还会生成新的层叠上下文（stack context）,使得元素内部和外部的z-index相互独立，出现低z-index元素层级比高z-index元素还高的情况
