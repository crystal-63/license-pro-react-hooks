import * as types from './actionTypes'

interface ISetStateDefault {
    type: types.SET_STATE_DEFAULT_TYPE
}

export type TAction = ISetStateDefault;

function setStateDefault ():ISetStateDefault {
    return {
        type: types.SET_STATE_DEFAULT
    }
}

export {
    setStateDefault
}
