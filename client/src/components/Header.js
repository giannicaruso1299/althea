import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 text-center">
                <p className="lead font-weight-bold" id="position"><a href="https://goo.gl/maps/ynXyvTbm94ah4HA86" rel="noopener noreferrer" target="_blank" id="posLink">Via Bologna 94/a - 90047 Partinico (PA) </a></p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 ml-md-0">
              <Link to="/">
                <img src={require("../img/logo.png")} alt="logo" className="w-100" id="logo"></img>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                
            </div>
          </div>
        </div>
    );
}

export default Header;