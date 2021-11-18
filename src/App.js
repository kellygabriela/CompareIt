import React from 'react';
import "./component/App.css";
import Products from './Products';
import Home from './Home';
import {Route} from "react-router-dom";
import About from './About';
import Contacts from './Contacts';
import Login from './Login';
import Signup from './Signup';

function App(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup}/>
        </>
    );
}

export default App;
