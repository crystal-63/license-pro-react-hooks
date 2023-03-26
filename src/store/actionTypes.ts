// 定义action的type
const SET_STATE_DEFAULT: string = 'SET_STATE_DEFAULT';
const SET_CURRENT_SUBJECT: string = 'SET_CURRENT_SUBJECT';
const SET_CURRENT_MODEL: string = 'SET_CURRENT_MODEL';
const SET_QUERY_LIST: string = 'SET_QUERY_LIST';

// 定义action type的类型
type SET_STATE_DEFAULT_TYPE = typeof SET_STATE_DEFAULT;
type SET_CURRENT_SUBJECT_TYPE = typeof SET_CURRENT_SUBJECT;
type SET_CURRENT_MODEL_TYPE = typeof SET_CURRENT_MODEL;
type SET_QUERY_LIST_TYPE = typeof SET_QUERY_LIST;


export {
    SET_STATE_DEFAULT,
    SET_CURRENT_SUBJECT,
    SET_CURRENT_MODEL,
    SET_QUERY_LIST
}

export type {
    SET_STATE_DEFAULT_TYPE,
    SET_CURRENT_SUBJECT_TYPE,
    SET_CURRENT_MODEL_TYPE,
    SET_QUERY_LIST_TYPE
}