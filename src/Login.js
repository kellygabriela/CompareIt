import React from 'react';
import "./Login.css";
import text from './component/Text';

class Login extends React.Component {
    loginfunction = () => {
        const loginForm = document.getElementById("login-form");
        
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        console.log("sumbit clicked")
        
        if (username === "guest" && password === "guest") {
            text.value = "Logout";
            console.log(" ");
            console.log("logged in user");
            console.log("username: "+username);
            console.log("password: "+password);
            alert("You have successfully logged in.");
            return this.props.history.push('/');
        } else if (username === "guest") { 
            document.querySelector( "#password-field").setCustomValidity( "Password is invalid" );
        } else if (password === "guest") {
            document.querySelector( "#username-field" ).setCustomValidity( "Username is invalid" );
        } else {
            document.querySelector( "button" ).setCustomValidity( "Username and or password is invalid" );
        }

        //update warning if any
        document.querySelector( "form" ).reportValidity();
        document.getElementById("login-form").reset();
    }

    render() {
        return (
        <>
        {console.log(text.value)}
        <main id="main-holder">
            <h1 id="login-header">Login</h1>

            <div id="login-error-msg-holder">
                <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
            </div>
        
            <form id="login-form">
                <label>
                    <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username" /> <br/>
                    <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" /> <br/>
                    <button type="submit" value="Login" id="login-form-submit" onClick={this.loginfunction}> Login </button>
                    <h4 class="signupbtn"> Don't have an account? <a href="/signup"> sign up </a></h4>
                </label>
            </form>
        </main>
    </>
  );
    }
}

export default Login;
