import React, {useState} from "react";
import {Link} from 'react-router-dom';

function Header() {

    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);

    const list2 = ['Nascita','Battesimo','Prima Comunione','Laurea','Matrimonio','Compleanno'];
    const list3 = ['Laurea','Battesimo','Compleanno','Matrimonio'];
    const list4 = ['Bianco','Rosa','Celeste','Rosso','Colorato','Speciali'];

    const toggleButton = (e) => {
        const i = e.target;
        const classes = i.classList;
        classes.forEach(classe => {
            if(classe === 'fa-plus-circle') {
                i.classList.replace(classe,'fa-minus-circle');
            } else if(classe === 'fa-minus-circle') {
                i.classList.replace(classe, 'fa-plus-circle');
            }
        });
        console.log(classes);
        // const button = document.querySelector('')
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row" id="logo-1st">
                    <div className="col-xl-4 col-12">
                        <a href="http://adsrl.com/2020_2021/AD_Catalogo_Collections_2020_21.pdf" target="_blank"><img src={require('../img/AD.png')} className="mt-xl-5 w-25 d-xl-inline d-none mx-xl-0 mx-3"></img></a>
                        <a href="https://www.cuorematto.org/" target="_blank"><img src={require('../img/cuorematto.png')} className="mt-xl-5 w-25 mx-xl-0 mx-3 d-xl-inline d-none"></img></a>
                        <a href="http://www.cabim.it/" target="_blank"><img src={require('../img/cabim.png')} className="mt-xl-5 mx-xl-0 mx-4 d-xl-inline d-none" id="cabim"></img></a>{/*<p className="lead font-weight-bold" id="position"><a href="https://goo.gl/maps/ynXyvTbm94ah4HA86" target="_blank" id="posLink">Via Bologna 94/A - 90047 Partinico (PA)</a></p>*/}
                        <a href="http://www.rdmdesign.it/" target="_blank"><img src={require('../img/rdm.png')} className="mt-xl-5 ml-xl-3 ml-6 d-xl-inline d-none"></img></a>{/*<p className="lead font-weight-bold" id="position"><a href="https://goo.gl/maps/ynXyvTbm94ah4HA86" target="_blank" id="posLink">Via Bologna 94/A - 90047 Partinico (PA)</a></p>*/}
                    </div>
                    <div className="col-12 col-xl-4 ml-md-0 text-center">
                        <Link to="/">
                            <img src={require("../img/logo.png")} alt="logo" className="" id="logo"></img>
                        </Link>
                    </div>
                    <div className="col-4 d-none d-xl-block text-center pt-4">
                        <div className="row">
                            <div className="col-6">
                                <a href="https://www.deboracarlucci.it/?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkMGyySF6FsE_xeWRejxYTiXgGO6d_AWfjq8Xg8o9qtHDBYQnPFuC5xoCPtMQAvD_BwE" target="_blank"><img src={require('../img/deboracarlucci.png')} className="mt-4" id="debora"></img></a>
                            </div>
                            <div className="col-6">
                                <h2>Seguici su</h2>
                                <div className="row justify-content-center">
                                    <a href="https://www.facebook.com/altheabomboniere" target="_blank"><i className="fab fa-facebook fa-2x mr-2" id="facebook"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-2x" id="instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row container-fluid" id="navigation">
                    <hr></hr>
                    <div className="col-12 text-center">
                        <h2 className="navbar-motto">La scelta migliore per le tue cerimonie</h2>
                    </div>
                    <nav className="navbar navbar-expand-xl bg-transparent" id="myLinks">
                        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars fa-2x" id="menu"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <li className="nav-item d-sm-block d-none lista">
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                    </div>

                                    <div className="col-6 d-sm-none d-block">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <li className="nav-item d-sm-block d-none lista" onMouseEnter={()=>setIsShown2(true)} onMouseLeave = {()=>setIsShown2(false)}>
                                            <a className="nav-link" href="#">Eventi</a>

                                            <ul className="drop-menu menu-1 text-center mt-0 dropdown-menu-sm-left d-sm-block d-none">
                                                {isShown2 && (
                                                    list2.map(list => (
                                                        <li><a>{list}</a></li>
                                                    ))
                                                )}
                                            </ul>
                                        </li>
                                    </div>

                                    <div className="col-6 d-sm-none d-block">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Eventi</a>
                                        </li>
                                    </div>

                                    <div className="col-6 d-sm-none d-block">
                                        <span onClick={toggleButton}>
                                            <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fas fa-plus-circle d-sm-none d-block float-right mt-5"></i>
                                            </a>
                                        </span>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 d-sm-none d-block">
                                            <div className="collapse" id="collapseExample2">
                                                <ul className="mt-0 dropdown-menu-sm-right d-block d-sm-none">
                                                    {list2.map(item => (
                                                        <li><a>{item}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <li className="nav-item d-sm-block d-none" onMouseEnter={()=>setIsShown3(true)} onMouseLeave = {()=>setIsShown3(false)}>
                                            <a className="nav-link" href="#">Confettate</a>

                                            <ul className="drop-menu menu-1 text-center mt-0 dropdown-menu-sm-left d-sm-block d-none">
                                                {isShown3 && (
                                                    list3.map(list => (
                                                        <li><a>{list}</a></li>
                                                    ))
                                                )}
                                            </ul>
                                        </li>
                                    </div>

                                    <div className="col-6 d-sm-none d-block">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Confettate</a>
                                        </li>
                                    </div>

                                    <div className="col-6 d-sm-none d-block">
                                        <span onClick={toggleButton}>
                                            <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fas fa-plus-circle d-sm-none d-block float-right mt-5"></i>
                                            </a>
                                        </span>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 d-sm-none d-block">
                                            <div className="collapse" id="collapseExample3">
                                                <ul className=" bg-dark mt-0 dropdown-menu-sm-left d-block d-sm-none">
                                                    {list3.map(list => (
                                                        <li><a>{list}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <li className="nav-item d-sm-block d-none" onMouseEnter={()=>setIsShown4(true)} onMouseLeave = {()=>setIsShown4(false)}>
                                            <a className="nav-link" href="#">Confetti</a>

                                            <ul className="drop-menu menu-1 text-center dropdown-menu-sm-left d-sm-block d-none">
                                                {isShown4 && (
                                                    list4.map(list => (
                                                        <li><a>{list}</a></li>
                                                    ))
                                                )}
                                            </ul>
                                        </li>
                                    </div>

                                    <div className="col-6 d-sm-none d-block">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Confetti</a>
                                        </li>
                                    </div>

                                    <div className="col-6 d-sm-none d-block">
                                        <span onClick={toggleButton}>
                                            <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fas fa-plus-circle d-sm-none d-block float-right mt-5"></i>
                                            </a>
                                        </span>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 d-sm-none d-block">
                                            <div className="collapse" id="collapseExample4">
                                                <ul className=" bg-dark mt-0 dropdown-menu-sm-left d-block d-sm-none">
                                                    {list4.map(list => (
                                                    <li><a>{list}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;