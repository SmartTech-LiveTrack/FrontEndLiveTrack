import React from 'react';
import logo from './logo.svg';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/login.component';
import Signup from './pages/Signup/signup.component';
import Dashboard from './pages/Dashboard/dashboard.component';

function App() {
  return (
    <Switch>

         <Route path="/login" component={Login} />
         <Route path="/register" component={Signup} />
         <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
