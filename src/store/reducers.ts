import * as types from './actionTypes'
import { IState, MODELS, SUBJECTS } from '../typings';
import { TAction } from './action';
import initialState from './state';

function reducer(state: IState = initialState, action: TAction): IState {
    switch (action.type) {
        case types.SET_STATE_DEFAULT:
            return {
                ...state, //redux需要手动先加state vuex中自带
                queryList: [],
                userAnswers: [],
                curSubject: SUBJECTS.s1,
                curModel: MODELS.c1,
                modelShow: true,
                total: 5
            } as IState
        default:
            return state;
    }
}

export default reducer;