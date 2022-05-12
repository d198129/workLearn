import axios from 'axios';
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

// 基础封装
class Request {
    // axios实例
    instance: AxiosInstance

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
    }
    request(config: AxiosRequestConfig) {
        return this.instance.request(config);
    }
}


export default Request;

// 拦截器封装 这个拦截器分位三种
// 1. 类拦截器
// 2. 实例拦截器
// 3. 接口拦截器

// 1. 类拦截器
class Request1 {
    // axios实例
    instance: AxiosInstance

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
        this.instance.interceptors.request.use((res: AxiosRequestConfig) => {
            console.log('全局响应拦截器');
            return res;
        }, (err: any) => err)
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            console.log('全局响应拦截器');
            return res.data;
        }, (err: any) => err)
    }
}

// 2. 实例拦截器
export interface RequestInterceptors {
    // 请求拦截
    requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorsCatch?: (err: any) => any;
    // 响应拦截
    responseInterceptors?: (config: AxiosResponse) => AxiosResponse;
    responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors
}
// 使用
class Request2 {
    // axios实例
    instance: AxiosInstance
    interceptorsObj?: RequestInterceptors
    constructor(config: RequestConfig) {
        this.instance = axios.create(config);
        this.interceptorsObj = config.interceptors;
        this.instance.interceptors.request.use((res: AxiosRequestConfig) => {
            console.log('全局请求拦截器');
            return res;
        }, (err: any) => err);
        // 使用实例拦截
        this.instance.interceptors.request.use(
            this.interceptorsObj?.requestInterceptors,
            this.interceptorsObj?.requestInterceptorsCatch
        );
        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptors,
            this.interceptorsObj?.responseInterceptorsCatch
        );
        // 全局响应拦截器保证在最后执行
        this.instance.interceptors.request.use((res: AxiosRequestConfig) => {
            console.log('全局响应拦截器');
            return res.data;
        }, (err: any) => err);
    }
}

export {
    Request2
}

// 3. 接口拦截器
// 首先将AxiosRequestConfig类型修改为RequestConfig允许传递拦截器
// 然后我们在类拦截器中将接口请求的数据进行了返回，也就是说request()方法中
// 得到的类型就不是AxiosRequest
// request<T =any, R = AxiosRequest<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>

// 改变request()方法的返回值类型，我们的代码如下
// request<T>(config: RequestConfig): Promise<T> {
//     return new Promise((resolve, reject) => {
//         if(config.interceptors?.requestInterceptors) {
//             config = config.interceptors.requestInterceptors(config);
//         }
//         this.instance
//         .request<any, T>(config)
//         .then(res => {
//             // 如果我们为单个相应设置拦截器，这里使用单个相应的拦截器
//             if (config.interceptors?.responseInterceptors) {
//                  res = config.interceptors.requestInterceptors(config)
//             }
//              resolve(res);
//         })
//         .catch((err: any) = {
//               reject(err)
//         })
//     }
// });

// 存在一个细节， 我们在拦截器接受的类型一直是AxiosResponse类型，而在拦截器中将返回的类型改变
// 所以说我们需要为拦截器传递一个泛型
// export default RequestInterceptors {
//     // 请求拦截
//     requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
//     requestInterceptorsCatch? (err: any) => any
//     // 相应拦截
//     responseInterceptors?: <T = AxiosResponse>(config: T) => T
//     responseInterceptorsCatch?: (err: any) => any
// }