import { IQueryData, IUserAnswer } from "../typings";

// 生成一个userAnswer
function formatUserAnswer (queryList: IQueryData[], id: string, answer: string): IUserAnswer {
  let userAnswer: IUserAnswer = {
    qid: '0',
    question: '',
    url: '',
    explains: '',
    userAnswer: '',
    rightAnswer: '',
    isRight: false
  }

  // 用any的原因是  ts本身是不支持这种字符串拼接的属性类型推导的
  // 所以只能用any，下面的item[`item${answer}`]才不会出现类型错误
  queryList.map((item: any) => {
    if(item.id == id){
      userAnswer.qid = item.id;
      userAnswer.question = item.question;
      userAnswer.url = item.url;
      userAnswer.explains = item.explains;
      userAnswer.userAnswer = item[`item${answer}`];
      userAnswer.rightAnswer = item[`item${item.answer}`];
      userAnswer.isRight = item.answer === answer;
    }
    return item;
  })
  return userAnswer;
}

export {
  formatUserAnswer
};