import React, { FC, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { formatUserAnswer } from "../../lib/utils";

import './styles/selector.scss';
import { IQueryData, IState, IUserAnswer } from "../../typings";
import * as  types from '../../store/actionTypes'
import { Dispatch } from "redux";


interface IProps {
  id: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  onNextQuestion: () => void;
}

enum SELECTORS {
  item1 = '1',
  item2 = '2',
  item3 = '3',
  item4 = '4',
}

const Selector: FC<IProps> =({
  id,
  item1,
  item2,
  item3,
  item4,
  onNextQuestion
}) => {
  const [ curAnswer, setCurAnswer ] = useState<SELECTORS>(SELECTORS.item1);
  const [ userAnswer, setUserAnswer ] = useState<IUserAnswer | null>(null);
  const queryList: IQueryData[] = useSelector((state: IState) => state.queryList);
  const dispatch: Dispatch = useDispatch();
  
  //使用事件代理的方式点击选项
  // react event -> React.MouseEvent
  const handleSelectClick = (e: React.MouseEvent):void =>{
    // target 在react中是有独立的target类型，注意给target断言
    const tar: HTMLElement = e.target as HTMLElement;
    const className = tar.className;

    if(className === 'item-btn'){
      const answer: SELECTORS = tar.dataset.answer as SELECTORS;
      // 首先设置当前的答案 1234
      setCurAnswer(answer);
      // 设置用户的当前问题的答案
      setUserAnswer(formatUserAnswer(queryList, id, curAnswer));
    }
  }
  // 当页面绘制完毕后，先执行设置用户当前问题的答案， 每一道题都有默认选项  1
  useEffect(() => {
    if(queryList && id && curAnswer) {
      setUserAnswer(formatUserAnswer(queryList, id, curAnswer));
    }
  },[queryList, id, curAnswer]);

  // 是下一题的按钮
  const goNext: () => void = useCallback(() => {
    // 派发action去往userAnswers内部放入当前用户的答案
    dispatch({ type: types.SET_USER_ANSWER, payload: userAnswer });
    // 已经要走下一题了，就要吧默认选项设置为 1
    setCurAnswer(SELECTORS.item1);
    // 走下一个问题
    onNextQuestion();
  }, [dispatch, onNextQuestion, userAnswer])
  return (
    <div className="selector-panel"
      onClick={ handleSelectClick }
    >
      <div className="item">
        <div
          className={ ['item-btn', curAnswer === SELECTORS.item1 ? ' active' : ''].join('')}
          data-answer={ SELECTORS.item1 }
        >{ item1 || '加载中...' }</div>
      </div>
      <div className="item">
        <div
          className={ ['item-btn', curAnswer === SELECTORS.item2 ? ' active' : ''].join('')}
          data-answer={ SELECTORS.item2 }
        >{ item2 || '加载中...' }</div>
      </div>
      {
        (item3 && item4 && item3.length && item4.length) &&
        <>
          <div className="item">
            <div
              className={ ['item-btn', curAnswer === SELECTORS.item3 ? ' active' : ''].join('')}
              data-answer={ SELECTORS.item3 }
            >{ item3 }</div>
          </div>
          <div className="item">
            <div
              className={ ['item-btn', curAnswer === SELECTORS.item4 ? ' active' : ''].join('')}
              data-answer={ SELECTORS.item4 }
            >{ item4 }</div>
          </div>
        </>
      }
      <Button 
        btnTitle="下一题"
        handleClick={ goNext }
      />
    </div>
  )
}

export default Selector;