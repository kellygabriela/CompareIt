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
                    <Link to="/"><img src="https://www.freepnglogos.com/uploads/shopee-logo/logo-shopee-png-images-download-shopee-1.png" alt=" " width="200px" /></Link>
                </div>
                <nav>
                    <ul id="MenuItems" class="MenuItems" onClick="document.getElementById('MenuItems').style.maxHeight = '0px'">
                        <li><Link to="/">Home</Link></li>
                        <div class="dropdown">
                            <li class="dropbtn"><Link to="/products">Products</Link></li>
                            <div class="dropdown-content">
                                <a href="http://www.google.com">baju kali</a>
                                <a href="http://www.google.com">spatu kali</a>
                                <a href="http://www.google.com">kaos kali</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <li class="dropbtn"><Link to="/about">About</Link></li>
                        {/*  <div class="dropdown-content">
                                <a href="http://www.google.com">baju kali</a>
                                <a href="http://www.google.com">spatu kali</a>
                                <a href="http://www.google.com">kaos kali</a>
                            </div> */}
                        </div>
                    </ul>
                </nav>
                
                {/*<img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" class="nav-icon" width="30px" height="30px" alt=" " />*/}
                <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" class="menu-icon" onClick={this.menutoggle} alt=" "/>
                <li class="login-navbar"><Link to="/login">Login</Link></li>
            </div>
        );
    }
}

export default NavBar;
