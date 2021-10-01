import React from 'react';
import "./App.css";
import Products from './Products';
import Home from './Home';
import {Route} from "react-router-dom";
import About from './About';
import Contacts from './Contacts';

function App(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
        </>
    );
}

export default App;
