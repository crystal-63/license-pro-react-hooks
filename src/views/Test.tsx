import React, { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TestPanel from "../components/TestPanel";
import { useCurQuestion } from "../hooks";
import { IQueryData, IState, IUserAnswer } from "../typings";
import * as H from 'history';

enum HEADER_TITLE {
    loading = '试题加载中...',
    testing = '考试中'
}

interface IProps {
    history: H.History;
}

const Test: FC<IProps> = ({
    history
}) => {
    // 在考题加载的时候，显示试题加载中
    // 在试题加载完毕的时候，显示考试中
    const [ headerTitle, setHeaderTitle ] = useState<string>(HEADER_TITLE.loading);
    // 以下方法不建议
    // const [ data, setData ] = useState<IQueryData[]>([]);
    // useEffect(() => {
    //     const _fn = async () => {
    //         const data: IQueryData[] = await getQueries<IQueryData[]>({ subject: SUBJECTS.s1, model: MODELS.c1 })
    //         setData(data);
    //     }

    //     _fn();
    // }, [])
    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    const [curIdx, setCurIdx] = useState<number>(0);
    const total: number = useSelector((state: IState) => state.total);
    const queryList: IQueryData[] = useSelector((state: IState) => state.queryList);
    const [ curQuestion, setCurQuestion] = useCurQuestion();
    const userAnswers: IUserAnswer[] = useSelector((state: IState) => state.userAnswers);

    //当当前的题目存在  设置title为考试中...
    useEffect(() => {
        curQuestion && setHeaderTitle(HEADER_TITLE.testing);
    }, [curQuestion]);

    //当点击下一题按钮的时候，要判断：
    //1、curIdx 大于了 total - 1： 跳转result页面
    //2、否  给curIdx + 1；
    useEffect(() => {
        setHeaderTitle(HEADER_TITLE.loading);
        setCurQuestion(queryList[curIdx]);
    }, [queryList, curIdx, setCurQuestion])

    const onNextQuestion: () => void = useCallback(() => {
        if(curIdx <= total - 1){
            setCurIdx((curIdx:number) => curIdx + 1);
        } else {
            history.push('/result');
        }
    },[curIdx, total, history])

    useEffect(() => {
        console.log(userAnswers)

    },[userAnswers])

    return (
        <div className="container">
            <Header 
              headerTitle={ headerTitle }
              iconShow={ true }
            />
            <TestPanel 
                { ...curQuestion! }
                onNextQuestion={ onNextQuestion }
            />
        </div>
    )
}

export default Test;
