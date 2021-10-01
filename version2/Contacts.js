import React from 'react';
import "./App.css";
import Footer from './Footer';
import NavBar from './NavBar';

class Contacts extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    <NavBar />
                        <div class="col-2">
                            <h1> CONTACT PAGE </h1>
                            <p> this is rubbish talking please change this when udah mau di kumpul ya.ato pas mau
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