import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function HomePage() {

    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);

    const list1 = ['Uno','Due','Tre','Quattro','Cinque','Sei'];
    const list2 = ['Uno','Due','Tre','Quattro','Cinque','Sei'];
    const list3 = ['Uno','Due','Tre','Quattro','Cinque','Sei'];
    const list4 = ['Uno','Due','Tre','Quattro','Cinque','Sei'];

    return (
        <div className="App">
        <div className="container-fluid m-0" id="navigation">
          <h2 className="navbar-motto text-center">La scelta migliore per i tuoi eventi</h2>
  
          <nav className="navbar navbar-expand-lg bg-transparent" id="myLinks">
  
            <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars fa-2x" id="menu"></i>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6">
                <li className="nav-item d-sm-block d-none lista" onMouseEnter={()=>setIsShown(true)} onMouseLeave = {()=>setIsShown(false)}>
                  <a className="nav-link" href="#">Style 1</a>
                  <ul className="drop-menu menu-1 text-center mt-0 dropdown-menu-sm-left d-sm-block d-none">
                    {isShown && (
                      list1.map(list => (
                        <li><a>{list}</a></li>
                      ))
                    )}
                  </ul>
                </li>
                </div>
  
                <div className="col-6 d-sm-none d-block">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Style 1</a>
                  </li>
                </div>
  
                <div className="col-6 d-sm-none d-block">
                  <span>
                    <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      <i className="fas fa-plus-circle d-sm-none d-block float-right mt-3"></i>
                    </a>
                  </span>
                </div>
  
                <div className="row">
                  <div className="col-12 d-sm-none d-block">
                    <div className="collapse" id="collapseExample">
                      <ul className=" bg-dark mt-0 dropdown-menu-sm-left d-block d-sm-none">
                        <li><a>Uno</a></li>
                        <li><a>Due</a></li>
                        <li><a>Tre</a></li>
                        <li><a>Quattro</a></li>
                        <li><a>Cinque</a></li>
                        <li><a>Sei</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <li className="nav-item d-sm-block d-none lista" onMouseEnter={()=>setIsShown2(true)} onMouseLeave = {()=>setIsShown2(false)}>
                    <a className="nav-link" href="#">Style 2</a>
  
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
                    <a className="nav-link" href="#">Style 2</a>
                  </li>
                </div>
  
                <div className="col-6 d-sm-none d-block">
                  <span>
                    <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                      <i className="fas fa-plus-circle d-sm-none d-block float-right mt-3"></i>
                    </a>
                  </span>
                </div>
  
                <div className="row">
                  <div className="col-12 d-sm-none d-block">
                    <div className="collapse" id="collapseExample2">
                      <ul className=" bg-dark mt-0 dropdown-menu-sm-left d-block d-sm-none">
                        <li><a>Uno</a></li>
                        <li><a>Due</a></li>
                        <li><a>Tre</a></li>
                        <li><a>Quattro</a></li>
                        <li><a>Cinque</a></li>
                        <li><a>Sei</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <li className="nav-item d-sm-block d-none" onMouseEnter={()=>setIsShown3(true)} onMouseLeave = {()=>setIsShown3(false)}>
                    <a className="nav-link" href="#">Style 3</a>
  
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
                    <a className="nav-link" href="#">Style 3</a>
                  </li>
                </div>
  
                <div className="col-6 d-sm-none d-block">
                  <span>
                    <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                      <i className="fas fa-plus-circle d-sm-none d-block float-right mt-3"></i>
                    </a>
                  </span>
                </div>
  
                <div className="row">
                  <div className="col-12 d-sm-none d-block">
                    <div className="collapse" id="collapseExample3">
                      <ul className=" bg-dark mt-0 dropdown-menu-sm-left d-block d-sm-none">
                        <li><a>Uno</a></li>
                        <li><a>Due</a></li>
                        <li><a>Tre</a></li>
                        <li><a>Quattro</a></li>
                        <li><a>Cinque</a></li>
                        <li><a>Sei</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <li className="nav-item d-sm-block d-none" onMouseEnter={()=>setIsShown4(true)} onMouseLeave = {()=>setIsShown4(false)}>
                    <a className="nav-link" href="#">Style 4</a>
  
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
                    <a className="nav-link" href="#">Style 4</a>
                  </li>
                </div>
  
                <div className="col-6 d-sm-none d-block">
                  <span>
                    <a className="d-sm-none d-block" data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                      <i className="fas fa-plus-circle d-sm-none d-block float-right mt-3"></i>
                    </a>
                  </span>
                </div>
  
                <div className="row">
                  <div className="col-12 d-sm-none d-block">
                    <div className="collapse" id="collapseExample4">
                      <ul className=" bg-dark mt-0 dropdown-menu-sm-left d-block d-sm-none">
                        <li><a>Uno</a></li>
                        <li><a>Due</a></li>
                        <li><a>Tre</a></li>
                        <li><a>Quattro</a></li>
                        <li><a>Cinque</a></li>
                        <li><a>Sei</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container-fluid mb-4" id="corpo">
          <div className="row">

            <div className="col-lg-5 col-md-5 col-sm-12 bg-secondary mx-lg-5 mx-md-5 my-lg-0 my-3">
              <p>Ciao</p>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 bg-secondary my-lg-0 my-3">
              <p>Ciao</p>
            </div>
          </div>

          <div className="row mt-5">

            <div className="col-lg-5 col-md-5 col-sm-12 bg-secondary mx-lg-5 mx-md-5 my-lg-0 my-3">
              <p>Ciao</p>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 my-lg-0 my-3 bg-secondary">
              <p>Ciao</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomePage;