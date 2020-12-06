import React from 'react';
import '../index.css';
import {Jumbotron, Button} from 'reactstrap';

function Footer() {
    return (
        <div>
            <Jumbotron className="justify-content-around d-flex flex-row m-0">
                <div>
                    <h2>Contatti</h2>
                    <hr></hr>
                    <p>Althea di Caruso Adelfio</p>
                    <p>Via Bologna 94/a</p>
                    <p>Partinico, PA</p>
                    <p>Email: <a href="mailto:althea@altheabomboniere.it" id="mail">althea@altheabomboniere.it</a></p>
                    <p>Telefono: <a href="tel:3280886172" id="phone">328 0886172</a></p>
                </div>

                <div>
                    <h2>Seguici su</h2>
                    <hr></hr>
                    <div className="row">
                        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook fa-2x mx-4" id="facebook"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-2x" id="instagram"></i></a>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Footer;