import React, { FC } from "react";
import Header from "../components/Header";


const Result: FC = () => {

 
    return (
        <div className="container">
            <Header 
              headerTitle="考试结果"
              iconShow={ true }
            />
        </div>
    )
}

export default Result;