import React from 'react';
import "./App.css";
import {NavLink, Link} from "react-router-dom";

class NavBar extends React.Component{
    menutoggle = () => {
        if (document.getElementById('MenuItems').style.maxHeight === "0px") {
            document.getElementById('MenuItems').style.maxHeight = "200px";
        } else {
            document.getElementById('MenuItems').style.maxHeight = "0px";
        };
    }

    render(){
        return(   
            <>   
            <div class="navbar">
                <div class="app-logo">
                    <Link to="/"><img src="https://images-ext-2.discordapp.net/external/6XpAv9LnRxp2-KK3GT_CsUYBukjnv3CUr7EEnr_2kEo/https/blogger.googleusercontent.com/img/a/AVvXsEisX33zecaRLzHTN1yd57kS5yE_WJImMJ2HBTdtvO2unfY7XGh-bj2lnhXg7GQ5BWf_wldKqBrIh6KgLGDJ5XtFwZIbGSw5nKbkk5W_cR0NVZJvVjUdCOErYcnZ0gVKUqkmekCWsErp1ca3Hjb39JNV2DT4e3NTEkhP8tahOniaTHpx_kwdk9mNGxWX5A%3Ds504?width=495&height=181" alt=" " width="200px" /></Link>
                </div>
                <nav>
                    <ul id="MenuItems" class="MenuItems" onClick="document.getElementById('MenuItems').style.maxHeight = '0px'">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </nav>
                <img src="phone-menu-icon-navbar.png" class="menu-icon" onClick={this.menutoggle} alt=" "/>
                <li class="login-navbar"><NavLink to="/Login">Logout</NavLink></li>
            </div>
            </>
        );
    }
}

export default NavBar;
