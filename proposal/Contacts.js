import React from 'react';
import "./component/App.css";
import Footer from './component/Footer';
import NavBar from './component/NavBar';

class Contacts extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    <NavBar />
                        <div class="col-2">
                            <h1> CONTACT PAGE </h1>
                            <p> tolong ganti kalo misalnya dh mau kumpul plz soalnya ini kata kosong 
                            di check juga boleh di ganti gitu lala gua gtau mau type apa lagi tapi
                            biar bagus aja kyk tulisanny banyak gitu ok bye. </p>
                            <a href=" " class="btn"> Contact Us Now &#8594;</a>
                        </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default Contacts;