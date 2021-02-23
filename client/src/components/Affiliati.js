import React from 'react';
import {Link} from 'react-router-dom';

function Affiliati() {
    return (
        <div className="justify-content-center">
            <div className="row">
                <div className="col-xl-4 col-12 text-center d-sm-block d-none">
                    <a href="http://adsrl.com/2020_2021/AD_Catalogo_Collections_2020_21.pdf" rel="noopener noreferrer" target="_blank"><img src={require('../img/AD.png')} className="mt-xl-5 w-25 d-xl-inline d-none mx-xl-0 mx-3" alt="AD Regali"/></a>
                    <a href="https://www.cuorematto.org/" rel="noopener noreferrer" target="_blank"><img src={require('../img/cuorematto.png')} className="mt-xl-5 w-25 mx-xl-0 mx-3 d-xl-inline d-none" alt="Cuore Matto"/></a>
                    <a href="http://www.cabim.it/" rel="noopener noreferrer" target="_blank"><img src={require('../img/cabim.png')} className="mt-xl-5 mx-xl-0 mx-4 d-xl-inline d-none" id="cabim" alt="Cabim"/></a>
                    <a href="http://www.rdmdesign.it/" rel="noopener noreferrer" target="_blank"><img src={require('../img/rdm.png')} className="mt-xl-5 ml-xl-3 ml-6 d-xl-inline d-none" alt="RDM"/></a>
                    <a href="https://www.deboracarlucci.it/?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkMGyySF6FsE_xeWRejxYTiXgGO6d_AWfjq8Xg8o9qtHDBYQnPFuC5xoCPtMQAvD_BwE" rel="noopener noreferrer" target="_blank"><img src={require('../img/deboracarlucci.png')} className="mt-4 d-xl-inline d-none" id="debora" alt="Debora Carlucci"/></a>
                    <a href="http://www.laminierabomboniere.it/" rel="noopener noreferrer" target="_blank"><img src={require("../img/laminiera.png")} alt="La Miniera bomboniere" className="laminiera d-xl-inline d-none"/></a>
                    <a href="http://www.dolcicosebomboniere.com/" rel="noopener noreferrer" target="_blank"><img src={require("../img/dolcicose.png")} alt="Dolci Cose bomboniere" className="mt-3 d-xl-inline d-none"/></a>
                    <a href="http://www.ctfbomboniere.com/" rel="noopener noreferrer" target="_blank"><img src={require("../img/ctf.png")} id="ctf" className="ml-3 mt-2 d-xl-inline d-none" alt="CTF Bomboniere"/></a>
                </div>
                <div className="col-xl-4 col-12 text-center" id="logo-container">
                    <Link to="/">
                        <img src={require("../img/logo.png")} alt="Althea bomboniere" id="logo"/>
                    </Link>
                </div>
                <div className="col-xl-4 col-12 pt-xl-6 d-none d-lg-block seguicisu">
                    <h2 className="font-weight-bold text-center">Seguici su</h2>
                    <div className="row ml-3">
                        <div className="col-6 pr-1">
                            <a href="https://www.facebook.com/altheabomboniere" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook fa-2x float-right pr-0" id="facebook"/></a>
                        </div>
                        <div className="col-6 pl-1">
                            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram fa-2x" id="instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Affiliati;