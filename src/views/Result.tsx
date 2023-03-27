import React, { FC } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { IState, IUserAnswer } from "../typings";
import ResultPanel from "../components/ResultPanel";

const Result: FC = () => {
    const userAnswers: IUserAnswer[] = useSelector((state: IState) => state.userAnswers);
    let flagId: number = 0;
    return (
        <div className="container">
            <Header 
              headerTitle="考试结果"
              iconShow={ true }
            />
            <div className="result-panel">
                {
                    // index不是不能用于key， 是因为数组改变会导致index会变化
                    // 如果不用key  最好用id -> 聚合API -> 题目的ID有时候有相同的情况
                    // 我们自己声明一个flagId作为key，每次遍历 自加++
                    userAnswers.map((item: IUserAnswer, index) => {
                        flagId ++;
                        return (
                            <ResultPanel 
                                userAnswerItem={ item }
                                key={ flagId }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Result;