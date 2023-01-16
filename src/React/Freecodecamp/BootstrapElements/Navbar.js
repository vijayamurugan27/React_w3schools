import React from 'react';

function Navbar(){
    return (
        
        <div>
            <h2>This is from Navbar</h2>
            <div>
            <center>
        <h1 className="text-success">Next Level Training.</h1>
        <h4>Bootstrap | Carousel</h4>
        <div id="myCarousel" className="carousel slide"
                data-ride="carousel">
            

            <ol className="carousel-indicators">
                <li data-target="#myCarousel"
                    data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel"
                    data-slide-to="1"></li>
                <li data-target="#myCarousel"
                    data-slide-to="2"></li>
            </ol>
            
            <div className="carousel-inner">
                <div className="item active">
                    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190603152813/ml_gaming.png"></img>
                </div>
                <div className="item">
                    <img src= "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190528184201/gateexam.png"></img>
                </div>
                <div className="item">
                    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190507183137/Embedded-System-Programming-Languages.png"></img>
                </div>
            </div>
            
            <a className="left carousel-control"
                    href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control"
                    href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </center>
            </div>
        </div>
        
    )
}

export default Navbar;