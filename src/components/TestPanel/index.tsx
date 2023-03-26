import React, { FC } from "react";
import './styles/index.scss';
import Question from "./Question";

interface IProps {
  question: string,
  url: string
}

const TestPanel: FC<IProps> = ({
  question,
  url
}) => {
  return (
    <div className="test-panel">
      <Question 
        question={ question || '加载中...'}
        url={ url }
      />
    </div>
  )
}

export default TestPanel;