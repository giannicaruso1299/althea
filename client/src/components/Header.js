import React, {useState} from "react";


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
        console.log(classes);
        classes.forEach(classe => {
            if(classe === 'fa-plus-circle') {
                i.classList.replace(classe,'fa-minus-circle');
            } else if(classe === 'fa-minus-circle') {
                i.classList.replace(classe, 'fa-plus-circle');
            }
        });
        console.log(classes);
    }

    const createPath = (e) => {
        e.preventDefault();
        const html = e.target;
        window.location.href = "/" + html.innerHTML.toLowerCase();
    }

    const createPathConfettate = (e) => {
        e.preventDefault();
        const html = e.target;
        window.location.href = "/confettate/" + html.innerHTML.toLowerCase();
    }

    const createPathConfetti = (e) => {
        e.preventDefault();
        const html = e.target;
        window.location.href = "/confetti/" + html.innerHTML.toLowerCase();
    }

    return (
        <div>
            <div className="row mt-1" id="navigation">
                <div className="col-12 text-center mt-5 pt-5 pb-0">
                    <h1 className="navbar-motto">La scelta migliore per le tue cerimonie</h1>
                </div>
                <div className="row w-100">
                    <div className="col-12 d-lg-block d-none pt-4">
                        <nav className="navbar bg-transparent navbar-expand-lg" id="myLinks">
                            <ul className="navbar-nav">
                                <div className="row">
                                    <div className="col-3">
                                        <li className="nav-item d-lg-block d-none lista">
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                    </div>
                                    <div className="col-2">
                                        <li className="nav-item lista" onMouseEnter={()=>setIsShown2(true)} onMouseLeave = {()=>setIsShown2(false)}>
                                            <a className="nav-link h-50" href="/">Eventi</a>
                                            <ul className="drop-menu menu-1 text-center mt-0 dropdown-menu-sm-left d-sm-block d-none">
                                                {isShown2 && (
                                                    list2.map(list => (
                                                        <li key={list}>
                                                            <button className="btn-link font-weight-bold w-100" onClick={createPath} id="nav-link-lg">{list}</button>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        </li>
                                    </div>
                                    <div className="col-2">
                                        <li className="nav-item d-sm-block d-none" onMouseEnter={()=>setIsShown3(true)} onMouseLeave = {()=>setIsShown3(false)}>
                                            <a className="nav-link" href="/">Confettate</a>
                                            <ul className="drop-menu menu-1 text-center mt-0 dropdown-menu-sm-left d-sm-block d-none">
                                                {isShown3 && (
                                                    list3.map(list => (
                                                        <li key={list}>
                                                            <button className="btn-link font-weight-bold w-100" onClick={createPathConfettate} id="nav-link-lg">{list}</button>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        </li>
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <li className="nav-item d-sm-block d-none" onMouseEnter={()=>setIsShown4(true)} onMouseLeave = {()=>setIsShown4(false)}>
                                            <a className="nav-link" href="/">Confetti</a>
                                            <ul className="drop-menu menu-1 text-center dropdown-menu-sm-left d-sm-block d-none">
                                                {isShown4 && (
                                                    list4.map(list => (
                                                        <li key={list}>
                                                            <button className="btn-link font-weight-bold w-100" onClick={createPathConfetti} id="nav-link-lg">{list}</button>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        </li>
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <li className="nav-item d-sm-block d-none">
                                            <a className="nav-link" href="/">Portaciuccio</a>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-6 d-lg-none d-block mt-3 pt-1 ml-0 pl-0 align-items-center">
                        <nav className="navbar navbar-expand-lg bg-transparent" id="myLinks">
                            <button className="navbar-toggler ml-0 pl-0" id="toggler-button" type="button" data-toggle="collapse" href="#collapseContainer" aria-controls="collapseContainer" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars fa-2x" id="menu"/>
                            </button>
                        </nav>
                    </div>
                    <div className="col-6 d-lg-none d-block pt-2">
                        <div className="row justify-content-center">
                            <h5 className="font-weight-bold text-right">Seguici su</h5>
                        </div>
                        <div className="row float-right d-flex">
                            <div className="col-8">
                                <a href="https://www.facebook.com/altheabomboniere" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook fa-2x float-right ml-3" id="facebook"/></a>
                            </div>
                            <div className="col-4 pl-1">
                                <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram fa-2x" id="instagram"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid collapse navbar-collapse d-lg-none" id="collapseContainer">
                        <ul className="navbar-nav mr-auto">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link p-0" href="/">Home</a>
                                    </li>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link p-0" href="/">Eventi</a>
                                    </li>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    <span onClick={toggleButton}>
                                        <a className="d-lg-none d-block" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fas fa-plus-circle d-lg-none d-block float-right"/>
                                        </a>
                                    </span>
                                </div>
                                <div className="row">
                                    <div className="collapse" id="collapseExample2">
                                        <ul className="mt-0 dropdown-menu-sm-right d-block d-lg-none">
                                            {list2.map(item => (
                                                <li key={item}>
                                                    <button className="btn-link nav-link-resp bg-transparent border-0 font-weight-bold" onClick={createPath}>{item}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link p-0" href="/">Confettate</a>
                                    </li>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    <span onClick={toggleButton}>
                                        <a className="d-lg-none d-block" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fas fa-plus-circle d-lg-none d-block float-right"/>
                                        </a>
                                    </span>
                                </div>
                                <div className="row">
                                    <div className="collapse" id="collapseExample3">
                                        <ul className="mt-0 dropdown-menu-sm-right d-block d-lg-none">
                                            {list3.map(item => (
                                                <li key={item}>
                                                    <button className="btn-link nav-link-resp bg-transparent border-0 font-weight-bold" onClick={createPathConfettate}>{item}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link p-0" href="/">Confetti</a>
                                    </li>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    <span onClick={toggleButton}>
                                        <a className="d-lg-none d-block" data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fas fa-plus-circle d-lg-none d-block float-right"/>
                                        </a>
                                    </span>
                                </div>
                                <div className="row">
                                    <div className="collapse" id="collapseExample4">
                                        <ul className="mt-0 dropdown-menu-sm-right d-block d-lg-none">
                                            {list4.map(item => (
                                                <li key={item}>
                                                    <button className="btn-link nav-link-resp bg-transparent border-0 font-weight-bold" onClick={createPathConfetti}>{item}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-start">
                                <a className="nav-link pl-0" href="/" style={{fontSize: "3.204724409448819vh"}}>Portaciuccio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;