import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./component/App.css";
import "./Login.css"
import db_API from './component/API';
import swal from 'sweetalert';

function Signup() {
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //localStorage.clear()
        const existingUsers = localStorage.getItem('users')
        setUsers(existingUsers ? JSON.parse(existingUsers) : [])

        console.log("users: " + localStorage.getItem('users'))

        const loggedInUser = localStorage.getItem("users");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
        console.log("user:" + user);
    }, []);

    const filterUser = (user, username) => { 
        let temp = false;

        user.filter(item => {
            console.log("search username: "+ username);
            const searchedItem = item.username.includes(username);
            if(searchedItem) {
                let temp = true
            }
        })
        return temp
    }

    const filterMail = (user, email) => {
        let temp = false;
        user.filter(item => {
            console.log("search username: "+ email);
            const searchedItem = item.email.includes(email);
            if(searchedItem) {
                let temp = true
            }
        })
        return temp
    }

    const signupfunction = async e => {
        e.preventDefault();
        document.querySelector( "#username-field" ).setCustomValidity( '' );
        document.querySelector( "#password-field").setCustomValidity( '' );
        document.querySelector( "#retypepassword-field").setCustomValidity( '' );        
        document.querySelector( "#email-field").setCustomValidity( '' );
        const loginForm = document.getElementById("login-form");
    
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        const email = loginForm.email.value;
        const retypepassword = loginForm.retypepassword.value;

        if( !email ) {
            document.querySelector( "#email-field").setCustomValidity( "Please fill in this field" );
        } else if (!username) {
            document.querySelector( "#username-field").setCustomValidity( "Please fill in this field" );
        } else if( !password) {
            document.querySelector( "#password-field").setCustomValidity( "Please fill in this field" );
        } else {
            let founduser = filterUser(user, username);
            let foundmail = filterMail(user, email);

            if(foundmail) {
                document.querySelector( "#email-field").setCustomValidity( "This email is already registered" );
            } else if (founduser) { 
                document.querySelector( "#username-field").setCustomValidity( "This username is already registered" );
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
                const next = [...users, c_user]
                console.log("next users: " + next)
                setUsers(next)
                localStorage.setItem('users', JSON.stringify(next))

                swal("You're now registered", "Tell the minion your name. they'll let you in.", "success", {button: true})
                .then(() => {
                    window.location.pathname = "/login";
                })
            }
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
                    <input type="email" name="email" id="email-field" class="login-form-field" placeholder="email" /> <br/>
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