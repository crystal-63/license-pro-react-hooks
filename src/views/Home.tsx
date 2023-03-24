import React, { FC, useCallback, useMemo } from "react";
import { bindActionCreators, Dispatch } from 'redux'
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Subject from '../components/Subject';
import Model from '../components/Model';
import Button from "../components/Button";
import { IState, MODELS, SUBJECTS } from "../typings";
import * as types from '../store/actionTypes'
import { setCurrentModel, setCurrentSubject } from "../store/action";

const Home: FC = () => {
    // 获取state -> useSelector
    // 改变state -> useDispatch
    const curSubject: SUBJECTS = useSelector((state: IState) => state.curSubject);
    const curModel: MODELS = useSelector((state: IState) => state.curModel);
    const modelShow: boolean = useSelector((state: IState) => state.modelShow);

    const dispatch: Dispatch = useDispatch();
    
    //方法一
    // 缓存传入子组件的事件处理函数用useMemo可以缓存多个函数或者属性
    // bindActionCreator 主要是将函数与action绑定一次，内部自动使用dispatch派发action
    const actions = useMemo(() => {
        return bindActionCreators({
            _setCurrentSubject: setCurrentSubject,
            _setCurrentModel: setCurrentModel
        }, dispatch)
    },[dispatch])

    // 方法二
    // const [ _setCurrentSubject, _setCurrentModel ] = useMemo(() => {
    //     return [
    //         (subject: SUBJECTS) => dispatch({ type: types.SET_CURRENT_SUBJECT, payload:  subject }),
    //         (model: MODELS) => dispatch({ type: types.SET_CURRENT_MODEL, payload:  model })
    //     ]
    // },[dispatch])

    // 方法三
    // const setCurrentSubject: (subject: SUBJECTS) => void = useCallback((subject) => {
    //     dispatch({ type: types.SET_CURRENT_SUBJECT, payload:  subject })
    // },[dispatch]);
    // const setCurrentModel: (model: MODELS) => void = useCallback((model) => {
    //     dispatch({ type: types.SET_CURRENT_MODEL, payload:  model })
    // },[dispatch]);

    return (
        <div className="container">
            <Header 
              headerTitle="驾照题库"
              iconShow={ false }
            />
            <Subject 
              curSubject={ curSubject }
              setCurrentSubject={ actions._setCurrentSubject }
            />
            <Model 
              curModel={ curModel }
              setCurrentModel={ actions._setCurrentModel }
              modelShow={ modelShow }
            />
            <Button 
              btnTitle="开始考试"
              path="/test"
            />
        </div>
    )
}

export default Home;