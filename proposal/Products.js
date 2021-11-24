import React from 'react';
import "./component/App.css";
import "./component/Search.css";
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import Search from './component/Search';

class Products extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    <NavBar />
                </div>
                <div id="dummy-div"></div>
            </div>
            <div class="container-s">
                <Search />
            </div>
            <Footer />
            </>
        );
    }
}

export default Products;
