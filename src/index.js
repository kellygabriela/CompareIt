import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import text from './component/Text';

ReactDOM.render(
  <BrowserRouter>          
  <Switch>
      <Route exact path="/" render={() => (
          (text.value !== "Login") ? (
          <Redirect to="/home"/>
          ) : (
          <Redirect to="/login"/>
      )
      )}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup}/>
      <App />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
