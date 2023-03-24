import React, { FC } from "react";
import { Link } from "react-router-dom";
import './index.scss'
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import * as types from '../../store/actionTypes'

interface IProps {
    headerTitle: string,
    iconShow: boolean
}

const Header: FC<IProps> = ({
    headerTitle,
    iconShow
}) => {
    const dispatch: Dispatch = useDispatch();

    const setStateDefault: () => void = () =>{
        //如果点击返回按钮 将state 重置到默认状态
        dispatch({ type: types.SET_STATE_DEFAULT })
    }

    return (
        <header className="header">
            <div className="back-icon">
                {
                    iconShow &&
                    <Link
                      to="/"
                      className="iconfont icon-arrow-right"
                      onClick={ setStateDefault }  
                    ></Link>
                }
            </div>
            <h1> { headerTitle }</h1>
        </header>
    )
}

export default Header;