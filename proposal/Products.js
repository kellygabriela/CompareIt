import React from 'react';
import "./component/App.css";
import "./component/Search.css";
import Footer from './component/Footer';
import Search from './component/Search';
import {NavLink, Link} from "react-router-dom";

function NavBar(){
    function menutoggle() {
        if (document.getElementById('MenuItems').style.maxHeight === "0px") {
            document.getElementById('MenuItems').style.maxHeight = "200px";
            document.getElementById('dummy-div').style.height = "130px";
        } else {
            document.getElementById('MenuItems').style.maxHeight = "0px";
            document.getElementById('dummy-div').style.height = "0px";
        };
    }

    return(   
        <>   
            <div class="navbar">
                <div class="app-logo">
                    <Link to="/"><img src="https://images-ext-2.discordapp.net/external/6XpAv9LnRxp2-KK3GT_CsUYBukjnv3CUr7EEnr_2kEo/https/blogger.googleusercontent.com/img/a/AVvXsEisX33zecaRLzHTN1yd57kS5yE_WJImMJ2HBTdtvO2unfY7XGh-bj2lnhXg7GQ5BWf_wldKqBrIh6KgLGDJ5XtFwZIbGSw5nKbkk5W_cR0NVZJvVjUdCOErYcnZ0gVKUqkmekCWsErp1ca3Hjb39JNV2DT4e3NTEkhP8tahOniaTHpx_kwdk9mNGxWX5A%3Ds504?width=495&height=181" alt=" " width="200px" /></Link>
                </div>
                <nav>
                    <ul id="MenuItems" class="MenuItems">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        {/*<div class="dropdown">
                        <li class="dropbtn"></li>
                            <div class="dropdown-content">
                                <a href="http://www.google.com">baju kali</a>
                                <a href="http://www.google.com">spatu kali</a>
                                <a href="http://www.google.com">kaos kali</a>
                            </div>
        </div>*/}
                        <li><NavLink to="/about">About</NavLink></li>
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
                <img src="phone-menu-icon-navbar.png" class="menu-icon" onClick={menutoggle} alt=" "/>
                <li class="login-navbar"><NavLink to="/Login">Logout</NavLink></li>
            </div>
        </>
    );
}

class Products extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    {NavBar()}
                </div>
                <div id="dummy-div"></div>
            </div>
            <div class="container-s">
                <Search />
            </div>
            <Footer />
            </>
        );
    }
}

export default Products;
