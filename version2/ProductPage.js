import React from 'react';
import "./App.css";

class Featured extends React.Component{
    render(){
        return(
            <>
            {/*featured categories*/}
            <div class="small-container">
                <h2 class="title">Product Information</h2>
                <div class="row">
                    <div class="col-4">
                        <img src="https://www.sneakersnstuff.com/images/275292/555088-105-5.jpg" alt=" "/>
                        <h3>Retro jordan high</h3>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <h4>current best price: </h4>
                        <s>$500.00</s> 
                        <a href=" ">$450.00</a>
                        <p></p>
                        <a href="http://www.google.com" class="btn"> Shop this item &#8594;</a>

                        <h3 class ="productTitle"> Product details </h3>
                        <div class="column">
                         
                        <p> Brand: </p>
                        <p> Product name:   </p>
                        <p> Product Price:  </p>
                        <p> Product size:   </p>
                        </div>
                   
                        
                        <a href="/products" class="btn">&#8592; search another product </a>

                    </div>
                    
                 
                </div>
            </div>
            </>
        );
    }
}

export default Featured;