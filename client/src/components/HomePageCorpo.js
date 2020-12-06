import React from 'react';
import Header from "./Header";
import HomePage from "./HomePage";

function HomePageCorpo() {
    return (
        <div>
            <Header/>
            {/*xl*/}
            <div className="container-fluid mt-3 d-none d-xl-block" id="body">
                <div className="row">
                    <div className="col-8 ml-5" id="section">
                        <img src={require('../img/confetti.jpg')} className="image"></img>
                    </div>
                    <div className="col-3 ml-4" id="sidebar">

                    </div>
                </div>
            </div>
            {/*da sm a xl*/}
            <div className="container mt-3 d-xl-none d-block" id="body-resp">
                <div className="row">
                    <div className="col-12" id="section">
                        <img src={require('../img/confetti.jpg')} className="image"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageCorpo;