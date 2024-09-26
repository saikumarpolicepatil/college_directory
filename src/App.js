// import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './components/login';
import studentDashboard from './components/studentDashboard';
import FacultyDashboard from './components/FacultyDashBoard';
import AdminDashboard from './components/AdminDashBoard';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact Component={login} />
        <Route path = '/student-dashboard' Component={studentDashboard} />
        <Route path = '/faculty-dashboard' Component={FacultyDashboard} />
        <Route path = '/admin-dashboard' Component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default App;
