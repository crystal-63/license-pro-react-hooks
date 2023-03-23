import React, { FC } from "react";
import Header from "../components/Header";

const Home: FC = () => {
    console.log(1111)
    return (
        <div className="container">
            <Header 
              headerTitle="驾照题库"
              iconShow={ false }
            />
        </div>
    )
}

export default Home;