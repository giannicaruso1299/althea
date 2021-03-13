import React from "react";

function Item({items, path}) {
    return (
        <div className="mb-5">
            {/*md only*/}
            <div className="row d-md-flex flex-row d-none">
                {items.map(item => (
                    <div className="col-lg-3 col-sm-6 my-3 justify-content-center" key={item.name}>
                        <div className="flip-card mx-5">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={path + item.productImage} alt={item.name}/>
                                </div>
                                <div className="flip-card-back">
                                    <p className="lead font-weight-bold">{item.name}</p>
                                    <hr className="mx-3"/>
                                    <small className="lead">{item.description}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/*sm only*/}
            <div className="row d-block d-flex flex-row d-md-none">
                {items.map(item => (
                    <div className="col-6 my-3" key={item.name}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={path + item.productImageSm} className="w-100" alt={item.name}/>
                                </div>
                                <div className="flip-card-back">
                                    <p className="font-weight-bold">{item.name}</p>
                                    <hr className="mx-2"/>
                                    <small className="font-weight-bold">{item.description}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Item;