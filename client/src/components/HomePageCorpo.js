import React from 'react';
import Header from "./Header";
import Affiliati from "./Affiliati";
import EventsCarousel from "./EventsCarousel";
// import Footer from "./Footer";

function HomePageCorpo() {

    const array = [9,10,11,12,13,14];
    const array2 = [2,3,4,5,6,7];

    return (
        <div className="container-fluid mb-5">
            <Affiliati/>
            <Header/>
            <EventsCarousel/>
            <h2 className="text-center">Alcuni dei nostri prodotti</h2>
            {/**lg only**/}
            <div className="d-sm-block d-none">
                <div className="row mt-3 justify-content-center" id="carousel-container">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" id="carousel_home">
                                <img className="d-block w-100" src={require("../img/foto_homepage/lg/1.png")} alt="First slide"/>
                            </div>
                            {array2.map(item => (
                                <div className="carousel-item" key={item}>
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
                                <div className="carousel-item" key={item}>
                                    <img className="d-block" src={require(`../img/foto_homepage/sm/${item}.png`)} alt={`${item} slide`}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/**sm only*/}
            <div className="d-sm-none">
                <h3 className="text-center my-3">I nostri partner</h3>
                <div className="row d-sm-none d-flex flex-row justify-content-center">
                    <div className="col-4 my-2">
                        <a href="http://adsrl.com/2020_2021/AD_Catalogo_Collections_2020_21.pdf" rel="noopener noreferrer" target="_blank"><img src={require('../img/AD.png')} alt="AD Regali"/></a>
                    </div>
                    <div className="col-4 my-2">
                        <a href="https://www.cuorematto.org/" rel="noopener noreferrer" target="_blank"><img src={require('../img/cuorematto.png')} alt="Cuore Matto"/></a>
                    </div>
                    <div className="col-4 my-2">
                        <a href="http://www.rdmdesign.it/" rel="noopener noreferrer" target="_blank"><img src={require('../img/rdm.png')} alt="RDM"/></a>
                    </div>
                    <div className="col-4 my-2">
                        <a href="https://www.deboracarlucci.it/?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkMGyySF6FsE_xeWRejxYTiXgGO6d_AWfjq8Xg8o9qtHDBYQnPFuC5xoCPtMQAvD_BwE" rel="noopener noreferrer" target="_blank"><img src={require('../img/deboracarlucci.png')} className="w-100" alt="Debora Carlucci"/></a>
                    </div>
                    <div className="col-4 my-2">
                        <a href="http://www.laminierabomboniere.it/" rel="noopener noreferrer" target="_blank"><img src={require("../img/laminiera.png")} className="w-100" alt="La Miniera bomboniere"/></a>
                    </div>
                    <div className="col-4 my-2">
                        <a href="http://www.dolcicosebomboniere.com/" rel="noopener noreferrer" target="_blank"><img src={require("../img/dolcicose.png")} className="w-100" alt="Dolci Cose bomboniere"/></a>
                    </div>
                </div>
                    {/*<a href="http://www.cabim.it/" rel="noopener noreferrer" target="_blank"><img src={require('../img/cabim.png')} className="w-25" alt="Cabim"/></a>*/}
                    <a href="http://www.ctfbomboniere.com/" rel="noopener noreferrer" target="_blank"><img src={require("../img/ctf.png")} className="w-25" id="ctf" alt="CTF Bomboniere"/></a>
                </div>
        </div>
    );
}

export default HomePageCorpo;