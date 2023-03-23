import React, { FC, useState } from "react";
import Header from "../components/Header";

enum HEADER_TITLE {
    loading = '试题加载中...',
    testing = '考试中'
}

const Test: FC = () => {

    const [ headerTitle, setHeaderTitle ] = useState<string>(HEADER_TITLE.loading);
    
    return (
        <div className="container">
            <Header 
              headerTitle={ headerTitle }
              iconShow={ true }
            />
        </div>
    )
}

export default Test;