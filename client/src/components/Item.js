import React from "react";

function Item({items, path}) {

    let width = window.innerWidth;

    return (
        <div className="row mb-5 d-flex flex-row">
            {items.map(item => (
                <div className="col-md-6 col-lg-3 col-6 my-3 text-center" key={item._id}>
                    <div className="flip-card" style={{margin: "0 auto"}}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {width >= 768 && (
                                    <img src={path + item.productImage} alt={item.name}/>
                                )}
                                {width < 768 && (
                                    <img src={path + item.productImageSm} className="w-100" alt={item.name}/>
                                )}
                            </div>
                            <div className="flip-card-back">
                                <p className="lead font-weight-bold">{item.name}</p>
                                <hr className="mx-3"/>
                                <small id="description_item">{item.description}</small>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Item;