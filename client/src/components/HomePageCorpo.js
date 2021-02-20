import React from 'react';
import Header from "./Header";
import Affiliati from "./Affiliati";
// import Footer from "./Footer";

function HomePageCorpo() {
    return (
        <div className="container-fluid mb-5">
            <Affiliati/>
            <Header/>
            <div className="row mt-3 justify-content-center mx-1">
                <h3 className="mb-3">Testo prima parte homepage</h3>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require('../img/foto_homepage/1.png')} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/2.png')} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/3.png')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/4.png')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/5.png')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/6.png')} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3 justify-content-center mx-1">
                <h3 className="mb-3">Testo seconda parte homepage</h3>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require('../img/foto_homepage/7.png')} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/8.png')} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/9.png')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/10.png')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/11.png')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/12.png')} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageCorpo;