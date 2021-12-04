import { useState, React } from 'react';
import "./Login.css";
import text from './component/Text';
import axios from 'axios';
import { Redirect } from 'react-router';

const Login = ({setUser}) => {
    const [userName, setUsername] = useState("");
    const [passWord, setPassword] = useState("");

    const loginfunction = async e => {
        e.preventDefault();
        const loginForm = document.getElementById("login-form");
        
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        console.log("sumbit clicked");
        
        if (username === "guest" && password === "guest") {
            text.value = "Logout";
            setPassword(password);
            setUsername(username);
            console.log(" ");
            console.log("logged in user");
            console.log("username: "+username);
            console.log("password: "+password);
            //handle submit
            const c_user = { userName, passWord };
            // send the username and password to the server
            const response = await axios.post(
                "https://reqres.in/api/users",
                c_user
            );
            // set the state of the user
            setUser(response.data)
            // store the user in localStorage
            localStorage.setItem('user', response.data)
            console.log("POST response:");
            console.log(response.data)
            localStorage.setItem('status', "loggedin")
            alert("You have successfully logged in.");
            return window.location.reload();
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

    const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
    };

    //render() {
        return (
        <>
        <main id="main-holder">
            <h1 id="login-header">Login</h1>

            <div id="login-error-msg-holder">
                <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
            </div>
        
            <form id="login-form" onSubmit={loginfunction}>
                <label>
                    <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username" /> <br/>
                    <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" /> <br/>
                    <button type="submit" value="Login" id="login-form-submit"> Login </button>
                    <h4 class="signupbtn"> Don't have an account? <a href="/signup"> sign up </a></h4>
                </label>
            </form>
        </main>
    </>
  );
    //}
}

export default Login;
