import { IState, MODELS, SUBJECTS } from "../typings";


export default {
    //queryList: [] 返回回来的100条数据
    queryList: [],
    // userAnswers: [] -> interface { ... }
    userAnswers: [],
    //当前的科目
    curSubject: SUBJECTS.s1,
    // 当前的驾照类型
    curModel: MODELS.c1,
    //model这个组件的显示与否
    modelShow: true,
    //total 考试一共多少题
    total: 5
} as IState;


