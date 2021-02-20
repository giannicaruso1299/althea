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
                            <img className="d-block w-100" src={require('../img/foto_homepage/babyunicornad.jpg')} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/cuoreconsacrafamigliadeboracarlucci.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/cab69506cm5cab69507.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/cab69565b20x13xh175.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/dc6326.jpg')} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3 justify-content-center mx-1">
                <h3 className="mb-3">Testo seconda parte homepage</h3>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require('../img/foto_homepage/ec0f217522ed4f80915c33bccea8b841.jpg')} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/img_1933.jpg')} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/lineaderutadolcicose.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/lineahomefragrancedeboracarlucci.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/lineasolidaleincucinacabim5.jpg')} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../img/foto_homepage/mod1ad.jpg')} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageCorpo;