import React from 'react';
import "./component/App.css";
import Home from './Home';
import {Route, Switch} from "react-router-dom";
import About from './About';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Search from './component/Search';

function App(){
    return(
        <>
        <div class="header">
        <NavBar />
        </div>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/products" component={Search} />
            <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
        </>
    );
}

export default App;
