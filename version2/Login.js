import React from 'react';
import "./App.css";
//import Footer from './Footer';
//import NavBar from './NavBar';
//import Search from './Search';

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "guest" && password === "guest") {
        alert("You have successfully logged in.");
        window.location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

class Login extends React.Component{
    render(){
        return(
            <>   
            
         
            </>
        );
    }
}

export default Login;
