import React from 'react';
import '../index.css';

function Footer() {
    return (
        <div className="mt-5 pb-3" id="myFooter">
            <div className="container-fluid">
                <div className="row justify-content-sm-around justify-content-center">
                    <div className="mt-4 text-center text-sm-left">
                        <h3 className="font-weight-bold">Contatti</h3>
                        <hr className="bg-dark"/>
                        <p className="font-weight-bold">Althea Bomboniere di Caruso Adelfio</p>
                        <p className="font-weight-bold">Via Bologna 94/a</p>
                        <p className="font-weight-bold">Partinico, PA</p>
                        <p>Email: <a href="mailto:althea@altheabomboniere.it" id="mail">althea@ altheabomboniere.it</a></p>
                        <p className="font-weight-bold">Telefono: <a href="tel:3280886172" id="phone">328 0886172</a></p>
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="font-weight-bold text-center">Veniteci a trovare!</h3>
                        <hr className="bg-dark"/>
                        <a rel="noopener noreferrer" href="https://www.google.com/maps/place/Caruso+Adelfio/@38.0412491,13.110435,15z/data=!4m8!1m2!2m1!1salthea+bomboniere+partinico!3m4!1s0x13198db2eab368b9:0x9beb6a033d5b2704!8m2!3d38.0412491!4d13.1191897" target="_blank">
                            <img src={require("../img/maps.png")} className="g-maps" alt="Google Maps"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;