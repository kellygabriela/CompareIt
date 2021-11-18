import React from 'react';
import "./App.css";

class Featured extends React.Component{
    render(){
        return(
            <>
            {/*featured categories*/}
            <div class="small-container">
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
                            <i class="fa fa-star-o"></i>
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
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$500.00</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Featured;