import React from 'react';
import "./component/App.css";

class About extends React.Component{
    render(){
        return(
            <>
            <div class="container" style={{minHeight: "350px"}}>
                <h1>This is About Page</h1>
                <p>write description about the team and project <br/> as well as introduction about the app </p>
            </div>
            </>
        );
    }
}

export default About;
