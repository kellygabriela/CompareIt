import React from 'react';
import "./App.css";
import {Link} from "react-router-dom";

class NavBar extends React.Component{
    menutoggle = () => {
        if (document.getElementById('MenuItems').style.maxHeight === "0px") {
            document.getElementById('MenuItems').style.maxHeight = "200px"
        } else {
            document.getElementById('MenuItems').style.maxHeight = "0px"
        };
        console.log(document.getElementById('MenuItems').style.maxHeight);
    }

    render(){
        return(      
            <div class="navbar">
                <div class="app-logo">
                    <Link to="/"><img src="https://images-ext-2.discordapp.net/external/6XpAv9LnRxp2-KK3GT_CsUYBukjnv3CUr7EEnr_2kEo/https/blogger.googleusercontent.com/img/a/AVvXsEisX33zecaRLzHTN1yd57kS5yE_WJImMJ2HBTdtvO2unfY7XGh-bj2lnhXg7GQ5BWf_wldKqBrIh6KgLGDJ5XtFwZIbGSw5nKbkk5W_cR0NVZJvVjUdCOErYcnZ0gVKUqkmekCWsErp1ca3Hjb39JNV2DT4e3NTEkhP8tahOniaTHpx_kwdk9mNGxWX5A%3Ds504?width=495&height=181" alt=" " width="200px" /></Link>
                </div>
                <nav>
                    <ul id="MenuItems" class="MenuItems" onClick="document.getElementById('MenuItems').style.maxHeight = '0px'">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        {/*<div class="dropdown">
                        <li class="dropbtn"></li>
                            <div class="dropdown-content">
                                <a href="http://www.google.com">baju kali</a>
                                <a href="http://www.google.com">spatu kali</a>
                                <a href="http://www.google.com">kaos kali</a>
                            </div>
        </div>*/}
                        <li><Link to="/about">About</Link></li>
                        {/*<div class="dropdown">
                            <li class="dropbtn"></li>
                            <div class="dropdown-content">
                                <a href="http://www.google.com">baju kali</a>
                                <a href="http://www.google.com">spatu kali</a>
                                <a href="http://www.google.com">kaos kali</a>
                            </div>
    </div>*/}
                    </ul>
                </nav>
                {/*<img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" class="nav-icon" width="30px" height="30px" alt=" " />*/}
                <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" class="menu-icon" onClick={this.menutoggle} alt=" "/>
                <li class="login-navbar"><Link to="/Login">Logout</Link></li>
            </div>
        );
    }
}

export default NavBar;