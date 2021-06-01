import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import CourseLayout from './components/CourseLayout';

function App() {
  return (
    <Router>
      <React.Fragment>
        <HomePage/>
        <Switch>
          <Route exact path="/"><CourseLayout/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/register"><Register/></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
