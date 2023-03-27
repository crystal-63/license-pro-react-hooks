import { IQueryData, IUserAnswer } from "../typings";

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