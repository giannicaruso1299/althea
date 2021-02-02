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
        console.log(classes);
        classes.forEach(classe => {
            if(classe === 'fa-plus-circle') {
                i.classList.replace(classe,'fa-minus-circle');
            } else if(classe === 'fa-minus-circle') {
                i.classList.replace(classe, 'fa-plus-circle');
            }
        });
        console.log(classes);

        function capitalize(string) {
            let first_letter = string.charAt(0);
            let uppercase = first_letter.toUpperCase();
            let totalString = string.slice(1);
            let computedString = uppercase + totalString;
            return computedString;

        }
    }

    return (
        <div>
            <div className="row mt-1" id="navigation">
                <div className="col-12 text-center mt-5 pt-5 mb-5 pb-0">
                    <h1 className="navbar-motto">La scelta migliore per le tue cerimonie</h1>
                </div>
                <div className="row m-1 w-100">
                    <div className="col-6 d-lg-none d-block pt-4">
                        <nav className="navbar navbar-expand-lg bg-transparent" id="myLinks">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars fa-2x" id="menu">&nbsp;</i>
                            </button>
                        </nav>
                    </div>
                    <div className="col-6 d-lg-none d-block float-right pr-3 pt-1">
                        <h5 className="font-weight-bold float-right ml-md-5 mr-3">Seguici su</h5>
                        <div className="row float-right ml-md-5 mx-2">
                            <a href="https://www.facebook.com/altheabomboniere" target="_blank"><i className="fab fa-facebook fa-2x mr-2" id="facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-2x" id="instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <div className="container-fluid">
        //         </div>
        //         <div className="row container-fluid" id="navigation">
        //             <hr></hr>
        //             <div className="col-12 text-center mb-sm-0 mb-5 pb-sm-0 pb-5">
        //                 <h2 className="navbar-motto">La scelta migliore per le tue cerimonie</h2>
        //             </div>
        //             <nav className="navbar navbar-expand-xl bg-transparent" id="myLinks">
        //                 <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                     <i className="fas fa-bars fa-2x" id="menu"></i>
        //                 </button>
        //
        //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                     <ul className="navbar-nav mr-auto">
        //                         <div className="row">
        //                             <div className="col-md-3 col-sm-6">
        //                                 <li className="nav-item d-sm-block d-none lista">
        //                                     <a className="nav-link" href="/">Home</a>
        //                                 </li>
        //                             </div>
        //
        //                             <div className="col-6 d-sm-none d-block">
        //                                 <li className="nav-item">
        //                                     <a className="nav-link" href="/">Home</a>
        //                                 </li>
        //                             </div>
        //
        //                             <div className="col-md-3 col-sm-6">
        //                                 <li className="nav-item d-sm-block d-none lista" onMouseEnter={()=>setIsShown2(true)} onMouseLeave = {()=>setIsShown2(false)}>
        //                                     <a className="nav-link" href="#">Eventi</a>
        //
        //                                     <ul className="drop-menu menu-1 text-center mt-0 dropdown-menu-sm-left d-sm-block d-none">
        //                                         {isShown2 && (
        //                                             list2.map(list => (
        //                                                 <li>
        //                                                     <Link to="/laurea">
        //                                                         <a>{list}</a>
        //                                                     </Link>
        //                                                 </li>
        //                                             ))
        //                                         )}
        //                                     </ul>
        //                                 </li>
        //                             </div>
        //
        //                             <div className="col-6 d-sm-none d-block">
        //                                 <li className="nav-item">
        //                                     <a className="nav-link" href="#">Eventi</a>
        //                                 </li>
        //                             </div>
        //
        //                             <div className="col-6 d-sm-none d-block">
        //                                 <span onClick={toggleButton}>
        //                                     <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
        //                                         <i className="fas fa-plus-circle d-sm-none d-block float-right mt-5"></i>
        //                                     </a>
        //                                 </span>
        //                             </div>
        //
        //                             <div className="row">
        //                                 <div className="col-12 d-sm-none d-block">
        //                                     <div className="collapse" id="collapseExample2">
        //                                         <ul className="mt-0 dropdown-menu-sm-right d-block d-sm-none">
        //                                             {list2.map(item => (
        //                                                 <li>
        //                                                     <Link to="/laurea">
        //                                                         <a>{item}</a>
        //                                                     </Link>
        //                                                 </li>
        //                                             ))}
        //                                         </ul>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //
        //                             <div className="col-md-3 col-sm-6">
        //                                 <li className="nav-item d-sm-block d-none" onMouseEnter={()=>setIsShown3(true)} onMouseLeave = {()=>setIsShown3(false)}>
        //                                     <a className="nav-link" href="#">Confettate</a>
        //
        //                                     <ul className="drop-menu menu-1 text-center mt-0 dropdown-menu-sm-left d-sm-block d-none">
        //                                         {isShown3 && (
        //                                             list3.map(list => (
        //                                                 <li>
        //                                                     <Link to="/laurea">
        //                                                         <a>{list}</a>
        //                                                     </Link>
        //                                                 </li>
        //                                             ))
        //                                         )}
        //                                     </ul>
        //                                 </li>
        //                             </div>
        //
        //                             <div className="col-6 d-sm-none d-block">
        //                                 <li className="nav-item">
        //                                     <a className="nav-link" href="#">Confettate</a>
        //                                 </li>
        //                             </div>
        //
        //                             <div className="col-6 d-sm-none d-block">
        //                                 <span onClick={toggleButton}>
        //                                     <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
        //                                         <i className="fas fa-plus-circle d-sm-none d-block float-right mt-5"></i>
        //                                     </a>
        //                                 </span>
        //                             </div>
        //
        //                             <div className="row">
        //                                 <div className="col-12 d-sm-none d-block">
        //                                     <div className="collapse" id="collapseExample3">
        //                                         <ul className=" bg-dark mt-0 dropdown-menu-sm-left d-block d-sm-none">
        //                                             {list3.map(list => (
        //                                                 <li>
        //                                                     <Link to="/laurea">
        //                                                         <a>{list}</a>
        //                                                     </Link>
        //                                                 </li>
        //                                             ))}
        //                                         </ul>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //
        //                             <div className="col-md-3 col-sm-6">
        //                                 <li className="nav-item d-sm-block d-none" onMouseEnter={()=>setIsShown4(true)} onMouseLeave = {()=>setIsShown4(false)}>
        //                                     <a className="nav-link" href="#">Confetti</a>
        //
        //                                     <ul className="drop-menu menu-1 text-center dropdown-menu-sm-left d-sm-block d-none">
        //                                         {isShown4 && (
        //                                             list4.map(list => (
        //                                                 <li>
        //                                                     <Link to="/laurea">
        //                                                         <a>{list}</a>
        //                                                     </Link>
        //                                                 </li>
        //                                             ))
        //                                         )}
        //                                     </ul>
        //                                 </li>
        //                             </div>
        //
        //                             <div className="col-6 d-sm-none d-block">
        //                                 <li className="nav-item">
        //                                     <a className="nav-link" href="#">Confetti</a>
        //                                 </li>
        //                             </div>
        //
        //                             <div className="col-6 d-sm-none d-block">
        //                                 <span onClick={toggleButton}>
        //                                     <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
        //                                         <i className="fas fa-plus-circle d-sm-none d-block float-right mt-5"></i>
        //                                     </a>
        //                                 </span>
        //                             </div>
        //
        //                             <div className="row">
        //                                 <div className="col-12 d-sm-none d-block">
        //                                     <div className="collapse" id="collapseExample4">
        //                                         <ul className=" bg-dark mt-0 dropdown-menu-sm-left d-block d-sm-none">
        //                                             {list4.map(list => (
        //                                                 <li>
        //                                                     <Link to="/laurea">
        //                                                         <a>{list}</a>
        //                                                     </Link>
        //                                                 </li>
        //                                             ))}
        //                                         </ul>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //
        //                         </div>
        //                     </ul>
        //                 </div>
        /*            </nav>*/
        /*        </div>*/
        /*    </div>*/
        /*</div>*/
    );
}

export default Header;