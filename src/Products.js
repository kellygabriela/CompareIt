import React from 'react';
import "./component/App.css";
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import Search from './component/Search';
import SearchBar from './component/SearchBar';

class Products extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    <NavBar />
                </div>
            </div>
            <div class="container-s">
                <SearchBar />
                <ul id="ItemsList"></ul>
                <script>
                    <Search />
                </script>
            </div>
            <Footer />
            </>
        );
    }
}

export default Products;