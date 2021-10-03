import React from 'react';
import "./App.css";
import Featured from './Featured';
import Footer from './Footer';
import NavBar from './NavBar';

class Home extends React.Component{
    render(){
        return(
        <>
            <div class="header">
                <div class="container">
                    <NavBar />
                    <div class="row">
                        <div class="col-2">
                            <h1> WHATS ON <br />      SALE </h1>
                            <p> ini omong kosong tolong d ganti pas udah mau di kumpul ya.ato pas mau
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
            
            <div class="categories">
                <div class="small-container">
                    <div class="row">
                        <div class="col-3">
                            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/47922912-39af-49e3-ac43-d11aac1ac7ba/air-jordan-1-mid-shoes-scZZ99.png" class="item-img" alt=" "/>
                            <a href=" " class="btn"> Shop now &#8594;</a>
                        </div>
                        <div class="col-3">
                            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b9bc37ba-c4e3-4fdd-b7c5-f62de33cbbe8/air-jordan-1-mid-shoes-N1GfGx.png" class="item-img" alt=" "/>
                            <a href=" " class="btn"> Shop now &#8594;</a>
                        </div>
                        <div class="col-3">
                            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/058a81e7-963c-4236-a350-6599ce5d1fec/air-jordan-1-mid-se-shoes-6d14MT.png" class="item-img" alt=" "/>
                            <a href=" " class="btn"> Shop now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*featured categories*/}
            <Featured />

            {/*offer*/}
            <div class="offer">
                <div class="small-container">
                    <div class="row">
                        <div class="col-2">
                            <img src="https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/037/235/328/original/569208_01.jpg.jpeg?1590685234" class="offer-img" alt=" "/>
                        </div>
                        <div class="col-2">
                            <p> Available now </p>
                            <h1> Nike Air Jordan X Dior </h1>
                            <p class="small"> insert kata kata disini tolong insert apapun insert kata kata disini
                            tolong insert apapun insert kata kata disini tolong insert apapun
                            insert kata kata disini tolong insert apapun </p>
                        </div>
                    </div>
                </div>
            </div>
            

            {/*ni buat orang2 testi stuff kalo gamau jg gpp*/} 
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
            </div>

            {/*ini buat brands ny*/} 
            <div class="brands">
                <div class="small-container">
                    <div class="row">
                        <div class="col-5">
                            <img src="https://i.pinimg.com/originals/57/2c/7e/572c7e441817edf2fcd4688ff1261214.png"width = "200px" alt=" "/>
                        </div>
                        <div class="col-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fila_logo.svg/2560px-Fila_logo.svg.png"width = "200px" alt=" "/>
                        </div>
                        <div class="col-5">
                            <img src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"width = "200px" alt=" "/>
                        </div>
                        <div class="col-5">
                            <img src="https://logos-world.net/wp-content/uploads/2020/06/Converse-Logo-2003-2007.png"width = "200px" alt=" "/>
                        </div>
                        <div class="col-5">
                            <img src="https://i.pinimg.com/originals/57/2c/7e/572c7e441817edf2fcd4688ff1261214.png"width = "200px" alt=" "/>
                        </div>
                    </div>
                </div>
            </div>

            {/*footer*/} 
            <Footer />
        </>
        );
    }
}

export default Home;
