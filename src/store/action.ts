import { MODELS, SUBJECTS } from '../typings';
import * as types from './actionTypes'


// 定义action函数返回值的类型
interface ISetStateDefault {
    type: types.SET_STATE_DEFAULT_TYPE,
    payload: null
}

interface ISetCurrentSubject {
    type: types.SET_CURRENT_SUBJECT_TYPE,
    payload: SUBJECTS
}

interface ISetCurrentModel {
    type: types.SET_CURRENT_MODEL_TYPE,
    payload: MODELS
}

// 定义redux action 参数的类型
// 由于类型是多个，所以要用 | 联合类型
export type TAction = ISetStateDefault | ISetCurrentSubject | ISetCurrentModel;


// action方法
function setStateDefault ():ISetStateDefault {
    return {
        type: types.SET_STATE_DEFAULT,
        payload: null
    }
}

function setCurrentSubject (subject: SUBJECTS): ISetCurrentSubject {
    return {
        type: types.SET_CURRENT_SUBJECT,
        payload: subject
    }
}

function setCurrentModel (model: MODELS): ISetCurrentModel {
    return {
        type: types.SET_CURRENT_MODEL,
        payload: model
    }
}

export {
    setStateDefault,
    setCurrentSubject,
    setCurrentModel
}
