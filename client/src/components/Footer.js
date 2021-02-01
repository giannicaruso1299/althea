import React from 'react';
import '../index.css';
import {Jumbotron, Button} from 'reactstrap';

function Footer() {
    return (
        <div>
            <Jumbotron>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h1>Contatti</h1>
                    </div>
                </div>
            </Jumbotron>
            {/*<Jumbotron className="justify-content-sm-around justify-content-center d-flex flex-row m-0">*/}
            {/*    <div className="d-sm-block">*/}
            {/*        <h1 className="text-center">Contatti</h1>*/}
            {/*        <hr></hr>*/}
            {/*        <div className="text-center">*/}
            {/*            <p>Althea di Caruso Adelfio</p>*/}
            {/*            <p>Via Bologna 94/a</p>*/}
            {/*            <p>Partinico, PA</p>*/}
            {/*            <p>Email: <a href="mailto:althea@altheabomboniere.it" id="mail">althea@ altheabomboniere.it</a></p>*/}
            {/*            <p>Telefono: <a href="tel:3280886172" id="phone">328 0886172</a></p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="text-center ml-sm-0 ml-3 mt-5">*/}
            {/*        <a href="https://www.google.com/maps/place/Caruso+Adelfio/@38.0412491,13.110435,15z/data=!4m8!1m2!2m1!1salthea+bomboniere+partinico!3m4!1s0x13198db2eab368b9:0x9beb6a033d5b2704!8m2!3d38.0412491!4d13.1191897" target="_blank">*/}
            {/*            <img src={require("../img/maps.png")} className="g-maps ml-4 pl-3"/>*/}
            {/*        </a>*/}
            {/*        <h2>Venite a trovarci!</h2>*/}
            {/*    </div>*/}
            {/*</Jumbotron>*/}
        </div>
    );
}

export default Footer;