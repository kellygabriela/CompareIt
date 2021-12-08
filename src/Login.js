import { React, useState, useEffect } from 'react';
import "./Login.css";
import axios from 'axios';
import db_API from './component/API';
import swal from 'sweetalert';

const Login = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        //localStorage.clear();
        const loggedInUser = localStorage.getItem("users");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    const filterUser = (user, username) => {
        let temp = {};
        let update = true;
        
        user.filter(item => {
            console.log("search username: "+ username);
            const searchedItem = item.username.includes(username);
            if(searchedItem) {
                temp = item;
                update = false;
            }
        })

        if(update) {
            return false;
        }
        return temp;
    }

    console.log("login user list");
    console.log(user);

    const loginfunction = async e => {
        e.preventDefault();
        document.querySelector( "#username-field" ).setCustomValidity( '' );
        document.querySelector( "#password-field").setCustomValidity( '' );
        document.querySelector( "button" ).setCustomValidity( '' );
        let error_val = "";
        const loginForm = document.getElementById("login-form");
        
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        console.log("sumbit clicked");

        if(!username || (user.length === 0)) {
            document.querySelector( "#username-field").setCustomValidity( "Username is invalid" );

        } else {
            let founduser = filterUser(user, username);
            console.log(founduser);
            if(!founduser) {
                document.querySelector( "#username-field").setCustomValidity( "Username is invalid" );
            }
            if (username === founduser.username && password === founduser.password) {
                //setPassword(pwd);
                //setUsername(usern);
                console.log(" ");
                console.log("logged in user");
                console.log("username: "+username);
                console.log("password: "+password);

                //handle submit
                localStorage.setItem('status', "loggedin")
                swal("Welcome Back!", "let the minion take your coat. enjoy.", "success", {button: true})
                .then(() => {
                    window.location.pathname = "/home";
                })
            } else if (username === founduser.username) { 
                document.querySelector( "#password-field").setCustomValidity( "Password is invalid" );
            } else if (password === founduser.password) {
                document.querySelector( "#username-field" ).setCustomValidity( "Username is invalid" );
            } else {
                document.querySelector( "button" ).setCustomValidity( "Username and or password is invalid" );
            }
        }

        //update warning if any
        document.querySelector( "form" ).reportValidity();
        document.querySelector( "form" ).reset();
        console.log("checked");
    }

    //render() {
        return (
        <>
        <div class="cont">
        <main id="main-holder">
            <h1 id="login-header">Login</h1>

            <div id="login-error-msg-holder">
                <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
            </div>
        
            <form id="login-form">
                <label>
                    <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username" /> <br/>
                    <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" /> <br/>
                    <button type="submit" value="Login" id="login-form-submit" onClick={loginfunction}> Login </button>
                    <h4 class="signupbtn"> Don't have an account? <a href="/signup"> sign up </a></h4>
                </label>
            </form>
        </main>
        </div>
    </>
  );
    //}
}

export default Login;
