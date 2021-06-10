import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import CourseLayout from './components/CourseLayout';
import CourseView from './components/CourseView';
import VideoStreamView from './components/learning/VideoStreamView';
import AddCourse from './components/AddCourse';

const App = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/course/")
    .then(response => response.json())
    .then(data => setData(data))
  });
  return (
    <Router>
      <React.Fragment>
        <HomePage/>
        <Switch>
          <Route exact path="/"><CourseLayout data={data}/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/register"><Register/></Route>
          <Route exact path="/course"><CourseView/></Route>
          <Route exact path="/course/view"><VideoStreamView/></Route>
          <Route exact path="/course/add"><AddCourse/></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
