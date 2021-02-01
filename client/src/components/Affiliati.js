import React from 'react';
import {Link} from 'react-router-dom';

function Affiliati() {
    return (
        <div className="container-fluid">
            <div className="row" id="logo-1st">
                <div className="col-xl-4 col-12">
                    <a href="http://adsrl.com/2020_2021/AD_Catalogo_Collections_2020_21.pdf" target="_blank"><img src={require('../img/AD.png')} className="mt-xl-5 w-25 d-xl-inline d-none mx-xl-0 mx-3"></img></a>
                    <a href="https://www.cuorematto.org/" target="_blank"><img src={require('../img/cuorematto.png')} className="mt-xl-5 w-25 mx-xl-0 mx-3 d-xl-inline d-none"></img></a>
                    <a href="http://www.cabim.it/" target="_blank"><img src={require('../img/cabim.png')} className="mt-xl-5 mx-xl-0 mx-4 d-xl-inline d-none" id="cabim"></img></a>
                    <a href="http://www.rdmdesign.it/" target="_blank"><img src={require('../img/rdm.png')} className="mt-xl-5 ml-xl-3 ml-6 d-xl-inline d-none"></img></a>
                    <a href="https://www.deboracarlucci.it/?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkMGyySF6FsE_xeWRejxYTiXgGO6d_AWfjq8Xg8o9qtHDBYQnPFuC5xoCPtMQAvD_BwE" target="_blank"><img src={require('../img/deboracarlucci.png')} className="mt-4 d-xl-inline d-none" id="debora"></img></a>
                    <a href="http://www.laminierabomboniere.it/" target="_blank"><img src={require("../img/laminiera.png")} alt="La Miniera bomboniere" className="laminiera"></img></a>
                    <a href="http://www.dolcicosebomboniere.com/" target="_blank"><img src={require("../img/dolcicose.png")} alt="Dolci Cose bomboniere" className="mt-3"></img></a>
                    <a href="http://www.ctfbomboniere.com/" target="_blank"><img src={require("../img/ctf.png")} className="w-25 ml-3"></img></a>
                </div>
                <div className="col-xl-4 col-12">
                    <Link to="/">
                        <img src={require("../img/logo.png")} alt="Althea bomboniere" id="logo"/>
                    </Link>
                </div>
                <div className="col-xl-4 col-12 mt-5 pt-sm-5 text-center pl-5 seguicisu">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="font-weight-bold">Seguici su</h2>
                            <div className="row justify-content-center">
                                <a href="https://www.facebook.com/altheabomboniere" target="_blank"><i className="fab fa-facebook fa-2x mr-2" id="facebook"></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-2x" id="instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Affiliati;