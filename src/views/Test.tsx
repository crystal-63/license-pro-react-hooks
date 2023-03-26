import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TestPanel from "../components/TestPanel";
import { useCurQuestion } from "../hooks";
import { IQueryData, IState } from "../typings";

enum HEADER_TITLE {
    loading = '试题加载中...',
    testing = '考试中'
}

const Test: FC = () => {
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

    useEffect(() => {
        curQuestion && setHeaderTitle(HEADER_TITLE.testing);
    }, [curQuestion]);

    useEffect(() => {
        setHeaderTitle(HEADER_TITLE.loading);
        setCurQuestion(queryList[curIdx]);
    }, [queryList, curIdx, setCurQuestion])


    return (
        <div className="container">
            <Header 
              headerTitle={ headerTitle }
              iconShow={ true }
            />
            <TestPanel 
                { ...curQuestion! }
            />
        </div>
    )
}

export default Test;
