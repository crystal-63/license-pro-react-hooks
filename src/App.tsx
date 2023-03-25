import React from 'react';
import { Route, Switch } from 'react-router';


import Home from './views/Home';
import Test from './views/Test';
import Result from './views/Result';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/" exact={true} component={ Home }/>
        <Route path="/test" exact={true} component={ Test }/>
        <Route path="/result" exact={true} component={ Result }/>
      </Switch>
    </div>
  );
}

export default App;
