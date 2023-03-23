import axios from '../lib/http';
import { IHttpPostData } from '../typings';

function getQuerues<T>(options:IHttpPostData): Promise<T> {
    const { subject, model } = options;
    return axios.post<T, T>('/api/query',{
        subject, model
    }).then((data: T) => {
        return data;
    }).catch((err) => {
        throw new Error('Request fail' + err);
    })
}

export {
    getQuerues
}