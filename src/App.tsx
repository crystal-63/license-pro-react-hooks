import React from 'react';
import { Route, Switch } from 'react-router';


import Home from './views/Home';
import Test from './views/Test';
import Result from './views/Result';

function App() {
  return (
    <div className="App">
      <Route path="/" component={ Home }/>
      <Route path="/test" component={ Test }/>
      <Route path="/result" component={ Result }/>
      {/* <Switch>
        
      </Switch> */}
    </div>
  );
}

export default App;
