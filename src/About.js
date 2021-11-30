import React from 'react';
import './About.css';


class About extends React.Component{
    render(){
        return(
            <>
            <div class="about-section" style={{minHeight: "350px"}}>
                <div class ="inner-container">
               
            <h1>About us</h1>
                <p>Compare it is designed to help users compare prices of items within various websites. </p>
                <p> With a click of a button, we can help the users to get the best prices available in the market.  </p>
                <p> compare your price now!</p>
                      

                </div>
             
            </div>
            <div class="developer-container">
                <h2 class="title">About the Developers</h2>
                <div class="developer-section">
                <small> Angelina Deby.........................Frontend Developer</small><br></br><br></br>
                <small> Kelly Gabriela..........................Frontend Developer</small><br></br><br></br>
                <small> Nadia Candra..........................Frontend Developer</small><br></br><br></br>
                
                    
          </div>
          <div class="developer2-section">
                <small> Tamira Siby..............................Backend Developer</small><br></br><br></br>
                <small> Munisa Kholikova....................Backend Developer</small><br></br><br></br>
                <small> Lee Hyeontaek........................Backend Developer</small><br></br><br></br>
          </div>
         
          </div>
            </>
        );
    }
}

export default About;