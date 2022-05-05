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

// 3. 接口拦截器
