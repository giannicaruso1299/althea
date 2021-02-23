import React from 'react';
import Header from "./Header";
import Affiliati from "./Affiliati";
// import EventsCarousel from "./EventsCarousel";
// import Footer from "./Footer";

function HomePageCorpo() {

    const array = [9,10,11,12,13,14];
    const array2 = [2,3,4,5,6,7];

    return (
        <div className="container-fluid mb-5">
            <Affiliati/>
            <Header/>
            {/*<EventsCarousel/>*/}
            {/**lg only**/}
            <div className="d-sm-block d-none">
                <div className="row mt-3 justify-content-center" id="carousel-container">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={require("../img/foto_homepage/lg/1.png")} alt="First slide"/>
                            </div>
                            {array2.map(item => (
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require(`../img/foto_homepage/lg/${item}.png`)} alt={`${item} slide`}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/**sm only*/}
            <div className="d-sm-none d-block">
                <div className="row mt-3 justify-content-center" id="carousel-container-sm">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={require(`../img/foto_homepage/sm/8.png`)} alt="First slide"/>
                            </div>
                            {array.map(item => (
                                <div className="carousel-item">
                                    <img className="d-block" src={require(`../img/foto_homepage/sm/${item}.png`)} alt={`${item} slide`}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageCorpo;