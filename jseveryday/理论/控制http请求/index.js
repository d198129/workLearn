// 前端并发10个相同的请求，怎么控制为只发一个请求
// 1. 同时发多个相同的请求，如果第一个请求成功，那么剩下的请求都不会发出去，成功的结果作为剩余请求返回 
// 2. 如果第1个请求失败了，那么接着发编号为2的请求，如果请求成功那么剩余的请求都不会发出，成功的结果作为剩余请求的返回
// 3. 如果第2个请求失败了，那么接着发编号为3的请求，如果请求成功那么剩余的请求都不会发出，成功的结果作为剩余请求的返回
// ...以此类推

// async function fetchData(a) {
//     const data = await fetch('//127.0.0.1:3000/test');
//     const d = await data.json();
//     console.log(d);
//     return d;
// }

// fetchData(2)
// fetchData(2)
// fetchData(2)

// 利用基础缓存
// const cacheAsync = function(fn) {
//     const cache = Object.create(null);
//     return async str => {
//         const hit = cache[str];
//         if (hit) {
//             return hit;
//         }
//         // 只缓存成功的promise, 失败直接重新请求
//         return (cache[str] = await fn(str));
//     }
// }
// const fetch2 = cacheAsync(fetchData);
// fetchData(2);
// fetchData(2);
// fetchData(2);

// 进阶
const cacheAsync = (promiseGenerator, symbol) => {
    const cache = new Map();
    const never = Symbol();
    return async (params) => {
        return new Promise((resolve, reject) => {
            // 可以提供键值
            symbol = symbol || params;
            let cacheCfg = cache.get(symbol);
            if (!cacheCfg) {
                cacheCfg = {
                    hit: never,
                    exector: [{ resolve, reject }],
                };
                cache.set(symbol, cacheCfg);
            } else {
                // 命中缓存
                if (cacheCfg.hit !== never) {
                    return resolve(cacheCfg.hit)
                }
                cacheCfg.exector.push({ resolve, reject });
            }

            const { exector } = cacheCfg;
            
            // 处理并发，在请求还处于pending过程中就发起了相同的请求
            // 拿第一个请求
            if (exector.length === 1) {
                const next = async () => {
                try {
                    if (!exector.length) return;
                    const response = await promiseGenerator(params);
                    // 如果成功了，那么直接resolve掉剩余同样的请求
                    while (exector.length) { // 清空
                    exector.shift().resolve(response); 
                    }
                    // 缓存结果
                    cacheCfg.hit = response;
                } catch (error) {
                    // 如果失败了 那么这个promise的则为reject
                    const { reject } = exector.shift();
                    reject(error);
                    next(); // 失败重试，降级为串行
                }
                };
                next();
            }
        });
    };
};
