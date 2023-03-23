import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'development'
                       ? 'http//localhost:7002'
                       : '';

                       

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config;
})

axios.interceptors.response.use((res: AxiosResponse) => {
    if(res.data.res === 1){
        return Promise.reject(res.data.data);
    }
    return res.data;
},(err) =>{
    return Promise.reject(err);
})

export default axios;