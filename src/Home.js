import React from 'react';
import "./component/App.css";
import "./OnePic.css";
import ProductList from './ProductList';
import OnePic from './OnePic';
import { Link } from 'react-router-dom';

const Home = (props) => {

    return(
    <>
        <div class="home-firstpage"> {/*ini butuh css baru karna sekarang g bisa ikut header */}
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <h1> WHATS ON SALE </h1>
                        <p>Search. Compare. Find the best deal. </p>
                        <Link to="/products" class="btn"> Explore Now &#8594;</Link>
                    </div>
                    <div class="col-2">
                        <img src="https://www.pngkey.com/png/full/115-1157788_jordan-1-retro-high-air-jordan-1-bred.png" alt=" " />
                    </div>
                </div>
            </div>
        </div>
        
        {/*sliced from product page*/}
    <div class= "col-18">
            <h1 class="title">Featured Items </h1>
        <ProductList 
            items={props.items}
            isFetching={props.isFetching}
            />
        </div>

        {/*offer*/}
        <div class= "col-8">
            <h1 class="title">OUR BEST ITEM</h1> 
        </div>
        <div class="offer">
            <div class="small-container">
                <div class="row">     
                    <div class="col-7">
                        <OnePic
                            items={props.items}
                            isFetching={props.isFetching}
                            />
                    </div>
                </div>
            </div>
        </div>
        

        {/*ni buat orang2 testi stuff kalo gamau jg gpp
        <div class="testimonial">
            <div class="small-container">
                <div class="row">
                    <div class="col-3">
                        <i class ="fa fa-quote-left"></i>
                        <p>halo ini testimonial orang bisa diisi<br/>ato giganti sama apapun yang mau hehe<br/> 
                        nanti kykny boleh ganti aja <br/>sih sebenerny gatau butuh testi ato ga </p>
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kendal-jenner-attends-the-amfar-cannes-gala-2019-at-hotel-news-photo-1582902260.jpg?crop=1.00xw:0.667xh;0,0.0250xh&resize=480:*" alt=" "/>
                        <h3>Nama orang</h3>
                    </div>
                    <div class="col-3">
                        <i class ="fa fa-quote-left"></i>
                        <p>halo ini testimonial orang bisa diisi<br/>ato giganti sama apapun yang mau hehe<br/> 
                        nanti kykny boleh ganti aja <br/>sih sebenerny gatau butuh testi ato ga </p>
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kendal-jenner-attends-the-amfar-cannes-gala-2019-at-hotel-news-photo-1582902260.jpg?crop=1.00xw:0.667xh;0,0.0250xh&resize=480:*" alt=" "/>
                        <h3>Nama orang</h3>
                    </div>
                    <div class="col-3">
                        <i class ="fa fa-quote-left"></i>
                        <p>halo ini testimonial orang bisa diisi<br/>ato giganti sama apapun yang mau hehe<br/> 
                        nanti kykny boleh ganti aja <br/>sih sebenerny gatau butuh testi ato ga </p>
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kendal-jenner-attends-the-amfar-cannes-gala-2019-at-hotel-news-photo-1582902260.jpg?crop=1.00xw:0.667xh;0,0.0250xh&resize=480:*" alt=" "/>
                        <h3>Nama orang</h3>
                    </div>
                </div>
            </div>
        </div> */} 

        {/*ini buat brands ny*/} 
        <div class="brands">
            <div class="small-container">
                <div class="row">
                    <div class="col-5">
                        <img src="https://i.pinimg.com/originals/57/2c/7e/572c7e441817edf2fcd4688ff1261214.png"width = "200px" alt=" "/>
                    </div>
                    <div class="col-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Coupang_logo.png"width = "200px" alt=" "/>
                    </div>
                    <div class="col-5">
                        <img src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"width = "200px" alt=" "/>
                    </div>
                    <div class="col-5">
                        <img src="https://play-lh.googleusercontent.com/U4fk5FzvwR4bPYWeTPmYX_Lpm3ANMHTcMEQ9qbrWO-qucIPPA9olM1bIiAmdZLpEIPMg"width = "200px" alt=" "/>
                    </div>
                    <div class="col-5">
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"width = "200px" alt=" "/>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Home;
