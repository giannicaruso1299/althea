import React from 'react';
import Header from "./Header";
import Affiliati from "./Affiliati";
// import Footer from "./Footer";

function HomePageCorpo() {
    return (
        <div className="container-fluid mb-5">
            <Affiliati/>
            <Header/>
            <h3 className="mb-3 mt-3 text-center">Testo prima parte homepage</h3>
            <div className="row mt-3 justify-content-center mx-1">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/1.jpg')} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/2.jpg')} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/3.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/4.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/5.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/6.jpg')} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="mb-3 text-center">Testo seconda parte homepage</h3>
            <div className="row mt-3 justify-content-center mx-1">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/7.jpg')} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/8.jpg')} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/9.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/10.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/11.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={require('../img/foto_homepage/12.jpg')} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageCorpo;