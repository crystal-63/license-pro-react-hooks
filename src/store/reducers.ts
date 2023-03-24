import * as types from './actionTypes'
import { IState, MODELS, SUBJECTS } from '../typings';
import { TAction } from './action';
import initialState from './state';

function reducer(state: IState = initialState, action: TAction): IState {
    switch (action.type) {
        // reducer最终是要返回一个state
        // 如果你要改变state中的某个属性
        // 先把state扩展到一个新的对象中
        // 再修改需要修改的属性
        case types.SET_STATE_DEFAULT:
            return {
                ...state, //redux需要手动先加state vuex中自带
                queryList: [],
                userAnswers: [],
                curSubject: SUBJECTS.s1,
                curModel: MODELS.c1,
                modelShow: true,
                total: 5
            } as IState;
        case types.SET_CURRENT_SUBJECT:
            return {
                ...state, 
                //如果是科目四，驾照类型需要隐藏
                modelShow: action.payload === SUBJECTS.s2 ? false : true,
                curSubject: action.payload as SUBJECTS,
            }as IState;
        case types.SET_CURRENT_MODEL:
            return {
                ...state, 
                curModel: action.payload as MODELS,
            }as IState;
        default:
            return state as IState;;
    }
}

export default reducer;