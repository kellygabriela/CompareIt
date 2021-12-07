import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./component/App.css";
import "./Login.css"
import db_API from './component/API';
import swal from 'sweetalert';

function Signup() {
    const [user, setUser] = useState({});

    useEffect(() => {
        //localStorage.clear()
        const loggedInUser = localStorage.getItem("user_su");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    const signupfunction = async e => {
        
        e.preventDefault();
        const loginForm = document.getElementById("login-form");
    
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        const email = loginForm.email.value;
        const retypepassword = loginForm.retypepassword.value;

        
        if( email === user.email) {
            document.querySelector( "#email-field").setCustomValidity( "This email is already registered" );
        } else if( !email ) {
            document.querySelector( "#email-field").setCustomValidity( "Please fill in this field" );
        } else if (username === user.username) { 
            document.querySelector( "#username-field").setCustomValidity( "This username is already registered" );
        } else if (!username) {
            document.querySelector( "#username-field").setCustomValidity( "Please fill in this field" );
        } else if( !password) {
            document.querySelector( "#password-field").setCustomValidity( "Please fill in this field" );
        } else if (password.length < 8) {
            document.querySelector( "#password-field").setCustomValidity( "Password length must be atleast 8 characters" );
        } else if (retypepassword !== password) {
            document.querySelector( "#retypepassword-field").setCustomValidity( "Password is not the same" );        
        }else {
            console.log(" ");
            console.log("signed in user");
            console.log("username: "+username);
            console.log("password: "+password);
            console.log("email: "+email);
            //handle submit
            const c_user = { email, password, username };
            // send the username and password to the server
            const response = await axios.post(
                db_API,
                c_user
            );
            localStorage.setItem('user_su', JSON.stringify(response.data));
            console.log("POST response:");
            console.log(response.data)
            swal("You're now registered", "Tell the minion your name. they'll let you in.", "success", {button: true})
            .then(() => {
                window.location.pathname = "/login";
            })
        }

        //update warning if any
        document.querySelector( "form" ).reportValidity();
        document.getElementById("login-form").reset();
    }

    //render() {
        return (
        <>
        <div class="cont">
        <main id="main-holder">
            <h1 id="login-header">Signup</h1>

            <div id="login-error-msg-holder">
                <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
            </div>
        
            <form id="login-form" onSubmit={signupfunction}>
                <label>
                    <input type="text" name="email" id="email-field" class="login-form-field" placeholder="email" /> <br/>
                    <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username" /> <br/>
                    <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" /> <br/>
                    <input type="password" name="retypepassword" id="retypepassword-field" class="login-form-field" placeholder="Confirm Password" /> <br/>
                    <button type="submit" value="Login" id="login-form-submit"> Sign up </button>
                    <h4 class="loginbtn"><a href="/login"> back to login </a></h4>
                </label>
            </form>
        </main>
        </div>
    </>
  );
    //}
}

export default Signup;