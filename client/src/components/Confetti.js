import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Affiliati from "./Affiliati";
import axios from "axios";
import Loader from "react-loader-spinner";

function Confetti(colore) {

    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    let path="http://althea-bomboniere.it:5000/";

    useEffect(() => {
        const fetchItems = async () => {
            const path = "http://althea-bomboniere.it:5000/api/items/" + myPath;
            await axios.get(path)
                .then(res => {
                    setItems(res.data)
                    setLoaded(true)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetchItems().then(() => console.log("fatto"));
    },[]);

    const myPath = colore.location.pathname.slice(1);
    const purifiedColor = myPath.slice(myPath.indexOf('/') + 1);

    return (
        <div className="container-fluid">
            <Affiliati/>
            <Header/>
            <h1 className="text-center mt-3 text-capitalize">I nostri confetti<br/>Di tutti i gusti e colori!</h1>
            <h1 className="text-center mt-1 text-capitalize">{purifiedColor}</h1>
            {(!loaded) && (
                <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80} />
            )}
            {/**md only**/}
            <div className="row d-md-flex flex-row d-none">
                {items.map(item => (
                    <div className="col-lg-3 col-sm-6 my-3 justify-content-center">
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
            {/**sm only**/}
            <div className="row d-block d-flex flex-row d-md-none">
                {items.map(item => (
                    <div className="col-6 my-3">
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

export default Confetti;