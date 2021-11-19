import React from 'react';
import "./component/App.css";
import "./Login.css"
//import isLoggedIn from './isLoggedIn';
//import userStore from './userStore';


class Signup extends React.Component {
    signupfunction = () => {
        const loginForm = document.getElementById("login-form");
    
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        const email = loginForm.email.value;
        const retypepassword = loginForm.retypepassword.value;

        
        if( email === "guest@example.com") {
            document.querySelector( "#email-field").setCustomValidity( "This email is already registered" );
            document.querySelector( "form" ).reportValidity();
            document.getElementById("login-form").reset();
        } else if( email === "") {
            document.querySelector( "#email-field").setCustomValidity( "Please fill in this field" );
            document.querySelector( "form" ).reportValidity();
            document.getElementById("login-form").reset();
        } else if (username === "guest") { 
            document.querySelector( "#username-field").setCustomValidity( "This username is already registered" );
            document.querySelector( "form" ).reportValidity();
            document.getElementById("login-form").reset();
        } else if (username === "") {
            document.querySelector( "#username-field").setCustomValidity( "Please fill in this field" );
            document.querySelector( "form" ).reportValidity();
            document.getElementById("login-form").reset();
        } else if( password === "") {
            document.querySelector( "#password-field").setCustomValidity( "Please fill in this field" );
            document.querySelector( "form" ).reportValidity();
            document.getElementById("login-form").reset();
        } else if (retypepassword !== password) {
            document.querySelector( "#retypepassword-field").setCustomValidity( "Password is not the same" );
            document.querySelector( "form" ).reportValidity();
            document.getElementById("login-form").reset();
        } else if (password.length <= 7) {
            document.querySelector( "#retypepassword-field").setCustomValidity( "Password length must be atleast 8 characters" );
            document.querySelector( "form" ).reportValidity();
            document.getElementById("login-form").reset();
        }else {
            alert("You have successfully register your account.");
            return this.props.history.push('/Login');
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
                    <input type="password" name="retypepassword" id="retypepassword-field" class="login-form-field" placeholder="Confirm Password" /> <br/>
                    <button type="submit" value="Login" id="login-form-submit" onClick={this.signupfunction}> Sign up </button>
                    <h4 class="loginbtn"><a href="/login"> back to login </a></h4>
                </label>
            </form>
        </main>
    </>
  );
    }
}

export default Signup;
