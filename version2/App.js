import React from 'react';
import "./App.css";
import Products from './Products';
import Home from './Home';
import {Route} from "react-router-dom";
import About from './About';
import Contacts from './Contacts';
import ProductList from './ProductList';
//new
import Login from './Login';
import Signup from './Signup';

function App(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            {/*new*/}
            <Route exact path="/login" component={Login} />
            <Route exact path="/productlist" component={ProductList} /> 
            <Route exact path="/signup" component={Signup} /> 
        </>
    );
}

export default App;
