import React, { useState, useEffect } from 'react';
import "./component/App.css";
import Home from './Home';
import {Switch, Route, Redirect} from "react-router-dom";
import About from './About';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Search from './component/Search';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';

function App() {
    const [dbData, setdbData] = useState({items: [], isFetching: false});

    useEffect(() => {
        const loadItems = async () => {    
                setdbData({items: [], isFetching: true});
                const response = await axios.get('ProdData.json');
                console.log("fetch response1: ");
                console.log(response.data);
                setdbData({items: response.data, isFetching: false});
        };
        loadItems();
        console.log("loadItems successful");
    }, []);

    const temp = (localStorage.getItem("status")!== null);
    const [loggedin, setLoggedIn] = useState({val: temp});

    console.log("storage:");
    console.log(localStorage.getItem("user") !== null);
    console.log(localStorage.getItem("status")!== null);

    if(loggedin.val) {
        return(
            <>
            <div class="page">
            <NavBar />
            <Switch>
                {loggedin.val && (
                    <Redirect from="/login" to="/home" exact />
                )}

                {loggedin.val && (
                    <Redirect from="/" to="/home" exact />
                )}

                {loggedin.val && (
                    <Route 
                        exact path="/logout" 
                        render={() => {
                            setLoggedIn({val: false});
                            localStorage.removeItem('user');
                            localStorage.removeItem('status');
                            return  <Route exact path="/login">
                                        <Login />
                                    </Route>
                        }} />
                )}

                {loggedin.val && (
                    <Route exact path="/about" component={About} />
                )}

                {loggedin.val && (
                    <Route exact path="/home"> 
                        <Home 
                            items={dbData.items}
                            isFetching={dbData.isFetching} />
                    </Route>
                )} 

                {loggedin.val && (
                    <Route exact path="/products"> 
                        <Search 
                            items={dbData.items}
                            isFetching={dbData.isFetching}
                            />
                    </Route>
                )}         
            </Switch>
            <Footer />
            </div>
            </>
        );
    } else {

    return(
        <>
        {console.log(loggedin.val)}
        <main> 
        <Switch> 
            {!loggedin.val && (
                <Redirect from="/" to="/login" exact />
            )}

            {!loggedin.val && (
                <Redirect from="/home" to="/login" exact />
            )}

            {!loggedin.val && (
                <Redirect from="/home" to="/login" exact />
            )}

            {!loggedin.val && (
                <Route exact path="/login">
                    <Login />
                </Route>
            )}

            {!loggedin.val && (
                <Route exact path="/signup" component={Signup}/>
            )}

            {!loggedin.val && (
                <Redirect from="/logout" to="/login" exact />
            )}        
        </Switch>
        </main>
        </>
    ) 
    }
}

export default App;
