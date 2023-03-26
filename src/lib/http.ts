import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'development'
                       ? 'http://localhost:7001'
                       : '';

                       

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config;
})

axios.interceptors.response.use((res: AxiosResponse) => {
    if(res.data.res === 1){
        return Promise.reject(res.data.data);
    }
    return res.data.result;
},(err) =>{
    return Promise.reject(err);
})

export default axios;