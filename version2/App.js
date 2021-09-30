import React from 'react';
import "./App.css";

class App extends React.Component{
    menutoggle = () => {
        if (document.getElementById('MenuItems').style.maxHeight === "0px") {
            document.getElementById('MenuItems').style.maxHeight = "200px"
        } else {
            document.getElementById('MenuItems').style.maxHeight = "0px"
        };
        console.log(document.getElementById('MenuItems').style.maxHeight);
    }

    render(){
        return(
            <><div class="header">
                <div class="container">
                    <div class="navbar">
                        <div class="logo">
                            <img src="https://www.freepnglogos.com/uploads/shopee-logo/logo-shopee-png-images-download-shopee-1.png" alt=" " width="250px" />
                        </div>
                        <nav>
                            <ul id="MenuItems" class="MenuItems">
                                <li><a href="http://www.google.com">Home</a></li>
                                <div class="dropdown">
                                  <li class="dropbtn">Products</li>
                                  <div class="dropdown-content">
                                    <a href="http://www.google.com">baju kali</a>
                                    <a href="http://www.google.com">spatu kali</a>
                                    <a href="http://www.google.com">kaos kali</a>
                                  </div>
                                </div>
                                <div class="dropdown2">
                                    <li class="dropbtn2">About</li>
                                    <div class="dropdown-content2">
                                        <a href="http://www.google.com">nama</a>
                                        <a href="http://www.google.com">owner</a>
                                  </div>
                                </div>
                                <li><a href="http://www.google.com">Contacts</a></li> 
                            
                            </ul>
                        </nav>
                        <img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" width="30px" height="30px" alt=" " />
                        <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" class="menu-icon" onClick={this.menutoggle} alt=" "/>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <h1> WHATS ON <br />      SALE </h1>
                            <p> this is rubbish talking please change this when udah mau di kumpul ya.ato pas mau <br/>
                            di check juga boleh di ganti gitu lala gua gtau mau type apa lagi tapi<br/>
                            biar bagus aja kyk tulisanny banyak gitu ok bye. </p>
                            <a href=" " class="btn"> Explore Now &#8594;</a>
                        </div>
                        <div class="col-2">
                            <img class="float-right" src="https://www.pngkey.com/png/full/115-1157788_jordan-1-retro-high-air-jordan-1-bred.png" alt=" " />
                        </div>
                    </div>
                </div>
            </div><div class="categories">
                    <div class="small-container">
                        <div class="row">
                            <div class="col-3">
                                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/47922912-39af-49e3-ac43-d11aac1ac7ba/air-jordan-1-mid-shoes-scZZ99.png" width="500px" alt=" "/>
                                <a href=" " class="btn"> Shop now &#8594;</a>
                            </div>
                            <div class="col-3">
                                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b9bc37ba-c4e3-4fdd-b7c5-f62de33cbbe8/air-jordan-1-mid-shoes-N1GfGx.png" width="500px" alt=" "/>
                                <a href=" " class="btn"> Shop now &#8594;</a>
                            </div>
                            <div class="col-3">
                                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/058a81e7-963c-4236-a350-6599ce5d1fec/air-jordan-1-mid-se-shoes-6d14MT.png" width="500px" alt=" "/>
                                <a href=" " class="btn"> Shop now &#8594;</a>
                            </div>
                        </div>
                    </div>

            {/*featured categories*/}
                </div><div class="small-container">
                    <h2 class="title">Featured Products</h2>
                    <div class="row">
                        <div class="col-4">
                            <img src="https://www.sneakersnstuff.com/images/275292/555088-105-5.jpg" alt=" "/>
                            <h4>Retro jordan high</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>$500.00</p>
                        </div>
                        <div class="col-4">
                            <img src="https://www.sneakersnstuff.com/images/286977/555088-134-6.jpg" alt=" "/>
                            <h4>Retro jordan high</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>$500.00</p>
                        </div>
                        <div class="col-4">
                            <img src="https://www.sneakersnstuff.com/images/275013/dc1788-100-7.jpg" alt=" "/>
                            <h4>Retro jordan high</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>$500.00</p>
                        </div>
                    </div>

            {/*offer*/}
                </div><div class="offer">
                    <div class="small-container">
                        <div class="row">
                            <div class="col-2">
                                <img src="https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/037/235/328/original/569208_01.jpg.jpeg?1590685234" class="offer-img" alt=" "/>
                            </div>
                            <div class="col-2">
                                <p> Available now </p>
                                <h1> Nike Air Jordan X Dior </h1>
                                <small> insert kata kata disini tolong insert apapun insert kata kata disini <br />
                                    tolong insert apapun insert kata kata disini tolong insert apapun<br />
                                    insert kata kata disini tolong insert apapun </small>
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

            {/*ini buat brands ny*/} 
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for android and ios mobile phone</p>
                            <div class="app-logo">
                                <img src="http://assets.stickpng.com/thumbs/5a902dbf7f96951c82922875.png" alt="google play"/>
                                <img src="http://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png" alt="app store"/>
                            </div>
                        </div>
                        <div class="footer-col-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fila_logo.svg/2560px-Fila_logo.svg.png" alt=" "/> {/*harusnya logo compare it*/}
                            <p>insert kata kata disini tolong insert apapun insert kata kata disini </p>
                        </div>
                        <div class="footer-col-3">
                            <h3>Useful links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div class="footer-col-4">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <p class="copyright">Copyright 2020 - CompareIt</p> 
                </div>
            </div>
            </>
        )
    }
}

export default App;
