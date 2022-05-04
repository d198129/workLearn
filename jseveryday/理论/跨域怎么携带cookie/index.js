// 1. 在前端请求的时候request对象的属性withCredentials为true
// 什么是withCredentials, XMLHttpRequest.withCredentials是一个Boolean类型
// 它指示了是否使用类似cookie.authorization header(头部授权)或者TSL客户端证书这一类资格证书来创建一个跨站点访问控制(cross-site
// Access-Control)请求，在同一个站点下使用withCredentials属性是无效的。
// 如果发送来自其他域的XMLHttpRequest请求之前，未设置withCredentials为true
// 那么就不能为它自己域设置cookie值，而通过设置withCredentials为true获得的第三方cookie
// 将会依旧享受同源策略，因此不能被通过document.cookie或者从头部相应请求的脚本访问。

// 2. 在服务端设置Access-Control-Allow-Origin
// app.all('*', (req, res, next) => {
//     req.header("Access-Control-Allow-Origin", "http://localhost:8000");
//     next();
// })

// 3. 在服务端设置Access-Control-Allow-Credentials
// app.all('*', (req, res, next) => {
//     req.header("Access-Control-Allow-Origin", "http://localhost:8000“);
//     req.header("Access-Control-Allow-Credentials", "http://localhost:8000");
//     next();
// })