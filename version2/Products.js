import React from 'react';
import "./App.css";
import Footer from './Footer';
import NavBar from './NavBar';
import Search from './Search';

class Products extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    <NavBar />
                    <div class="row">
                        <div class="col-2">
                            <h1> PRODUCT PAGE </h1>
                            <p> ini cuman omong kosong tologn d ganti pas udah mau di kumpul ya.ato pas mau
                            di check juga boleh di ganti gitu lala gua gtau mau type apa lagi tapi
                            biar bagus aja kyk tulisanny banyak gitu ok bye. </p>
                            <a href=" " class="btn"> Explore Now &#8594;</a>
                        </div>
                        <div class="col-2">
                            <img src="https://www.pngkey.com/png/full/115-1157788_jordan-1-retro-high-air-jordan-1-bred.png" alt=" " />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-s">
                <h1 class="titleMain">What are you searching?</h1>
                <div id="searchWrapper">
                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="Search here"
                    />
                </div>
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
