import React, { FC } from "react";

import './styles/question.scss';

interface IProps {
  url: string,
  question: string
}

const Selector: FC<IProps> =({
  url,
  question
}) => {
  return (
    <div className="quesrtion-panel">
      
    </div>
  )
}

export default Selector;