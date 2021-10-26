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
                <h1 class="titleMain"> What are your searching for? </h1>
                <div class ="search-container">
                <div id="searchWrapper">
                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="search here..."
                    />
                
                </div>
                </div>
                <ul id="ItemsList"></ul>
                <script>
                    <Search />
                </script>
            </div>
            <div class="categories">
                <div class="small-container">
                    <div class="row">
                        <div class="col-3">
                            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/47922912-39af-49e3-ac43-d11aac1ac7ba/air-jordan-1-mid-shoes-scZZ99.png" class="item-img" alt=" "/>
                            <a href="/productpage" class="btn"> Shop now &#8594;</a>
                           
                            
                        </div>
                        <div class="col-3">
                            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b9bc37ba-c4e3-4fdd-b7c5-f62de33cbbe8/air-jordan-1-mid-shoes-N1GfGx.png" class="item-img" alt=" "/>
                            <a href="/productpage" class="btn"> Shop now &#8594;</a>
                        </div>
                        <div class="col-3">
                            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/058a81e7-963c-4236-a350-6599ce5d1fec/air-jordan-1-mid-se-shoes-6d14MT.png" class="item-img" alt=" "/>
                            <a href="/productpage" class="btn"> Shop now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
            
        );
    }
}

export default Products;

