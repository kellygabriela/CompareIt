import React from 'react';
import "./App.css";
import Products from './Products';
import Home from './Home';
import {Route} from "react-router-dom";
import About from './About';
import Contacts from './Contacts';

//new
import Login from './Login';

function App(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            /*new*/
            <Route exact path="/login" component={Login} />
        </>
    );
}

export default App;
