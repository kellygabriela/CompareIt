import React, { useState, useEffect } from 'react';
import "./component/App.css";
import Home from './Home';
import {Switch, Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Search from './component/Search';
import axios from 'axios';

const Main = ({handleLogout}) => {
    const [dbData, setdbData] = useState({items: [], isFetching: false});

    console.log("boo");
    useEffect(() => {
        const loadItems = async () => {    
                setdbData({items: dbData.items, isFetching: true});
                const response = await axios.get('ProdData.json');
                console.log("fetch response1: ");
                console.log(response.data);
                setdbData({items: response.data, isFetching: false});
        };
        loadItems();
        console.log("loadItems successful");
    }, []);

    return(
        <>
        {console.log("reached return main")}
        <div class="header">
        <NavBar />
        </div>
        <Router>
        <Switch>
                <Route exact path="/home"> 
                    <Home 
                        items={dbData.items}
                        isFetching={dbData.isFetching} />
                </Route>
                <Route exact path="/products">
                    <Search 
                        items={dbData.items}
                        isFetching={dbData.isFetching} />
                </Route>
                <Route exact path="/about" component={About} />
        </Switch>
        </Router>
        <Footer />
        </>
    ) 
}

export default Main;
