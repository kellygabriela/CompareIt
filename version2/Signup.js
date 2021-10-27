import React from 'react';
import "./App.css";
import "./Login.css"
//import isLoggedIn from './isLoggedIn';
//import userStore from './userStore';


class Signup extends React.Component {
    signupfunction = () => {
        const loginForm = document.getElementById("login-form");
    
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        console.log("sumbit clicked")
        
        if (username === "guest") {
            alert("You have successfully logged in.");
            return this.props.history.push('/');
        } else {
            alert("Invalid username and/or password");
            document.getElementById("login-form").reset();
        }
    }

    render() {
        return (
        <>
        <main id="main-holder">
            <h1 id="login-header">Signup</h1>

            <div id="login-error-msg-holder">
                <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
            </div>
        
            <form id="login-form">
                <label>
                    <input type="text" name="email" id="email-field" class="login-form-field" placeholder="email" /> <br/>
                    <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username" /> <br/>
                    <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" /> <br/>
                    <button type="submit" value="Login" id="login-form-submit" onClick={this.loginfunction}> Sign up </button>
                    <a href="/login" class="loginbtn" display ="inline-block"> back to login </a>
                    
                  
                </label>
            </form>
        </main>
    </>
  );
    }
}

export default Signup;