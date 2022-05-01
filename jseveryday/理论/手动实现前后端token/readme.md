## 站在前端的角度看token
- 前端登录成功后端返回一个token，前端将token保存在本地，在接下来的所有的请求中，前端都将带上此token用作身份识别。

- 什么是token，token是后端生成的的一串加密过的可以用来表示用户身份的字符串。生成token的方式之一JWT(JSON Web Token)

- token也称为令牌，专门用来做用户身份识别的

- 前端处理
```js
    let jwtToken = window.localStorge.getItem('jwtTokne');
    // 请求拦截
    axios.interceptots.request.use((config) => {
        config.headers.Authorization = jwtToken;
        return config;
    })
```

- 后端校验
```js
    let jwtToken = ctx.req.headers.Authorization;
    if(jwtToken) {
        jwt.verify(jwtToken, '666', function(err, decode){
            if (err) ctx.body = {status: 401, message: 'token失效'}
        })
    }
```