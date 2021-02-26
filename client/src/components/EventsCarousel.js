import React from 'react';
import 'animate.css/animate.min.css';

function EventCarousel() {

    const createAnimation = (e) => {
        let div = e.target.parentElement;
        div.classList.add('animate__animated','animate__pulse');
        document.documentElement.style.setProperty('--animate-duration', '3s');
    }

    const removeAnimation = (e) => {
        let div = e.target.parentElement;
        div.classList.remove('animate__animated','animate__pulse');
    }

    return (
        <div>
            {/**lg only**/}
            <div className="row my-4 justify-content-center d-md-block d-none" id="carousel-container">
                <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"/>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                aria-label="Slide 2"/>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                aria-label="Slide 3"/>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                                aria-label="Slide 4"/>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                                aria-label="Slide 5"/>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img onMouseEnter={createAnimation} onMouseLeave={removeAnimation} src={require('../img/foto_homepage/carousel/lg/battesimo.png')} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="h3">Battesimo</h5>
                                    <p className="lead">Potrai trovare tutti i tipi di oggetti per il Battesimo</p>
                                </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={require('../img/foto_homepage/carousel/lg/laurea.png')} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="h3">Laurea</h5>
                                    <p className="lead">Vieni a vedere i nostri prodotti per laurea</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../img/foto_homepage/carousel/lg/matrimonio.png')} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="h3">Matrimonio</h5>
                                    <p className="lead">Festeggia le tue nozze da noi con il nostro fantastico catalogo</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../img/foto_homepage/carousel/lg/nascita.png')} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="h3">Nascita</h5>
                                <p className="lead">Tutte le nostre bomboniere per nascita le trovi qui</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../img/foto_homepage/carousel/lg/prima_comunione.png')} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="h3">Prima Comunione</h5>
                                <p className="lead">Da noi la Prima Comunione sarà ancora più speciale</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/**sm only*/}
            <div className="row my-4 justify-content-center d-md-none d-block" id="carousel-container-sm">
                <div id="carouselExampleDarkSm" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDarkSm" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"/>
                        <button type="button" data-bs-target="#carouselExampleDarkSm" data-bs-slide-to="1"
                                aria-label="Slide 2"/>
                        <button type="button" data-bs-target="#carouselExampleDarkSm" data-bs-slide-to="2"
                                aria-label="Slide 3"/>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={require('../img/foto_homepage/carousel/sm/battesimo.png')} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-block d-md-none">
                                <h5 className="h2">Battesimo</h5>
                                <p className="lead">Potrai trovare tutti i tipi di oggetti per il Battesimo</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <img src={require('../img/foto_homepage/carousel/sm/laurea.png')} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-block d-md-none">
                                <h5 className="h2">Laurea</h5>
                                <p className="lead">Vieni a vedere i nostri prodotti per laurea</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../img/foto_homepage/carousel/sm/matrimonio.png')} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-block d-md-none">
                                <h5 className="h3">Matrimonio</h5>
                                <p className="lead">Festeggia le tue nozze da noi con il nostro fantastico catalogo</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDarkSm"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDarkSm"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCarousel;