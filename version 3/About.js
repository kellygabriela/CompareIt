import React from 'react';
import "./component/App.css";
import Footer from './component/Footer';
import NavBar from './component/NavBar';

class About extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    <NavBar />
                    <div class="row">
                        <div class="col-2">
                            <h1> ABOUT PAGE </h1>
                            <p> CompareIt is a web application where users can compare product's prices 
                                in one page without the need of switching through websites </p>
                        </div>
                        <div class="col-2">
                            <img src="https://www.pngkey.com/png/full/115-1157788_jordan-1-retro-high-air-jordan-1-bred.png" alt=" " />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default About;
