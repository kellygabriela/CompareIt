import React, { useEffect, useState } from 'react';
import "./App.css";
import {Link, Redirect} from "react-router-dom";
import text from './Text';

const NavBar = () => {
    const [texts, setTexts] = useState("");
    const loggedInUser = (localStorage.getItem("status") !== null);

    useEffect(() => {
        if(loggedInUser) { //is not null
            return setTexts("Logout");
        } else {
            return setTexts("Login");
        }
    }, [])

    const menutoggle = () => {
        if (document.getElementById('MenuItems').style.maxHeight === "0px") {
            document.getElementById('MenuItems').style.maxHeight = "200px";
            document.getElementById('dummy-div').style.height = "130px";
        } else {
            document.getElementById('MenuItems').style.maxHeight = "0px";
            document.getElementById('dummy-div').style.height = "0px";
        };
    }

    //render() {
    return(   
        <>   
        <div class="header">
            <div class="container">
                <div class="navbar">
                    <div class="app-logo">
                        <Link to="/home"><img src="https://images-ext-2.discordapp.net/external/6XpAv9LnRxp2-KK3GT_CsUYBukjnv3CUr7EEnr_2kEo/https/blogger.googleusercontent.com/img/a/AVvXsEisX33zecaRLzHTN1yd57kS5yE_WJImMJ2HBTdtvO2unfY7XGh-bj2lnhXg7GQ5BWf_wldKqBrIh6KgLGDJ5XtFwZIbGSw5nKbkk5W_cR0NVZJvVjUdCOErYcnZ0gVKUqkmekCWsErp1ca3Hjb39JNV2DT4e3NTEkhP8tahOniaTHpx_kwdk9mNGxWX5A%3Ds504?width=495&height=181" alt=" " width="200px" /></Link>
                    </div>
                    <nav>
                        <ul id="MenuItems" class="MenuItems" onClick="document.getElementById('MenuItems').style.maxHeight = '0px'">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                    <img src="phone-menu-icon-navbar.png" class="menu-icon" onClick={menutoggle} alt=" "/>
                    {console.log(texts)}
                    <Link id="login_out" to="/logout">{texts}</Link>
                </div>
            </div>
            <div id="dummy-div"></div>
        </div>
        </>
    );
}//}  

export default NavBar;