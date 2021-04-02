import React from 'react';
import '../index.css';

function Footer() {
    return (
        <div className="mt-5 pb-3" id="myFooter">
            <div className="container-fluid">
                <div className="jumbotron-fluid justify-content-md-around">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="text-center">
                                <h4 className="h2 pt-md-5 pt-3 font-weight-bold normal-font">Contatti</h4>
                                <hr className="mx-md-0 mx-3"/>
                                <p>Althea Bomboniere di Caruso Adelfio</p>
                                <p>Via Bologna 94/A, Partinico (PA)</p>
                                <p>Email: <a href="mailto:althea@altheabomboniere.it" id="mail">althea@altheabomboniere.it</a></p>
                                <p>Telefono: <a href="tel:3280886172" id="phone">328 0886172</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="text-center">
                                <h4 className="h2 pt-md-5 pt-3 font-weight-bold normal-font">Veniteci a trovare!</h4>
                                <hr className="mx-md-0 mx-3"/>
                                <h4>Cercaci su Google!</h4>
                                <a rel="noopener noreferrer" href="https://www.google.com/maps/place/Caruso+Adelfio/@38.0412491,13.110435,15z/data=!4m8!1m2!2m1!1salthea+bomboniere+partinico!3m4!1s0x13198db2eab368b9:0x9beb6a033d5b2704!8m2!3d38.0412491!4d13.1191897" target="_blank">
                                    <img src={require("../img/maps.png")} className="g-maps" alt="Google Maps"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;