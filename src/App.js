import React from 'react';
import './App.css';
import Register from './Register' ;
import Home from './Home' ;
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    function App() {
      return (
        <Router basename='/web'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/register'>
              <Register/>
            </Route>
          </Switch>
        </Router>
      );
     }


  );
}

export default App;
