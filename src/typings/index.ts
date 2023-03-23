enum SUBJECTS {
    s1 = 1,
    s2 = 4
}

enum MODELS {
    c1 = 'c1',
    c2 = 'c2',
    a1 = 'a1',
    a2 = 'a2',
    b1 = 'b1',
    b2 = 'b2',
}

interface IState {
    //queryList: [] 返回回来的100条数据
    queryList: IQueryData[];
    // userAnswers: [] -> interface { ... }
    userAnswers: IUserAnswer[];
    //当前的科目
    curSubject: SUBJECTS;
    // 当前的驾照类型
    curModel: MODELS;
    //model这个组件的显示与否
    modelShow: boolean;
    //total 考试一共多少题
    total: number;
}

interface IUserAnswer {
    qid: string,
    question: string,
    url: string,
    explain: string,
    userAnswer: string,
    rightAnswer: string,
    isRight: boolean
}

interface IQueryData {
    id: string;
    question: string;//问题
    answer: string;//答案
    item1: string;//选项，当内容为空时表示判断题正确选项
    item2: string;//选项，当内容为空时表示判断题错误选项
    item3: string;
    item4: string;
    explains: string;//答案解释
    url?: string;//图片url
}

export {
    SUBJECTS,
    MODELS
}

// 请求体中的参数
interface IHttpPostData {
    subject: SUBJECTS,
    model?: MODELS
}

export type{
    IHttpPostData,
    IUserAnswer,
    IQueryData,
    IState
}